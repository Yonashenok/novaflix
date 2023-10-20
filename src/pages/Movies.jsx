import { useSelector } from "react-redux";
import MovieList from "../components/Layout/MovieList";
import SearchBar from "../components/SaerchBar/SearchBar";
import { searchMovies } from "../redux/search/searchSlice";
import Loading from "../components/loading/Loading";

function Movies() {
  const { searchedMovies, isLoading } = useSelector((state) => state.shows);
  console.log(searchedMovies);
  return (
    <div className="ms-10 md:h-[80rem] lg:h-screen">
      <h1 className="mt-24  pe-10 text-center text-lg font-semibold text-white sm:pe-0  sm:text-xl">
        Find Movies, TV shows and more
      </h1>
      <div className="absolute left-14 right-14 top-20 mb-10 mt-28 ">
        <SearchBar search={searchMovies} />
      </div>
      <>{isLoading ? <Loading /> : <MovieList shows={searchedMovies} />}</>
    </div>
  );
}

export default Movies;
