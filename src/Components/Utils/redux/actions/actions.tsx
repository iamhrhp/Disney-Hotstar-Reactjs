export const AddMovies = (payload: any) => {
  // console.log('AddMovies action', payload);
  return {
    type: 'ADD_MOVIES',
    payload: payload,
  };
};

export const AddWatchLater = (payload: {
  Image: string;
  Title?: string;
  Logo: string;
  poster: string;
  MovieYear: string;
  MovieRunTime: string;
  Lang: string;
  Certificate: string;
  Description: string;
  Genre: string;
  url: string;
}) => {
  // console.log('action', payload);
  return {
    type: 'WATCH_LATER',
    payload: payload,
  };
};

export const DeleteWatchLater = (payload: any) => {
  // console.log('action', payload);
  return {
    type: 'DELETE_WATCH_LATER',
    payload: payload,
  };
};
