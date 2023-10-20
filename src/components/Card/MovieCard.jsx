import propTypes from "prop-types";
import { addFavoriteShow } from "../../redux/search/searchSlice";
import StarIcon from "../../assets/icon/StarIcon";

function MovieCard({ show, dispatch }) {
  return (
    <li className="me-0 ms-0 list-none sm:w-full">
      <figure className="flex flex-col items-start justify-center rounded-xl bg-[#33334d] p-4 shadow-md">
        <div className="relative w-full">
          <span className="absolute right-2 top-2  rounded-sm bg-[#01d676] px-1 py-0 text-center font-semibold text-white">
            HD
          </span>
          <img
            className="mb-1 h-60 w-full rounded-sm"
            src={show.image || show.Poster}
            alt={show.title || show.Title}
          />
        </div>
        <p className={"titleContainer  text-sm font-bold text-white"}>
          {show.title || show.Title}
        </p>
        <p className="mb-1 flex  gap-1 text-white">
          <StarIcon />
          <span className="text-sm">
            {show.rating || +Number.parseFloat(Math.random() * 10).toFixed(1)}
          </span>
        </p>
        <div className="flex w-full items-center justify-between gap-3 text-sm  text-white">
          <p className="font-light">
            {show.releaseDate?.slice(0, 4) || show.Year?.slice(0, 4)}
          </p>
          <button
            onClick={() => dispatch(addFavoriteShow(show.id))}
            className="flex rounded-md border-2 border-green-600 bg-[#33334d] px-2 py-0 font-bold"
          >
            {show.movieFavorite ? "Remove" : "Favorite"}
          </button>
        </div>
      </figure>
    </li>
  );
}

MovieCard.defaultProps = {
  show: {
    imdbId: "",
    Poster: "",
    Title: "",
    Year: "",
    image: "",
    title: "",
    releaseDate: "",
    genre: "",
    id: 456,
    rating: 5,
    runTime: 60,
  },
};

MovieCard.propTypes = {
  show: propTypes.shape({
    imdbId: propTypes.string,
    image: propTypes.string,
    title: propTypes.string,
    Poster: propTypes.string,
    Title: propTypes.string,
    Year: propTypes.string,
    releaseDate: propTypes.string,
    genre: propTypes.string,
    id: propTypes.number,
    rating: propTypes.number,
    runTime: propTypes.number,
    movieFavorite: propTypes.bool,
  }),
  dispatch: propTypes.func,
};

export default MovieCard;
