import React, { useEffect } from "react";
import ImageSlide from "./ImageSlide";
import MoviesSlider from "./MoviesSlider";
// import Footer from "./Footer";

const Home = () => {
  useEffect(() => {
    document.title = "Disney+ Hotstar";
  }, []);
  return (
    <div className="home" style={{ overflow: "hidden" }}>
      <ImageSlide />
      <MoviesSlider />
    </div>
  );
};

export default Home;
