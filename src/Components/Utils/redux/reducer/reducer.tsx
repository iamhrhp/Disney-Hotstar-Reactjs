import { createSlice } from '@reduxjs/toolkit';

export interface MovieState {
  movies: any[];
  watchLater: any[];
}

const initialState: MovieState = {
  movies: [],
  watchLater: [],
};

export const DataReducer: any = (state = initialState, action: any) => {
  console.log(action.payload);
  switch (action.type) {
    case 'ADD_MOVIES':
      return { ...state, movies: [...state.movies, ...action.payload] };
    // case 'WATCH_LATER':
    //   return { ...state, watchLater: [...state.watchLater, action.payload] };
    // case 'DELETE_WATCH_LATER':
    //   return {
    //     ...state,
    //     watchLater: state.watchLater.filter(
    //       (movie: any) => movie.url !== action.payload
    //     ),
    //   };
    default:
      return {
        ...state,
      };
  }
};

const moviesSlice: any = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    ADD_MOVIES: (state, action) => {
      console.log('sliceAction', action.payload);
      return { ...state, movies: [...state.movies, ...action.payload] };
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
export const { ADD_MOVIES, WATCH_LATER, DELETE_WATCH_LATER } = actions;
export default reducer;
