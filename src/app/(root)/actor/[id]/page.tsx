import Image from "next/image";
import MovieCard from "@/Components/Server/movieListingCard";

async function actorMoviesDetails(actorid: any) {
  const res = await fetch(
    `https://api.themoviedb.org/3/person/${actorid}/movie_credits?api_key=${process.env.TMDB_KEY}`
  );
  const data = await res.json();
  return data.cast;
}
async function actorPersonalDetails(actorid: any) {
  const res = await fetch(
    `https://api.themoviedb.org/3/person/${actorid}?api_key=${process.env.TMDB_KEY}`
  );
  const data = await res.json();
  return data;
}

export default async function Page({ params }: any) {
  const actorPersonalData: any = actorPersonalDetails(params.id);
  const actorMoviesData: any = actorMoviesDetails(params.id);
  const movieImageurl: any = `https://image.tmdb.org/t/p/original`;
  // Wait for the promises to resolve
  const [actorPersonal, actorMovies] = await Promise.all([
    actorPersonalData,
    actorMoviesData,
  ]);

  const sortedMovies: any = [...actorMovies].sort(
    (a, b) => new Date(b.release_date) - new Date(a.release_date)
  );

  return (
    <>
      {" "}
      <div className="mx-auto w-full max-w-6xl  px-4 py-8 md:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="flex flex-col items-center md:items-start">
            <div className="size-40 overflow-hidden rounded-full md:size-48">
              <Image
                alt="Actor's Profile Picture"
                className="size-full object-cover object-center"
                height={150}
                src={movieImageurl + actorPersonal.profile_path}
                width={150}
              />
            </div>
            <h1 className="mt-4 text-3xl font-bold md:mt-6">
              {actorPersonal.name}
            </h1>
            <div className="mt-2 flex items-center gap-2 text-gray-500 dark:text-gray-400">
              <CalendarIcon className="size-4" />
              <span>Born: {actorPersonal.birthday}</span>
            </div>
            <div className="mt-1 flex items-center gap-2 text-gray-500 dark:text-gray-400">
              <MapPinIcon className="size-4" />
              <span>Birthplace: {actorPersonal.place_of_birth}</span>
            </div>
          </div>
          <div className="space-y-6">
            <div className="prose dark:prose-invert max-w-none">
              <h2 className="mb-3 text-2xl font-bold">Biography</h2>
              <p>{actorPersonal.biography}</p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Department</h2>
              <ul className="space-y-2">
                <li className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold">
                      {actorPersonal.known_for_department}
                    </h3>
                  </div>
                </li>
              </ul>
              <div>
                <h2 className="text-2xl font-bold">Also Knows As</h2>
                {actorPersonal.also_known_as.map((name: any, idx: any) => (
                  <h3 className="font-semibold" key={idx}>
                    {name}
                  </h3>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-12 px-8">
        <h1 className="mb-8 text-2xl font-bold ">Known For</h1>
        <div className="movie__card__container grid grid-cols-5 gap-6 max-2xl:grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 max-sm:place-items-center">
          {sortedMovies.map((movie: any, idx: any) => (
            <MovieCard
              key={idx}
              movieDescription={movie.overview}
              movieImage={movie.poster_path}
              movieName={movie.title}
              movieReleaseDate={movie.release_date}
              movieId={movie.id}
            />
          ))}
        </div>
      </div>
    </>
  );
}

function CalendarIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
    </svg>
  );
}

function MapPinIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}
