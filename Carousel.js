import React, { Component } from "react";

class Carousel extends Component {
  state = {
    photos: [],
    active: 0
  };
  render() {
    console.log("hey");
    const { photos, active } = this.state;
    return (
      <div className="carousel">
        <img src={photos[active]} alt="animalphoto" />
        {photos.map((photo, idx) => (
          // eslint-disable-next-line
          <img
            key={photo}
            onClick={this.handleClick}
            src={photo}
            className={idx === "active" ? "active animal-thumbnail" : ""}
            alt="animal thumbnail"
          />
        ))}
        <div className="carousel-smaller">{}</div>
      </div>
    );
  }
}
export default Carousel;
