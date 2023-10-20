import { NavLink } from "react-router-dom";
import UserAddIcon from "../../assets/icon/UserAddIcon";
import UserIcon from "../../assets/icon/UserIcon";
import novaLogo from "../../assets/img/bigbang.png";
import BarMenuIcon from "../../assets/icon/BarMenuIcon";

function Header() {
  return (
    <>
      <header className="w-100  fixed inset-0 z-10 flex h-24 items-center justify-between gap-3 bg-[#1c1d30] px-5 sm:h-16 lg:px-9">
        <div className="md:hidden">
          <BarMenuIcon />
        </div>
        <>
          <h2 className="flex items-center justify-center gap-1 font-bold uppercase italic sm:text-sm md:text-xl ">
            <img className="h-12 w-12" src={novaLogo} alt="nova" />
            <span className="text-[#01d676]">Nova</span>
            <span className="text-white">flix</span>
          </h2>
        </>
        <nav className="hidden md:block">
          <ul className="sm:text-md text-md flex items-center justify-center sm:gap-2 md:gap-6">
            <li>
              <NavLink to="/">TVshow</NavLink>
            </li>
            <li>
              <NavLink to="/movies-search">Movies</NavLink>
            </li>
            <li>
              <NavLink to="/favorites">Favorites</NavLink>
            </li>
          </ul>
        </nav>
        <div className="flex items-center justify-center gap-4">
          <div className="hidden md:block">
            <a
              className="   flex items-center justify-center gap-2 rounded bg-[#33334c] px-5 py-2 text-sm text-white sm:px-3 sm:py-2 md:py-3 lg:px-7"
              href="#"
            >
              <UserIcon /> Sign In
            </a>
          </div>
          <div className="md:hidden">
            <UserIcon />
          </div>
          <div className="hidden md:block">
            <a
              className="lgb:px-7 flex items-center justify-center gap-2 rounded bg-green-600 px-5 py-2 text-sm text-white sm:px-3 sm:py-2 md:py-3"
              href="#"
            >
              <UserAddIcon />
              Sign Up
            </a>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
