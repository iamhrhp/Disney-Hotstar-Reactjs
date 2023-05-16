import { FC, useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Box, CardMedia, Typography } from '@mui/material';
import HoverCardPage from '../Hover Card/HoverCardPage';
import { baseURL } from '../../../api';
import axios from 'axios';
import './ViewAllPage.css';
import LinearProgress from '@mui/material/LinearProgress';
import { useSelector } from 'react-redux';

import errorImg from '../../../images/404/404.jpg';
import CircularLoading from '../../Utils/CircularLoading/CircularLoading';

interface IProps {
  classes?: any;
}

interface NavigateDataProps {
  adult: boolean;
  backdrop_path: string;
  genre_ids: any[];
  id: number;
  original_language: 'en';
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

const ViewAllPage: FC<IProps> = (props: IProps) => {
  const [isLoading, SetIsLoading] = useState<boolean>(false);
  const { state } = useLocation();

  // console.log('state', state);

  const navigate = useNavigate();

  const { movies, tvSeries } = useSelector((state: any) => state.moviesSlice);
  // console.log('viewAllpage movies', movies);
  // console.log('viewAllpage tvSeries', tvSeries);
  // console.log('viewAllpage satet tv', state.tv);

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
    setTimeout(() => {
      SetIsLoading(true);
    }, 1000);
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  let currData = state.tv === true ? tvSeries : movies;

  return (
    <Box
      sx={{
        backgroundColor: '#000000 !important',
        height: '100%',
        paddingBottom: '5%',
      }}
    >
      {!isLoading ? <LinearProgress /> : null}
      <Typography
        sx={{
          color: '#ffffff !important',
          width: '50%',
          margin: 'auto',
          fontFamily: '"Inter",sans-serif !important',
          fontWeight: '600',
          fontSize: '36px !important',
          textTransform: 'capitalize !important',
          textAlign: 'center',
          paddingTop: '5%',
          // display: state ? 'block' : 'none',
        }}
      >
        {state.Genre} {state.tv === true ? 'Shows' : 'Movies'}
      </Typography>

      {!isLoading ? (
        <Box
          sx={{
            margin: 'auto',
            width: '10%',
            height: '40vh',
            marginTop: '15%',
          }}
        >
          <CircularLoading />
        </Box>
      ) : (
        <Box
          sx={{
            display: 'flex !important',
            flexDirection: 'row !important',
            flexWrap: 'wrap',
            width: '90%',
            margin: 'auto',
            marginTop: '5%',
          }}
        >
          {currData?.map((item: NavigateDataProps, index = Date.now()) => {
            return (
              <Box key={index} className="mapBox">
                <CardMedia
                  className="mapImg"
                  component="img"
                  src={`http://image.tmdb.org/t/p/w500/${item?.poster_path}`}
                />
                <HoverCardPage
                  Image={
                    item?.backdrop_path === null
                      ? errorImg
                      : `http://image.tmdb.org/t/p/w500/${item?.backdrop_path}`
                  }
                  Genre={state.Genre}
                  ReleaseDate={item?.release_date}
                  Overview={item?.overview}
                  NavigateToMediaPlayer={() => handleNavigatePlayer(item)}
                />
              </Box>
            );
          })}
        </Box>
      )}
    </Box>
  );
};

export default ViewAllPage;
