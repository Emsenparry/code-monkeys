import React, { useEffect, useState } from "react";
import axios from "axios";
import "./GalleryCards.scss";

const GalleryCard = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const url = "http://localhost:4000/products";
    const getData = async () => {
      try{
        const result = await axios.get(url)
        console.log(result);
        setProducts(result.data)
      } catch(err) {
        console.error(err)
      }
      
    }
    getData()
  }, [setProducts]);

  return (
    <div className="containerGallery">
      {products && products.map(data => (
        <figure className="productCard" key={data.id}>
          <img src={data.img} alt="img_news" />
          <h2>{data.title}</h2>
          <p>{data.description}</p>
        </figure>
      ))}
    </div>
  );
};

export default GalleryCard;
