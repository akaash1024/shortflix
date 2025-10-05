import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../api/api";
import { toast } from "react-toastify";

// Thunk to fetch movies
export const fetchMovies = createAsyncThunk("movies/fetchMovies", async ({ searchTerm, currentPage, searchFor }, { rejectWithValue }) => {
    const formattedTerm = searchTerm.trim().replace(/\s+/g, "+");


    try {
      const { data } = await api.get(
        `/?apikey=${
          import.meta.env.VITE_OMDB_KEY
        }&type=${searchFor}&s=${formattedTerm}&page=${currentPage}`
      );

      if (data.Response === "False") {
        return rejectWithValue({ message: data.Error });
      }

      return {
        resultList: data.Search,
        totalResults: Number(data.totalResults),
      };
    } catch (error) {
      return rejectWithValue(
        error.response?.data || { message: "Failed to fetch movies" }
      );
    }
  }
);

export const fetchMovieById = createAsyncThunk(
  "movies/fetchMovieById",
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await api.get(
        `/?apikey=${import.meta.env.VITE_OMDB_KEY}&i=${id}`
      );

      if (data.Response === "False") {
        return rejectWithValue({ message: data.Error });
      }

      return data; // Important: return the movie data
    } catch (error) {
      return rejectWithValue(
        error.response?.data || { message: "Failed to fetch movie" }
      );
    }
  }
);

const initialState = {
  moviesList: [],
  totalPages: 0,
  pageStatus: {},
  error: null,
  getMovieById: null,
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // fetchMovieById
      .addCase(fetchMovieById.pending, (state) => {
        state.getMovieById = null;
        state.error = null;
      })
      .addCase(fetchMovieById.fulfilled, (state, action) => {
        state.getMovieById = action.payload; // store the movie
      })
      .addCase(fetchMovieById.rejected, (state, action) => {
        state.error = action.payload?.message || "Something went wrong";
      })

      // fetchMovies
      .addCase(fetchMovies.pending, (state, action) => {
        const page = action.meta.arg.currentPage;
        state.pageStatus[page] = "loading";
        state.error = null;
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        const { resultList, totalResults } = action.payload;
        state.moviesList = resultList || [];
        state.totalPages = Math.ceil(totalResults / 10) || 0;
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        const page = action.meta.arg.currentPage;
        state.error = action.payload?.message || "Something went wrong";
      });
  },
});

export default movieSlice.reducer;
