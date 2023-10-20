import { useSelector } from "react-redux";
import MovieList from "../components/Layout/MovieList";

function Home() {
  const { shows } = useSelector((state) => state.shows);
  return <MovieList shows={shows} />;
}

export default Home;
