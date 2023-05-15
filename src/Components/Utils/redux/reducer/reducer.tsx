import { createSlice } from '@reduxjs/toolkit';

export interface MovieState {
  movies: any[];
  tvSeries: any[];
  watchLater: any[];
}

const initialState: MovieState = {
  movies: [],
  tvSeries: [],
  watchLater: [],
};

const moviesSlice: any = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    ADD_MOVIES: (state, action) => {
      console.log('sliceAction', action.payload);
      return { ...state, movies: [...state.movies, ...action.payload] };
    },
    ADD_TV: (state, action) => {
      console.log('sliceAction', action.payload);
      return { ...state, tvSeries: [...state.tvSeries, ...action.payload] };
    },
    WATCH_LATER: (state, action) => {
      return { ...state, watchLater: [...state.watchLater, action.payload] };
    },
    DELETE_WATCH_LATER: (state, action) => {
      return {
        ...state,
        watchLater: state.watchLater.filter(
          (movie: any) => movie.url !== action.payload
        ),
      };
    },
  },
});

const { actions, reducer } = moviesSlice;
export const { ADD_MOVIES, ADD_TV, WATCH_LATER, DELETE_WATCH_LATER } = actions;
export default reducer;
