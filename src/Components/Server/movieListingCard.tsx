// components/MovieCard.js
import Image from "next/image";
import Link from "next/link";

const MovieCard = ({
  movieImage,
  movieName,
  movieReleaseDate,
  movieDescription,
  movieId,
}) => {
  const movieImageurl = `https://image.tmdb.org/t/p/original`;

  function truncateString(input: string) {
    const maxLength = 150;
    if (input.length <= maxLength) {
      return input;
    }
    return input.slice(0, maxLength) + "..........";
  }

  return (
    <Link href={`/movies/id/${movieId}`}>
      <div className="max-w-sm overflow-hidden rounded bg-black text-white shadow-lg">
        {/* eslint-disable-next-line */}
        <div className="relative flex h-[20rem] items-center justify-center bg-black">
          <Image
            src={movieImageurl + movieImage} // Replace with the actual image source
            alt="Movie Poster"
            layout="fill"
            sizes="50vw"
            quality={50}
            className="w-full object-cover"
          />
        </div>
        <div className="px-6 py-4">
          <div className="mb-2 text-xl font-bold">{movieName}</div>
          <p className="text-base text-neutral-100">
            Released: {movieReleaseDate}
          </p>
          <p className="mt-2 text-base text-neutral-100">
            {truncateString(movieDescription)}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;
