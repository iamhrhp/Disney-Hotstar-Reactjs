import { withStyles } from '@mui/styles';
import MovieByGenre from '../../../Common Component/MovieByGenre/MovieByGenre';
import { FC } from 'react';
import { Box } from '@mui/material';
import { MoviesPagesStyle } from '../../HomePage/Movies/MoviesPages.Style';

interface IProps {
  classes?: any;
}

const SeriesPage: FC<IProps> = (props: IProps) => {
  const { classes } = props;
  return (
    <Box className={classes.wrapperBox}>
      <MovieByGenre tv={true} />
      {/* <MovieByGenre Genre="Animation" />
      <MovieByGenre Genre="Adventure" />
      <MovieByGenre Genre="Comedy" />
      <MovieByGenre Genre="Horror" />
      <MovieByGenre Genre="Drama" />
      <MovieByGenre Genre="Science" />
      <MovieByGenre Genre="Thriller" />
      <MovieByGenre Genre="Documentary" /> */}
    </Box>
  );
};
export default withStyles(MoviesPagesStyle)(SeriesPage);
