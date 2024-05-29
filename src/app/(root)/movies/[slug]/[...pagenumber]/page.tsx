import MovieCard from "@/Components/Server/movieListingCard";
import { moviesGenreList } from "@/utils/data";
import Moviepagination from "@/Components/Server/movieGenrePagination";

async function fetchMovesData(pageCategory, pageNumber) {
  const movieGenre = moviesGenreList.find(
    (genre) => genre.name === pageCategory
  );
  if (movieGenre) {
    const url = movieGenre.url;
    const res = await fetch(`${url}&page=${pageNumber}`);
    const data = await res.json();
    return data;
  }
}

async function Page({ params }: any) {
  function separateStringAndNumbers(input: string) {
    // Find the index where the digits start
    const index = input.search(/\d/);

    if (index !== -1) {
      // Extract the string and the number separately
      const str = input.substring(0, index);
      const num = parseInt(input.substring(index));

      // Create and return an object with the separated values
      return {
        pageCategory: str,
        pagenumber: num,
      };
    } else {
      // Return null if the input doesn't contain any numbers
      return null;
    }
  }

  const { pageCategory, pagenumber } = separateStringAndNumbers(
    params.pagenumber.toString()
  );

  const movieData = await fetchMovesData(pageCategory, pagenumber);

  return (
    <div>
      <h1 className="mb-6 inline-block border-b pb-3 text-2xl capitalize">
        {params.slug} {movieData.page}
      </h1>
      <div className="movie__card__container grid grid-cols-6 gap-6 max-2xl:grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 max-sm:place-items-center">
        {movieData.results.map((movie: any, idx: any) => (
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
        <Moviepagination
          Genre={pageCategory}
          TotalPages={movieData.total_pages}
        />
      </div>
    </div>
  );
}

export default Page;
