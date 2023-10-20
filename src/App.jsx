import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes, Outlet } from "react-router-dom";
import { fetchShow } from "./redux/search/searchSlice";
import Header from "./components/header/Header";
import TvShow from "./pages/TvShow";
import Movies from "./pages/Movies";
import Favorite from "./pages/Favorite";
import Footer from "./components/footer/footer";
import "./App.css";

function Layout() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchShow());
  }, [dispatch]);
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<TvShow />} />
          <Route path="/movies-search" element={<Movies />} />
          <Route path="/favorites" element={<Favorite />} />
          <Route path="*" element={<div>page not found </div>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
