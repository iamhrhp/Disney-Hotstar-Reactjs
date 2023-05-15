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
      <MovieByGenre tv={true} Genre="Family" />
      <MovieByGenre tv={true} Genre="Animation" />
      <MovieByGenre tv={true} Genre="Kids" />
      <MovieByGenre tv={true} Genre="Comedy" />
      <MovieByGenre tv={true} Genre="Western" />
      {/* <MovieByGenre tv={true} Genre="Drama" /> */}
      <MovieByGenre tv={true} Genre="Crime" />
      {/* <MovieByGenre tv={true} Genre="Documentary" /> */}
    </Box>
  );
};
export default withStyles(MoviesPagesStyle)(SeriesPage);
