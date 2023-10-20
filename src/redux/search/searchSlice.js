import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  searchedMovies: [],
  shows: [],
  catagories: "All",
  isLoading: false,
  status: "idle",
  error: "no",
};

export const searchMovies = createAsyncThunk(
  "novaflix/searchMovies",
  async (query) => {
    const res = await fetch(
      ` http://www.omdbapi.com/?apikey=${"ebed3a"}&s=${query}`,
    );

    const data = await res.json();
    return data;
  },
);
export const searchTvs = createAsyncThunk(
  "novaflix/searchTvs",
  async (query) => {
    const res = await fetch(`https://api.tvmaze.com/search/shows?q=${query}`);

    const data = await res.json();
    return data;
  },
);

export const fetchShow = createAsyncThunk("novaflix/fetchShow", async () => {
  const res = await fetch("https://api.tvmaze.com/show");

  const data = await res.json();
  return data.slice(40, 200);
});

const searchSlice = createSlice({
  name: "novaflix",
  initialState,
  reducers: {
    addFavoriteShow(state, action) {
      const id = action.payload;
      const favoriteMovie = state.shows.find((show) => show.id === id);
      console.log(favoriteMovie);
      favoriteMovie.movieFavorite = !favoriteMovie.movieFavorite;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchShow.pending, (state) => {
        state.status = "Loading";
        state.isLoading = true;
      })
      .addCase(fetchShow.fulfilled, (state, action) => {
        state.shows = action.payload.map((movie) => ({
          runTime: movie.runtime,
          releaseDate: movie.premiered,
          title: movie.name,
          rating:
            +movie.rating.average ||
            +Number.parseFloat(Math.random() * 10).toFixed(1),
          imdbId: movie.externals.imdb,
          id: movie.id,
          image: movie.image?.medium,
          genre: movie.genres[movie.genres.length - 1] || "genre",
          country: movie.network?.country.name || "N/A",
          plot: movie.summary,
          imageBig: movie.image?.original,
          language: movie.language,
          movieFavorite: false,
        }));
        state.isLoading = false;
      })
      .addCase(fetchShow.rejected, (state) => {
        state.status = "something went wrong";
      })
      .addCase(searchTvs.pending, (state) => {
        state.status = "Loading";
        state.isLoading = true;
      })
      .addCase(searchTvs.fulfilled, (state, action) => {
        state.searchedTvShows = action.payload.map((movie) => ({
          runTime: movie.show.runtime,
          releaseDate: movie.show.premiered,
          title: movie.show.name,
          rating:
            +movie.show.rating.average ||
            +Number.parseFloat(Math.random() * 10).toFixed(1),
          imdbId: movie.show.externals.imdb,
          id: movie.show.id,
          image: movie.show.image?.medium,
          genre: movie.show.genres[movie.show.genres.length - 1] || "genre",
          country: movie.show.network?.country.name || "N/A",
          plot: movie.show.summary,
          imageBig: movie.show.image?.original,
          language: movie.show.language,
          movieFavorite: false,
        }));
        state.isLoading = false;
      })
      .addCase(searchTvs.rejected, (state) => {
        state.status = "something went wrong";
      })
      .addCase(searchMovies.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(searchMovies.fulfilled, (state, action) => {
        state.searchedMovies = action.payload.Search || [];
        state.isLoading = false;
      })
      .addCase(searchMovies.rejected, (state, action) => {
        state.status = action.Error;
        state.isLoading = false;
      });
  },
});

export const { addFavoriteShow } = searchSlice.actions;
export default searchSlice.reducer;
