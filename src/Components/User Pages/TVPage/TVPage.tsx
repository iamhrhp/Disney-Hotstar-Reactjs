import { FC, useEffect, useState } from 'react';
import { TvDetails, TvDetailsProps } from '../../Data/MovieDetails/TvDetails';
import './TVPage.css';
import { Box, LinearProgress } from '@mui/material';
import MovieCard from '../../Common Component/Movie Card/MovieCard';
import { withStyles } from '@mui/styles';
import { TVPageStyle } from './TVPage.Style';
import { Carousel } from 'react-responsive-carousel';
import { useDispatch } from 'react-redux';
import { DELETE_WATCH_LATER } from '../../Utils/redux/reducer/reducer';

interface IProps {
  classes: any;
}

const TVPage: FC<IProps> = (props: IProps) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  //   const watcLater = useSelector((state: any) => state.moviesSlice.watchLater);
  const { classes } = props;
  const dispatch = useDispatch();

  const handleDeleteWatchLater = (url: string) => {
    //@ts-ignore
    dispatch(DELETE_WATCH_LATER(url));
  };

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(true);
    }, 2000);
  }, []);

  return (
    <>
      {!isLoading ? <LinearProgress /> : null}
      <Carousel
        autoPlay={true}
        showArrows={true}
        dynamicHeight={true}
        infiniteLoop={true}
        showIndicators={false}
        swipeable={true}
        transitionTime={800}
        interval={5000}
      >
        {TvDetails.map((data: TvDetailsProps, index = Date.now()) => {
          return (
            <Box className={classes.slideBox} key={index}>
              <img className={classes.slideImg} alt="logo" src={data.Image} />
              <MovieCard
                Image={data.Image}
                Logo={data.Logo}
                poster={data.poster}
                Title={data.Title}
                MovieYear={data.MovieYear}
                MovieRunTime={data.MovieRunTime}
                Lang={data.Lang}
                Certificate={data.Certificate}
                Description={data.Description}
                Genre={data.Genre}
                url={data.url}
                handleDeleteWatchLater={() => handleDeleteWatchLater(data.url)}
              />
            </Box>
          );
        })}
      </Carousel>
    </>
  );
};

export default withStyles(TVPageStyle)(TVPage);
