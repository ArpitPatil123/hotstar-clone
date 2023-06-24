import React, { useState, useEffect } from "react";
import "../Assests/MoviesSlider.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import AddIcon from "@mui/icons-material/Add";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import axios from "../API/axios";
import { Link } from "react-router-dom";

let url = "https://image.tmdb.org/t/p/original";

const SliderRow = ({ title, fetchUrl }) => {
  const [movies, setMovies] = useState([]);
  let slidesToShow = 7;

  //////////////////////// Requesting movies from TMDB  API //////////////////////////////
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
  }, [fetchUrl]); // fetchUrl is necessary to tell useEffect that update the fetchUrl everytime.

  ///////////////////////// Customizing slider arrows //////////////////////////
  const NextArrow = (props) => {
    const { className, onClick, currentSlide, slideCount } = props;
    return (
      <>
        {currentSlide !== slideCount - slidesToShow && (
          <div className={className} onClick={onClick}>
            <ArrowForwardIosIcon style={{ color: "white", fontSize: "30px" }} />
          </div>
        )}
      </>
    );
  };

  const PrevArrow = (props) => {
    const { className, onClick, currentSlide } = props;
    return (
      <>
        {currentSlide !== 0 && (
          <div className={className} onClick={onClick}>
            <ArrowBackIosIcon style={{ color: "white", fontSize: "30px" }} />
          </div>
        )}
      </>
    );
  };

  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: slidesToShow,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          infinite: false,
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };

  ////////////////////////// Returning Components //////////////////////////////
  return (
    <div>
      <div className="movies_container" style={{ width: "100%" }}>
        <h2 className="brand_hover">{title}</h2>
        <Slider {...settings} initialSlide={0}>
          {movies.map((data) => (
            <Link to={"details/" + data.id} state={{ id: data.id }}>
              <div className="movie_card">
                <img
                  src={`${url}${data.poster_path || data.backdrop_path}`}
                  alt={data.title}
                />
                <div className="content_buttons">
                  <div className="card_content">
                    <h3>{data.title || data.name}</h3>
                    {/* <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit..
                    </p> */}
                  </div>
                  <div className="card_buttons">
                    <button>
                      <PlayArrowIcon style={{ fontSize: "14px" }} />
                      watch trailer
                    </button>
                    <button>
                      <AddIcon style={{ fontSize: "14px" }} />
                      add to watchlist
                    </button>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default SliderRow;
