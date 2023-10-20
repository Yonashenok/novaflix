import { useEffect, useState } from "react";
import { Pagination } from "@mantine/core";
import propTypes from "prop-types";
import MovieCard from "../Card/MovieCard";
import { useDispatch } from "react-redux";

function MovieList({ shows, isLoading }) {
  const ITEM_PER_PAGE = 18;
  const [pages, setPages] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    setPages(shows.slice(0, ITEM_PER_PAGE));
  }, [isLoading, shows]);
  return (
    <>
      <ul className="me-0 ms-0 mt-24 grid grid-cols-1 items-center justify-center  gap-x-10 gap-y-2 py-8 pe-0 sm:grid-cols-3 sm:gap-x-2 md:grid-cols-4 md:gap-x-2 lg:grid-cols-5 lg:gap-x-2 xl:grid-cols-6 xl:gap-x-2 ">
        {pages.map((show) => (
          <MovieCard
            key={show.id || show.imdbID}
            dispatch={dispatch}
            show={show}
          />
        ))}
      </ul>
      <div className="sm:w-100  flex items-center justify-center">
        <Pagination
          total={Math.ceil(shows.length / ITEM_PER_PAGE)}
          onChange={(page) => {
            const start = (page - 1) * ITEM_PER_PAGE;
            const end = start + ITEM_PER_PAGE;
            setPages(shows.slice(start, end));
          }}
        />
      </div>
    </>
  );
}

MovieList.propTypes = {
  shows: propTypes.arrayOf(
    propTypes.shape({
      imdbId: propTypes.string,
      image: propTypes.string,
      title: propTypes.string,
      releaseDate: propTypes.string,
      genre: propTypes.string,
      id: propTypes.number,
      rating: propTypes.number,
      runTime: propTypes.number,
    }),
  ),
  isLoading: propTypes.bool,
};

export default MovieList;
