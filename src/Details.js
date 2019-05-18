import React, { Component } from "react";
import pet from "@frontendmasters/pet";
import Carousel from "./Carousel";
import ErrorBoundary from "./ErrorBoundaries";
import ThemeContext from "./ThemeContext";
import { navigate } from "@reach/router";
import Modal from "./Modal";

class Details extends Component {
  state = { loading: true, showModal: false };

  componentDidMount() {
    pet.animal(this.props.id).then(({ animal }) => {
      //"animal.url" is url to go to in order to adopt the pet
      this.setState({
        url: animal.url,
        name: animal.name,
        animal: animal.type,
        location: `${animal.contact.address.city}, ${
          animal.contact.address.state
        }`,
        description: animal.description,
        media: animal.photos,
        breed: animal.breeds.primary,
        loading: false
      });
    }, console.error); //This console.error will just log out API errors
  }
  toggleModal = () => this.setState({ showModal: !this.state.showModal });
  adopt = () => navigate(this.state.url);
  render() {
    if (this.state.loading) return <h1>loading ...</h1>;
    const {
      animal,
      breed,
      location,
      description,
      name,
      media,
      showModal
    } = this.state;
    return (
      <div className="details">
        <Carousel media={media} />
        <div>
          <h1>{name}</h1>
          <h2>{`${animal}-${breed}-${location}-`}</h2>
          <ThemeContext.Consumer>
            {([theme]) => (
              <button onClick={this.toggleModal} style={{ background: theme }}>
                Adopt {name}
              </button>
              //See Note below re: destructuring
            )}
          </ThemeContext.Consumer>
          <p> {description}</p>
          {showModal ? (
            <Modal>
              <div>
                <h1>Would you like to adopt? {name}</h1>
                <div className="buttons">
                  <button onClick={this.adopt}>yes</button>
                  <button onClick={this.toggleModal}>no</button>
                </div>
              </div>
            </Modal>
          ) : null}
        </div>
      </div>
    );
  }
}

export default function DetailsWithErrorBoundary(props) {
  return (
    <ErrorBoundary>
      <Details {...props} />
    </ErrorBoundary>
  );
}

/*
RE: DESTRUCTURING
NOTE: above is destructured to pull the "theme" out
of the array...
{(themeHook) => (
<button style={{ backgroundColor: themeHook[0] }}>
...
*/

/*
NOTE ON "{...props}"... 

Instead of naming every single prop and sending them down to details... 
and instead of doing "props={props}" 

{...props} enables the convenience of the same dot-notation in each child

*/
