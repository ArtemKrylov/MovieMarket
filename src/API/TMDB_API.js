import axios from 'axios';

export default class TMDB_API {
  //constants for trending search
  static TRENDING_TIME = { WEEK: 'week', DAY: 'day' };
  static TRENDING_MEDIA = {
    ALL: 'all',
    MOVIE: 'movie',
    TV: 'tv',
    PERSON: 'person',
  };

  #API_KEY = 'f293ab75e17f1c115cbcc8975c78ff57';
  #BASE_URL = 'https://api.themoviedb.org/3';
  // constructor() {}

  //search trending
  //two parameters: trending time (week/day), media(all/movie/tv/person)
  fetchTrending(
    media = TMDB_API.TRENDING_MEDIA.MOVIE,
    time = TMDB_API.TRENDING_TIME.DAY
  ) {
    return axios.get(
      `${this.#BASE_URL}/trending/${media}/${time}?api_key=${this.#API_KEY}`
    );
  }

  fetchByQuery(query, page = 1) {
    return axios.get(
      `${this.#BASE_URL}/search/movie?api_key=${
        this.#API_KEY
      }&query=${query}&page=${page}`
    );
  }

  fetchById(id) {
    return axios.get(`${this.#BASE_URL}/movie/${id}?api_key=${this.#API_KEY}`);
  }

  fetchMovieCredits(id) {
    return axios.get(
      `${this.#BASE_URL}/movie/${id}/credits?api_key=${
        this.#API_KEY
      }&language=en-US`
    );
  }

  fetchReviews(id, page = 1) {
    return axios.get(
      `${this.#BASE_URL}/movie/${id}/reviews?api_key=${
        this.#API_KEY
      }&language=en-US&page=${page}`
    );
  }
}
