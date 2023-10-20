import { useSelector } from "react-redux";
import Loading from "../components/loading/Loading";
import MovieList from "../components/Layout/MovieList";

function Favorite() {
  const { shows, isLoading } = useSelector((state) => state.shows);

  const favoriteMovies = shows.filter((show) => show.movieFavorite === true);

  console.log(favoriteMovies);
  return (
    <div className="ms-10 md:h-[80rem] lg:h-screen">
      <h1 className="mt-24  pe-10 text-center text-lg font-semibold text-white sm:pe-10  sm:text-xl">
        {favoriteMovies.length > 0 ? "Your Favorite Shows" : ""}
      </h1>
      <div className="absolute left-14 right-14 top-20 mb-10 mt-28 ">
        {favoriteMovies.length <= 0 && (
          <h2 className="text-lg">No favorite shows added</h2>
        )}
      </div>
      <>
        {isLoading ? (
          <Loading />
        ) : (
          <MovieList shows={favoriteMovies} isLoading={isLoading} />
        )}
      </>
    </div>
  );
}

export default Favorite;
