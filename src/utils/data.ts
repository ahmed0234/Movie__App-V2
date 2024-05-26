export const moviesGenreList = [
  {
    id: 1,
    name: "trending",
    url: `https://api.themoviedb.org/3/trending/movie/day?api_key=${process.env.TMDB_KEY}`,
  },
  {
    id: 2,
    name: "popular",
    url: `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.TMDB_KEY}`,
  },
  {
    id: 3,
    name: "toprated",
    url: `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.TMDB_KEY}`,
  },
  {
    id: 4,
    name: "upcoming",
    url: `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.TMDB_KEY}`,
  },
  {
    id: 5,
    name: "action",
    url: `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.TMDB_KEY}&with_genres=28`,
  },
  {
    id: 6,
    name: "comedy",
    url: `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.TMDB_KEY}&with_genres=35`,
  },
  {
    id: 7,
    name: "horror",
    url: `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.TMDB_KEY}&with_genres=27`,
  },
  {
    id: 8,
    name: "romance",
    url: `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.TMDB_KEY}&with_genres=10749`,
  },
  {
    id: 9,
    name: "war",
    url: `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.TMDB_KEY}&with_genres=10752`,
  },
  {
    id: 10,
    name: "documentary",
    url: `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.TMDB_KEY}&with_genres=99`,
  },
  {
    id: 11,
    name: "upcoming",
    url: `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.TMDB_KEY}`,
  },
];
