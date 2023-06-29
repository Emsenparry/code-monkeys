import React, { useState, useEffect } from "react";
import axios from "axios";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Carousel.scss";

const CarouselImages = () => {
  const url = "http://localhost:4000/products";
  const [images, setImages] = useState([]);

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        console.log(response.data.items);
        setImages(response.data.items);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="parent top">
      <Carousel className="div1">
        {images.map((image) => (
          <Carousel.Item key={image.id}>
            <img src={image.img} alt="product_image" />
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselImages;
