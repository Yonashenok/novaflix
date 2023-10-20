import propTypes from "prop-types";
import SearchIcon from "../../assets/icon/SearchIcon";
import { useDispatch } from "react-redux";

function SearchBar({ search }) {
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex  items-center justify-center gap-0  "
    >
      <input
        className="w-[30rem] rounded-bl-full rounded-tl-full border-b border-l  border-r-0 border-t  border-green-600 bg-white px-4 py-3 text-xl   text-zinc-600 focus:outline-none sm:w-[40rem] sm:text-sm lg:w-[40rem] xl:w-[40rem]  "
        type="text"
        placeholder="Enter Keywords..."
        onChange={(e) => dispatch(search(e.target.value))}
      />
      <a className="rounded-bl-none rounded-br-full rounded-tl-none rounded-tr-full border-b border-l-0 border-r border-t border-green-600  bg-white px-2 py-4 focus:outline-none   sm:px-4    sm:py-3">
        <SearchIcon />
      </a>
    </form>
  );
}

SearchBar.defaultProps = {
  search: () => {},
};

SearchBar.propTypes = {
  search: propTypes.func,
};

export default SearchBar;
