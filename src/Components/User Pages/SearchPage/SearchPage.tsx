import { Box, CardMedia, TextField, Typography } from '@mui/material';
import { FC, useState, useEffect } from 'react';
import LinearProgress from '@mui/material/LinearProgress';
import HoverCardPage from '../../Common Component/Hover Card/HoverCardPage';
import { useSelector } from 'react-redux';
import { baseURL } from '../../../api';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import FooterPage from '../../FooterPage/FooterPage';
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

const SearchPage: FC<IProps> = (props: IProps) => {
  const [isLoading, SetIsLoading] = useState<boolean>(false);
  const [isLoading2, SetIsLoading2] = useState<boolean>(false);

  const [searchText, SetSearchText] = useState<string>('');
  const [currentMovies, setCurrentMovies] = useState<any[]>([]);

  const { movies } = useSelector((state: any) => state.moviesSlice);
  const navigate = useNavigate();

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

  const handleSearch = async (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter') {
      // console.log(searchText);
      SetIsLoading2(true);
      try {
        const res = await axios(
          `${baseURL}/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&query=${searchText}&page=1&include_adult=false`
        );
        const resJson = res.data;
        setCurrentMovies(resJson.results);

        setTimeout(() => {
          SetIsLoading2(false);
        }, 1000);
      } catch (e) {
        console.log(e);
      }
    }
  };
  // console.log('movies', movies);
  // console.log('currentMovies', currentMovies);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
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
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          marginTop: '3%',
          width: '90%',
          background: 'rgba(0, 0, 70, 90)',
          marginX: 'auto',
        }}
      >
        <SearchIcon
          sx={{
            color: '#ffffff',
            fontSize: '40px',
          }}
        />
        <TextField
          placeholder="Movies,shows and more"
          value={searchText}
          onChange={(e) => SetSearchText(e.target.value)}
          onKeyDown={(e) => handleSearch(e)}
          sx={{
            background: 'rgba(0, 0, 70, 90)',
            width: '100%',
            color: '#fffff !important',
            input: {
              color: 'white',
            },
          }}
        />
      </Box>

      <Typography
        sx={{
          color: '#e1e6f0 !important',
          width: '90%',
          margin: 'auto',
          fontFamily: '"Inter",sans-serif !important',
          fontWeight: '600',
          fontSize: '20px !important',
          textTransform: 'capitalize !important',
          textAlign: 'start',
          paddingTop: '5%',
          // display: state ? 'block' : 'none',
        }}
      >
        {currentMovies.length <= 0
          ? 'Popular Searches'
          : `Search Keywords : ${searchText}`}
      </Typography>
      {isLoading2 ? (
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            alignContent: 'center',
            height: '100vh',
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
            marginY: '5%',
          }}
        >
          {currentMovies.length <= 0
            ? movies.map((item: NavigateDataProps, index = Date.now()) => {
                return (
                  <Box key={index} className="mapBox">
                    <CardMedia
                      className="mapImg"
                      component="img"
                      src={`http://image.tmdb.org/t/p/w500/${item.poster_path}`}
                    />
                    <HoverCardPage
                      Image={`http://image.tmdb.org/t/p/w500/${item.backdrop_path}`}
                      // Genre={state.Genre}
                      ReleaseDate={item?.release_date}
                      Overview={item.overview}
                      NavigateToMediaPlayer={() => handleNavigatePlayer(item)}
                    />
                  </Box>
                );
              })
            : currentMovies.map(
                (item: NavigateDataProps, index = Date.now()) => {
                  return (
                    <Box key={index} className="mapBox">
                      <CardMedia
                        className="mapImg"
                        component="img"
                        src={`http://image.tmdb.org/t/p/w500/${item.poster_path}`}
                      />
                      <HoverCardPage
                        Image={`http://image.tmdb.org/t/p/w500/${item.backdrop_path}`}
                        // Genre={state.Genre}
                        ReleaseDate={item?.release_date}
                        Overview={item.overview}
                        NavigateToMediaPlayer={() => handleNavigatePlayer(item)}
                      />
                    </Box>
                  );
                }
              )}
        </Box>
      )}
      <FooterPage />
    </Box>
  );
};

export default SearchPage;
