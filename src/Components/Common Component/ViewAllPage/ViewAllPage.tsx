import { FC, useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Box, CardMedia, Typography } from '@mui/material';
import HoverCardPage from '../Hover Card/HoverCardPage';
import { baseURL } from '../../../api';
import axios from 'axios';
import './ViewAllPage.css';
import LinearProgress from '@mui/material/LinearProgress';
import { useSelector } from 'react-redux';

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

  console.log('state', state);

  const navigate = useNavigate();

  const { movies } = useSelector((state: any) => state.moviesSlice);
  console.log('currmovies viewAllpage', movies);

  // const test = useSelector((state: any) => state);
  // console.log('test viewAllpage', test);

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

  return (
    <Box
      sx={{
        backgroundColor: '#000000 !important',
        height: '100%',
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
        {state.Genre} Movies
      </Typography>

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
        {movies.map((item: NavigateDataProps, index = Date.now()) => {
          return (
            <Box key={index} className="mapBox">
              <CardMedia
                className="mapImg"
                component="img"
                src={`http://image.tmdb.org/t/p/w500/${item.poster_path}`}
              />
              <HoverCardPage
                Image={`http://image.tmdb.org/t/p/w500/${item.backdrop_path}`}
                Genre={state.Genre}
                ReleaseDate={item.release_date}
                Overview={item.overview}
                NavigateToMediaPlayer={() => handleNavigatePlayer(item)}
              />
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default ViewAllPage;
