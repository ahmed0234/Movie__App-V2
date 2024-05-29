import { moviesGenreList } from "@/utils/data";
import MovieCard from "@/Components/Server/movieListingCard";
import Moviepagination from "@/Components/Server/movieGenrePagination";

async function findMovieGenre(params: any) {
  const movieGenre = moviesGenreList.find((genre) => genre.name === params);
  return movieGenre.name.toString();
}

async function findtheGenreandthenreturntheresults(params: any) {
  const movieGenre = moviesGenreList.find((genre) => genre.name === params);
  if (movieGenre) {
    const url = movieGenre.url;
    const res = await fetch(url, { next: { revalidate: 21600 } });
    const data = await res.json();
    return data;
  }
}

async function Page({ params }: any) {
  const moviesData = await findtheGenreandthenreturntheresults(params.slug);
  const totalPages = moviesData.total_pages;
  const moviegenre = await findMovieGenre(params.slug);

  return (
    <div>
      <h1 className="mb-6 inline-block border-b pb-3 text-2xl capitalize">
        {params.slug} {moviesData.page}
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
      <div className="pb-6">
        <Moviepagination Genre={moviegenre} TotalPages={totalPages} />
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  return moviesGenreList.map((movie) => ({
    slug: movie.name,
  }));
}

export default Page;
