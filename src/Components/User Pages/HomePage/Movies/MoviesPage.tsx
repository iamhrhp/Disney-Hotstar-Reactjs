import { withStyles } from '@mui/styles';
import { MoviesPagesStyle } from './MoviesPages.Style';
import MovieByGenre from '../../../Common Component/MovieByGenre/MovieByGenre';
import { FC } from 'react';
import { Box } from '@mui/material';

interface IProps {
  classes?: any;
}

const MoviesPage: FC<IProps> = (props: IProps) => {
  const { classes } = props;
  return (
    <Box className={classes.wrapperBox}>
      <MovieByGenre Genre="Action" />
      <MovieByGenre Genre="Animation" />
      <MovieByGenre Genre="Adventure" />
      <MovieByGenre Genre="Comedy" />
      <MovieByGenre Genre="Horror" />
      {/* <MovieByGenre Genre="Drama" /> */}
      <MovieByGenre Genre="Science" />
      {/* <MovieByGenre Genre="Thriller" /> */}
      {/* <MovieByGenre Genre="Documentary" /> */}
    </Box>
  );
};
export default withStyles(MoviesPagesStyle)(MoviesPage);
