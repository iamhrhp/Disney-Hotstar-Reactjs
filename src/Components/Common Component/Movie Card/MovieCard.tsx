import { FC, useState } from 'react';
import { Box, Button, CardMedia, Typography } from '@mui/material';
import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded';
import AddIcon from '@mui/icons-material/Add';
import { withStyles } from '@mui/styles';
import { MovieCardStyles } from './MovieCard.Styles';
import { withRouter } from '../../Utils/WithRouter';
import DoneIcon from '@mui/icons-material/Done';
import { useDispatch, useSelector } from 'react-redux';

import { WATCH_LATER } from '../../Utils/redux/reducer/reducer';
import toast, { Toaster } from 'react-hot-toast';

interface IProps {
  classes?: any;
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
  url?: string;
  navigate?: any;
  dispatch: () => void;
  watchLater?: any[];
  handleDeleteWatchLater?: () => void;
}

const MovieCard: FC<IProps> = (props: IProps) => {
  const [watch, setWatch] = useState<boolean>(false);

  const handleNavigatePlayer = () => {
    const { navigate, url, Title } = props;
    navigate(`/${Title}-MoviesPlayer`, { state: url });
  };

  const dispatch = useDispatch();

  const { watchLater, userNumber } = useSelector(
    (state: any) => state.moviesSlice
  );

  // const test = useSelector((state: any) => state);

  // console.log('userNumber', userNumber);

  const handleWatch = () => {
    if (watch === false) {
      setWatch(true);
    } else if (watch === true) {
      setWatch(false);
    }
  };

  const {
    Image,
    Title,
    Logo,
    poster,
    MovieYear,
    MovieRunTime,
    Lang,
    Certificate,
    Description,
    Genre,
    url,
    handleDeleteWatchLater,
    classes,
  } = props;

  const handleWatchLater = () => {
    const obj = {
      Image: Image,
      Title: Title,
      Logo: Logo,
      poster: poster,
      MovieYear: MovieYear,
      MovieRunTime: MovieRunTime,
      Lang: Lang,
      Certificate: Certificate,
      Description: Description,
      Genre: Genre,
      url: url,
    };
    userNumber === ''
      ? toast.error('Please Sign in')
      : dispatch(WATCH_LATER(obj));
  };

  // console.log('-------------watchlter', watchLater);

  const movieData = watchLater?.map((movie: any) => movie.url);
  // console.log('-------------movieData', movieData);

  return (
    <>
      <Box className={classes.detailsCardBox}>
        <Box className={classes.titleLogoBox}>
          <CardMedia component="img" className={classes.titleLogo} src={Logo} />
        </Box>
        <Typography className={classes.movieDetails}>
          {MovieYear} • {MovieRunTime} • {Lang} • U/A {Certificate}
        </Typography>
        <Typography className={classes.movieDescription}>
          {Description}
        </Typography>
        <Typography className={classes.movieGenre}>{Genre}</Typography>
        <Box className={classes.btnBox}>
          <Button className={classes.watchBtn} onClick={handleNavigatePlayer}>
            <PlayArrowRoundedIcon className={classes.watchIcon} />
            Watch Now
          </Button>
          <Button className={classes.watchLaterBtn} onClick={handleWatch}>
            {!movieData?.includes(url) ? (
              <AddIcon
                onClick={handleWatchLater}
                className={classes.watchLaterIcon}
              />
            ) : (
              <DoneIcon
                onClick={handleDeleteWatchLater}
                className={classes.watchLaterIcon}
              />
            )}
          </Button>
        </Box>
        <Box
          className="toast"
          sx={{ zIndex: '9999', position: 'absolute', top: '10%' }}
        >
          <Toaster />
        </Box>
      </Box>
    </>
  );
};

export default withRouter(withStyles(MovieCardStyles)(MovieCard));
