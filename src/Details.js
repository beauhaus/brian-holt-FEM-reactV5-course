import React, { Component } from "react";
// import Pet from "./Pet";
import pet from "@frontendmasters/pet";

// const Details = props => {
//   return (
//     <pre>
//       <code>{JSON.stringify(props, null, 4)}</code>
//     </pre>
//   );
// };
class Details extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     loading: true
  //   };
  // }
  state = { loading: true };

  componentDidMount() {
    pet.animal(this.props.id).then(({ animal }) => {
      this.setState({
        name: animal.name,
        animal: animal.type,
        location: `${animal.contact.address.city},
        ${animal.contact.address.state}`,
        description: animal.description,
        media: animal.photos,
        breed: animal.breeds.primary,
        loading: false
      });
    }, console.error); //This console.error will just log out API errors
  }
  render() {
    if (this.state.loading) return <h1>loading ...</h1>;
    const { animal, breed, location, description, name } = this.state;
    return (
      <div className="details">
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

export default Details;
