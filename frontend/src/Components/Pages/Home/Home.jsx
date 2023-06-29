import React from "react";
import Header from "../../Partials/Header/Header";
import CarouselImages from "../../Carousel/Carousel";
import GalleryCard from "../GalleryCards/GalleryCards";

const Home = () => {
  return (
    <>
      <Header />;
      <CarouselImages />
      <GalleryCard />
    </>
  );
};

export default Home;
