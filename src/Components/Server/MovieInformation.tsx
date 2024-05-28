import Image from "next/image";

type props = {
  moviePoster: string;
  movieName: string;
  movieReleaseDate: string;
  movieDescription: string;
  movieRuntime: number;
  movieGenre: any[];
  movieDirector?: string;
  movieOriginalLanguage: string;
  moviebgimage: string;
};

export default function MovieInformation({
  moviePoster,
  movieName,
  movieReleaseDate,
  movieDescription,
  movieRuntime,
  movieGenre,
  movieDirector,
  movieOriginalLanguage,
  moviebgimage,
}: props) {
  const movieimgsrc = `https://image.tmdb.org/t/p/original${moviePoster}`;
  const moviegenre = movieGenre.map((genre) => genre.name).join(", ");
  const moviebgcover = `https://image.tmdb.org/t/p/original${moviebgimage}`;
  function truncateString(input: string) {
    const maxLength = 150;
    if (input.length <= maxLength) {
      return input;
    }
    return input.slice(0, maxLength) + "..........";
  }

  return (
    <>
      <div className="rounded-xl bg-neutral-950 text-gray-50">
        <div
          className={` container mx-auto px-4 py-12 md:px-6 md:py-16 lg:px-2 lg:py-20`}
          style={{
            background: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.6)), url(${moviebgcover})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
            <div className="flex flex-col items-center gap-4 ">
              <div className="relative aspect-[2/3] w-[280px] overflow-hidden rounded-xl sm:w-[400px] md:w-[300px] lg:w-[400px] xl:w-[500px] 2xl:w-[600px]">
                <Image
                  alt="Movie Poster"
                  className="size-full object-cover"
                  layout="fill"
                  src={movieimgsrc}
                  style={{
                    objectFit: "cover",
                  }}
                />
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <div>
                <h1 className="text-3xl font-bold md:text-4xl lg:text-5xl">
                  {movieName}
                </h1>
                <p className="mt-2 text-gray-400">
                  {truncateString(movieDescription)}
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-sm font-medium uppercase text-gray-400">
                    Release Date
                  </div>
                  <div className="text-base font-medium">
                    {movieReleaseDate}
                  </div>
                </div>
                <div>
                  <div className="text-sm font-medium uppercase text-gray-400">
                    Genre
                  </div>
                  <div className="text-base font-medium">{moviegenre}</div>
                </div>
                <div>
                  <div className="text-sm font-medium uppercase text-gray-400">
                    Runtime
                  </div>
                  <div className="text-base font-medium">{movieRuntime}</div>
                </div>
                <div>
                  <div className="text-sm font-medium uppercase text-gray-400">
                    Original Language
                  </div>
                  <div className="text-base font-medium">
                    {movieOriginalLanguage}
                  </div>
                </div>
              </div>
              <div>
                <div className="text-sm font-medium uppercase text-gray-400">
                  Plot Summary
                </div>
                <div className="text-base font-medium">{movieDescription}</div>
              </div>
            </div>
          </div>
        </div>
        <section className="Cast__Area border">
          <h1>Casts</h1>
        </section>
      </div>
    </>
  );
}
