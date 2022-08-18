const apiKey = "e07f5da07b3e1be9c5f23588cc5eae82";

const requests = {
  // fetchTrending: `/trending/all/week?api_key=${apiKey}&language=en-US`,
  fetchTrending: `/discover/movie?api_key=${apiKey}&language=hi-IN&region=IN&sort_by=popularity.desc&page=1&primary_release_year=2022&with_original_language=hi`,
  fetchPopular: `/discover/movie?api_key=${apiKey}&language=hi-IN&region=IN&sort_by=now_playing&page=1&primary_release_year=2022&with_original_language=hi`,
  fetchEnglish: `/trending/all/week?api_key=${apiKey}&language=en-US`,
  fetchUpcoming: `/discover/movie?api_key=${apiKey}&language=hi-IN&region=IN&with_original_language=hi`,
  fetchKids: `/discover/tv?api_key=${apiKey}&language=hi-IN&region=IN&with_original_language=hi&with_genres=10762`,
  fetchDrama: `/discover/tv?api_key=${apiKey}&language=hi-IN&region=IN&sort_by=popularity.desc&with_original_language=hi&with_genres=18`,
};

// https://api.themoviedb.org/3/discover/movie?api_key=e07f5da07b3e1be9c5f23588cc5eae82&language=hi-IN&region=IN&sort_by=popularity.desc&page=1&primary_release_year=2018&with_original_language=hi

export default requests;

//https://api.themoviedb.org/3/movie/783461?api_key=e07f5da07b3e1be9c5f23588cc5eae82
