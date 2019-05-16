import React, { Component } from "react";

class Carousel extends Component {
  state = {
    photos: [],
    active: 0
  };
  static getDerivedStateFromProps({ media }) {
    let photos = [`http://placecorgi.com/600/600`];

    // console.log("photos(#1): ", photos);
    if (media.length) {
      // console.log("Media Len: ", media.length);
      photos = media.map(({ large }) => large);
      // console.log("photos(#2)", photos);
    }
    return { photos };
  }

  handleIndexClick = e => {
    /* + (unary parsing) takes the place of parseInt(n,10) & has to be a number
     * so nums will come back as strings
     *  +"5" coerces to 5 -->  parseInt("5", 10)
     */

    this.setState({
      active: +e.target.dataset.index
    });
  };
  render() {
    // let corgi = [`http://placecorgi.com/600/600`];
    const { photos, active } = this.state;
    // console.log("t.s.active: ", active);
    // console.log("photos : ", photos);

    return (
      <div className="carousel">
        <img src={photos[active]} alt="animal" />
        <div className="carousel-smaller">
          {photos.map((photo, index) => (
            //eslint-disable-next-line
            <img
              key={photo}
              className={index === "active" ? "active" : ""}
              data-index={index}
              src={photo}
              alt="animal photo"
              onClick={this.handleIndexClick}
            />
          ))}
        </div>
      </div>
    );
  }
}
export default Carousel;

/**
 * 
 * 
 
 <img 
 className={index ==="active"? "active":""}
 data-index={index}
 src={} 
 alt="animal photo"
 onClick={handleIndexClick}
 />
 

 * 
 */
