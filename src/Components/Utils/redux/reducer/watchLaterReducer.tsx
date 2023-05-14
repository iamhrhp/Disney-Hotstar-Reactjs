const initialState = {
  watchLater: [],
};

export const WatchLaterReducer: any = (state = initialState, action: any) => {
  console.log(action.payload);
  switch (action.type) {
    case 'WATCH_LATER':
      return { ...state, watchLater: [...state.watchLater, action.payload] };
    case 'DELETE_WATCH_LATER':
      return {
        ...state,
        watchLater: state.watchLater.filter(
          (movie: any) => movie.url !== action.payload
        ),
      };
    default:
      return {
        ...state,
      };
  }
};
