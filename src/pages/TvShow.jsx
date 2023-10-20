import { useSelector } from "react-redux";
import MovieList from "../components/Layout/MovieList";
import Loading from "../components/loading/Loading";

function TvShow() {
  const { shows, isLoading } = useSelector((state) => state.shows);

  return (
    <div className="ms-10 md:h-[80rem] lg:h-[70rem]">
      {isLoading ? (
        <Loading />
      ) : (
        <MovieList shows={shows} isLoading={isLoading} />
      )}
    </div>
  );
}

export default TvShow;
