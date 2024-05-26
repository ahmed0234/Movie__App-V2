import Navlink from "../Client/Navlink";

function MoviesCategoriesList() {
  return (
    <div className="  p-4 max-sm:p-2 ">
      <div className="flex flex-wrap gap-6 border-b border-b-zinc-700 pb-6 text-xl	">
        <Navlink href={`/movies/trending`} Navtext={`Trending Now`} />
        <Navlink href={`/movies/popular`} Navtext={`Popular`} />
        <Navlink href={`/movies/toprated`} Navtext={`Top Rated`} />
        <Navlink href={`/movies/action`} Navtext={`Action`} />
        <Navlink href={`/movies/comedy`} Navtext={`Comedy`} />
        <Navlink href={`/movies/horror`} Navtext={`Horror`} />
        <Navlink href={`/movies/romance`} Navtext={`Romance`} />
        <Navlink href={`/movies/war`} Navtext={`War`} />
        <Navlink href={`/movies/documentary`} Navtext={`Documentary`} />
        <Navlink href={`/movies/upcoming`} Navtext={`Upcoming`} />
      </div>
    </div>
  );
}

export default MoviesCategoriesList;
