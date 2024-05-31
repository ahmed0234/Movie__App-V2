import MovieCard from "@/Components/Server/movieListingCard";

async function page({ params }: any) {
  const searchUrl = `https://api.themoviedb.org/3/search/movie?api_key=${
    process.env.TMDB_KEY
  }&query=${encodeURIComponent(params.searchparams)}`;

  const res = await fetch(searchUrl);
  const movieData = await res.json();

  const sortedMovies: any = [...movieData.results].sort(
    (a, b) => new Date(b.release_date) - new Date(a.release_date)
  );

  return (
    <>
      <div className="text-3xl text-rose-600">{params.searchparams}</div>
      <div className="movie__card__container grid grid-cols-6 gap-6 max-2xl:grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 max-sm:place-items-center">
        {sortedMovies.map((movie: any, idx: any) => (
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
    </>
  );
}

export default page;
