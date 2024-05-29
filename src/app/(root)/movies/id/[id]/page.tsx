import Movieinformation from "@/Components/Server/MovieInformation";

interface genreobject {
  id: number;
  name: string;
}

type Genre = genreobject[];

interface CastMember {
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  profile_path: string;
  cast_id: number;
  character: string;
  credit_id: string;
}

interface Credits {
  cast: CastMember[];
  crew: any[];
}

interface moviedata {
  backdrop_path: string;
  genres: Genre;
  id: number;
  imdb_id: string;
  origin_country: string[];
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  runtime: number;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  credits: Credits;
  videos: any;
}

async function fetchMovieDatabyID(params: any) {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${params}?api_key=${process.env.TMDB_KEY}&append_to_response=credits,videos`,
    { cache: "no-store" }
  );
  const data = await res.json();

  return data;
}

async function Page({ params }: any) {
  const movieData: moviedata = await fetchMovieDatabyID(params.id);
  return (
    <>
      <Movieinformation
        movieDescription={movieData.overview}
        movieGenre={movieData.genres}
        movieName={movieData.title || movieData.original_title}
        moviePoster={movieData.poster_path}
        movieRuntime={movieData.runtime}
        key={movieData.id}
        movieReleaseDate={movieData.release_date}
        movieOriginalLanguage={movieData.original_language}
        moviebgimage={movieData.backdrop_path}
        CastInformation={movieData.credits.cast}
        movieTrailer={movieData.videos}
      />
    </>
  );
}

export default Page;
