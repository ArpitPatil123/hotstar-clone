import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import "../Assests/Slider.css";
import SliderData from "../Data/SliderData";
import axios from "../API/axios";
import requests from "../API/requests";

const ImageSlide = () => {
  const fetchUrl = requests.fetchTrending;
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // if [], run once when the row(recommended) loads,and don't run again
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      // above line will send get request like --
      // https://api.themoviedb.org/3/trending/all/week?api_key=${apiKey}&language=en-US
      console.log(request.data.results);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  const PreviousBtn = (props) => {
    const { className, onClick } = props;
    return (
      <div className={className} onClick={onClick}>
        <ArrowBackIosIcon style={{ color: "white", fontSize: "35px" }} />
      </div>
    );
  };

  const NextBtn = (props) => {
    const { className, onClick } = props;
    return (
      <div className={className} onClick={onClick}>
        <ArrowForwardIosIcon style={{ color: "white", fontSize: "35px" }} />
      </div>
    );
  };

  const settings = {
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToScroll: 1,
    slidesToShow: 1,
    centerMode: true,
    centerPadding: "75px",
    prevArrow: <PreviousBtn />,
    nextArrow: <NextBtn />,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          centerMode: true,
          centerPadding: "10px",
        },
      },
    ],
  };
  return (
    <div className="slider">
      <Slider {...settings}>
        {SliderData.map((data, index) => (
          <div className="slider_container">
            <div className="slider_content">
              <h1>{data.title}</h1>
              <ul>
                {data.tags.map((i) => (
                  <li>{i}</li>
                ))}
              </ul>
              <p>{data.des}</p>
            </div>
            <img src={data.image} alt="" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlide;
