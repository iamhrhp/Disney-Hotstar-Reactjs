import { createSlice } from '@reduxjs/toolkit';

export interface MovieState {
  movies: any[];
  tvSeries: any[];
  watchLater: any[];
  userNumber: string;
}

const initialState: MovieState = {
  movies: [],
  tvSeries: [],
  watchLater: [],
  userNumber: '',
};

const moviesSlice: any = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    ADD_MOVIES: (state, action) => {
      // console.log('sliceAction', action.payload);
      return { ...state, movies: action.payload };
    },
    ADD_TV: (state, action) => {
      // console.log('sliceAction', action.payload);
      return { ...state, tvSeries: action.payload };
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
    ADD_USER_NUMBER: (state, action) => {
      return { ...state, userNumber: action.payload };
    },
    DELETE_USER_NUMBER: (state, action) => {
      return { ...state, userNumber: action.payload };
    },
  },
});

const { actions, reducer } = moviesSlice;
export const {
  ADD_MOVIES,
  ADD_TV,
  WATCH_LATER,
  DELETE_WATCH_LATER,
  ADD_USER_NUMBER,
  DELETE_USER_NUMBER,
} = actions;
export default reducer;
