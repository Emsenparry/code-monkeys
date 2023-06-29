import axios from "axios";
import { useEffect, useState } from "react";
import "./GalleryCards.scss";

const GalleryCard = () => {
  const url = "http://localhost:4000/products";
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios.get(url).then((data) => {
      console.log(data.data.items);
      setProducts(data.data.items.slice(0, 8));
    });
  }, []);

  return (
    <div className="containerGallery">
      {products.map((data) => {
        return (
          <figure className="productCard" key={data.id}>
            <img src={data.img} alt="img_news" />
            <h2>{data.title}</h2>
            <p>{data.description}</p>
          </figure>
        );
      })}
    </div>
  );
};

export default GalleryCard;
