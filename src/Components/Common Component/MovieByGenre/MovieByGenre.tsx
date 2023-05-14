import { Box, Button } from '@mui/material';
import { useState, FC, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation } from 'swiper';
import { baseURL } from '../../../api';
import axios from 'axios';
import './MovieByGenre.css';
import { withStyles } from '@mui/styles';
import { MoviesPagesStyle } from '../../User Pages/HomePage/Movies/MoviesPages.Style';
import { moviesGenreId } from '../../Data/MoviesGenreId';
import { useNavigate } from 'react-router-dom';
import React from 'react';
import HoverCardPage from '../Hover Card/HoverCardPage';
import { useDispatch, useSelector } from 'react-redux';
import { AddMovies } from '../../Utils/redux/actions/actions';
import { ADD_MOVIES } from '../../Utils/redux/reducer/reducer';

interface IProps {
  classes?: any;
  Genre?: string;
  dispatch?: any;
  tv?: boolean;
}

const MovieByGenre: FC<IProps> = (props: IProps) => {
  const { classes, Genre, tv } = props;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { movies } = useSelector((state: any) => state.moviesSlice);

  console.log('currentMovies', movies);

  const test = useSelector((state: any) => state);
  console.log('test movieBygenre', test);

  //converting props genre to api genre id
  const movieId = moviesGenreId
    .filter((item) => {
      if (item.title === Genre) {
        return item.id;
      }
    })
    .map((item) => item.id);

  //api call for getting popular movies data
  const getMovieData = async () => {
    try {
      const res = await axios(
        `${baseURL}/3/discover/tv/api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&page=1&vote_average.gte=6&with_genres=${movieId}`
      );
      const resJson = await res.data;
      console.log('resJson', resJson);
      if (movies.length <= 0) {
        dispatch(ADD_MOVIES(resJson.results));
      }
    } catch (e) {
      console.log('e', e);
    }
  };

  const navigateToViewAllPage = () => {
    navigate(`/${Genre}-MoviesList`, { state: { Genre } });
  };

  //fetching the key url and navigate to media player page
  const handleNavigatePlayer = async (movieData: any) => {
    let videoKey;
    try {
      const res = await axios(
        `${baseURL}/3/movie/${movieData.id}/videos?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&type=trailer`
      );
      const resJson = res.data;
      videoKey = resJson.results[0].key;
    } catch (e) {
      alert(e);
    }
    navigate(`/${movieData.title}-MoviesPlayer`, { state: videoKey });
  };

  useEffect(() => {
    getMovieData();
  }, []);

  return (
    <Box className={classes.mainBoxMBG}>
      <Box
        className={classes.wrapperBtn}
        onClick={() => navigateToViewAllPage()}
      >
        <Button className={classes.GenreBtn}>{Genre} Movies</Button>
        <Button className={classes.viewAllBtn}>View All</Button>
      </Box>
      <Swiper
        slidesPerView={8}
        spaceBetween={30}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        {movies?.map((item: any, index: number) => {
          // console.log('---movie----', item.length);
          return (
            <React.Fragment key={index}>
              <SwiperSlide>
                <Box className="sliderBox">
                  <img
                    className="sliderImg"
                    src={`http://image.tmdb.org/t/p/w500/${item.poster_path}`}
                  />
                  <HoverCardPage
                    Image={`http://image.tmdb.org/t/p/w500/${item.backdrop_path}`}
                    Genre={Genre}
                    ReleaseDate={item.release_date}
                    Overview={item.overview}
                    NavigateToMediaPlayer={() => handleNavigatePlayer(item)}
                  />
                </Box>
              </SwiperSlide>
            </React.Fragment>
          );
        })}
      </Swiper>
    </Box>
  );
};

export default withStyles(MoviesPagesStyle)(MovieByGenre);
