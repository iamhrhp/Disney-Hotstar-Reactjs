import { withStyles } from '@mui/styles';
import { MoviesPagesStyle } from './MoviesPages.Style';
import MovieByGenre from '../../../Common Component/MovieByGenre/MovieByGenre';
import { useEffect, FC, useState } from 'react';
import { Box } from '@mui/material';
import CircularLoading from '../../../Utils/CircularLoading/CircularLoading';

interface IProps {
  classes?: any;
}

const MoviesPage: FC<IProps> = (props: IProps) => {
  const [isLoading, setIsloading] = useState<boolean>(false);
  const { classes } = props;

  useEffect(() => {
    setTimeout(() => {
      setIsloading(true);
    }, 1000);
  }, []);

  return (
    <Box className={classes.wrapperBox}>
      {isLoading ? (
        <Box>
          <MovieByGenre Genre="Action" />
          <MovieByGenre Genre="Animation" />
          <MovieByGenre Genre="Adventure" />
          <MovieByGenre Genre="Comedy" />
          <MovieByGenre Genre="Horror" />
          <MovieByGenre Genre="Science" />
        </Box>
      ) : (
        <Box sx={{ display: 'flex', justifyContent: 'space-around' }}>
          <CircularLoading />
        </Box>
      )}
    </Box>
  );
};
export default withStyles(MoviesPagesStyle)(MoviesPage);
