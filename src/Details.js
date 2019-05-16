import React, { Component } from "react";
// import Pet from "./Pet";
import pet from "@frontendmasters/pet";
import Carousel from "./Carousel";
import ErrorBoundary from "./ErrorBoundaries";

class Details extends Component {
  state = { loading: true };

  componentDidMount() {
    // throw new Error("OMG WTF! LMAO!");
    pet.animal(this.props.id).then(({ animal }) => {
      this.setState({
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
  render() {
    if (this.state.loading) return <h1>loading ...</h1>;
    const { animal, breed, location, description, name, media } = this.state;
    return (
      <div className="details">
        <Carousel media={media} />
        <div>
          <h1>{name}</h1>
          <h2>{`${animal}-${breed}-${location}-`}</h2>
          <button>Adopt {name}</button>
          <p>{`${description}`}</p>
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
NOTE ON "{...props}"... 

Instead of naming every single prop and sending them down to details... 
and instead of doing "props={props}" 

{...props} enables the convenience of the same dot-notation in each child

*/
