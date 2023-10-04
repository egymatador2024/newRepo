import React from "react";
import "react-image-gallery/styles/css/image-gallery.css";
import './Carsoul.css';
import ImageGallery from 'react-image-gallery';
import img1 from '../learning-image-large.jpg';
import img2 from '../react-logo-large.jpg';
import img3 from '../responsive-image.jpg';

const images = [
  {
    original: img1,
  },
  {
    original: img2,
  },
  {
    original: img3,
  },
];

const Carousel = () => {
  return (
    <div className="Carousel">
      <ImageGallery
        items={images}
        autoPlay={true}
        showBullets={true}
        slideDuration={600}
        disableSwipe={false}
        infinite={true}
      />
    </div>
  );
}

export default Carousel;