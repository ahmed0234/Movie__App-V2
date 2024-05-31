import MovieCard from "@/Components/Server/movieListingCard";

export const revalidate = 7200; // revalidate at most every hour

async function fetchTrendingMovies() {
  const res = await fetch(
    `https://api.themoviedb.org/3/trending/movie/day?api_key=${process.env.TMDB_KEY}`
  );
  const data = await res.json();
  return data;
}

async function MoviesPage() {
  const moviesData = await fetchTrendingMovies();
  return (
    <section className="sectionContainer  pb-10">
      <h1 className="mb-6 inline-block border-b pb-3 text-2xl">
        Trending Movies Now a Days
      </h1>
      {/* eslint-disable-next-line */}
      <div className="movie__card__container grid grid-cols-6 gap-6 max-2xl:grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 max-sm:place-items-center">
        {moviesData.results.map((movie: any, idx: any) => (
          <MovieCard
            movieImage={movie.poster_path}
            movieName={movie.original_title}
            movieReleaseDate={movie.release_date}
            movieDescription={movie.overview}
            movieId={movie.id}
            key={idx}
          />
        ))}
      </div>
    </section>
  );
}

export default MoviesPage;
