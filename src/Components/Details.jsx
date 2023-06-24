import React, { useState, useEffect } from "react";
import "../Assests/Details.css";
import ShareIcon from "@mui/icons-material/Share";
import AddIcon from "@mui/icons-material/Add";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import axios from "../API/axios";
import { useLocation } from "react-router-dom";
import Youtube from "react-youtube";
import movieTrailer from "movie-trailer";
import ClearIcon from "@mui/icons-material/Clear";

let imageUrl = "https://image.tmdb.org/t/p/w780";
const api_key = process.env.REACT_APP_API_KEY;

const Details = () => {
  const [id, setId] = useState(0);
  const [details, setDetails] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");
  const location = useLocation();
  const movieurl = `/movie/${id}?api_key=${api_key}`;
  // const trailer = `/movie/${id}/videos?api_key={your_api_key}&language=hi-IN&region=IN&with_original_language=hi`;
  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  useEffect(() => {
    document.title = (details.title || details.name) + " - Disney+ Hotstar";
  }, [details.title || details.name]);

  ////////////////// Setting Trailer URL for onClick function//////////////
  const handleClick = (details) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(details.title || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
          console.log(url);
        })
        .catch((error) => console.log(error));
    }
  };

  /////////////////////////// Movie ID Set /////////////////////////////
  useEffect(() => {
    // console.log(location.state.id);
    const movie_id = location.state.id;
    setId(movie_id);
  }, [location]);

  ////////////////////////// Request for movie details ////////////////
  useEffect(() => {
    async function fetchDetails() {
      const request = await axios.get(movieurl);
      // console.log(request.data);
      setDetails(request.data);
      return request;
    }
    fetchDetails();
  }, [movieurl]);

  /////////////////////// Returning Component ///////////////////////
  return (
    <>
      <div className="details">
        <div className="details_container">
          <div className="details_content">
            <h1>{details.title}</h1>
            <ul>
              <li>1hr 25min </li>
              <li> {details.release_date}</li>
            </ul>
            <p>{details.overview}</p>

            <div className="watch">
              <div className="watch_left" onClick={() => handleClick(details)}>
                <PlayArrowIcon style={{ fontSize: "40px" }} />
                <p>Watch Trailer</p>
              </div>
              <div className="watch_right">
                <div className="watchlist">
                  <AddIcon style={{ fontSize: "30px" }} />
                  <p>Watchlist</p>
                </div>
                <div className="share">
                  <ShareIcon style={{ fontSize: "30px" }} />
                  <p>Share</p>
                </div>
              </div>
            </div>
          </div>
          <img
            src={`${imageUrl}${details.backdrop_path || details.poster_path}`}
            alt=""
          />
        </div>
      </div>
      <div className="empty"></div>
      {trailerUrl && (
        <div className="trailer_container">
          <div
            className="close"
            onClick={() => {
              setTrailerUrl("");
            }}
          >
            <ClearIcon />
          </div>
          <Youtube videoId={trailerUrl} opts={opts} />
        </div>
      )}
    </>
  );
};

export default Details;
