import Movieinformation from "@/components/Server/MovieInformation";


type moviedata = {
  id: number,
  imdb_id: string,
  origin_country: string[],
  original_language: string,
  original_title: string,
  overview: string,
  popularity: number,
  poster_path: string,
  release_date: string,
  runtime: number,
  title: string,
  video: boolean,
  vote_average: number,
  vote_count: number
}

async function fetchMovieDatabyID(params: any) {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${params}?api_key=${process.env.TMDB_KEY}&append_to_response=credits`
  );
  const data = await res.json();
  return data;
}

async function Page({ params }: any) {
  const movieData: moviedata = await fetchMovieDatabyID(params.id);
  return (
    <>
      <Movieinformation  movieDescription={movieData.} />
    </>
  );
}

export default Page;
