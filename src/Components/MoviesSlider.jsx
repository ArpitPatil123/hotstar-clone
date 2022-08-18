import React from "react";
import SliderRow from "./SliderRow";
import requests from "../API/requests";
import "../Assests/MoviesSlider.css";

const MoviesSlider = () => {
  return (
    <div className="movies_slider_container">
      <SliderRow title="Trending Movies" fetchUrl={requests.fetchTrending} />
      <SliderRow title="Popular" fetchUrl={requests.fetchPopular} />
      <SliderRow title="English Collection" fetchUrl={requests.fetchEnglish} />
      <SliderRow
        title="Special Movies Collection"
        fetchUrl={requests.fetchUpcoming}
      />
      <SliderRow title="For Kids" fetchUrl={requests.fetchKids} />
      <SliderRow title="Poplar Shows" fetchUrl={requests.fetchDrama} />
    </div>
  );
};

export default MoviesSlider;
