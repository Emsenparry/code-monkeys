import React, { useState, useEffect } from "react";
import axios from "axios";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Carousel.scss";

const CarouselImages = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const url = "http://localhost:4000/products";
    const getData = async () => {
      try{
        const result = await axios.get(url)
        setImages(result.data.items)
      } catch(err) {
        console.error(err)
      }
    }
    getData()
  }, [setImages]);

  return (
    <div className="parent top">
      <Carousel className="div1">
        {images && images.map((image) => (
          <Carousel.Item key={image.id}>
            <img src={image.img} alt="product_image" />
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselImages;
