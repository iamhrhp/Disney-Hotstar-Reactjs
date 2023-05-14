import { Box, Button, CardMedia, Typography } from '@mui/material';
import { withStyles } from '@mui/styles';
import { MoviesPagesStyle } from '../../User Pages/HomePage/Movies/MoviesPages.Style';
import { FC } from 'react';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

interface IProps {
  classes?: any;
  NavigateToMediaPlayer?: (event: React.MouseEvent<HTMLElement>) => void;
  Image?: any;
  Genre?: string;
  ReleaseDate: string;
  Overview?: string;
}

const HoverCardPage: FC<IProps> = (props: IProps) => {
  const { classes } = props;
  return (
    <>
      <Box className="hoverCard">
        <Box className={classes.hoverImageBox}>
          <CardMedia
            component="img"
            className={classes.hoverImg}
            src={props.Image}
          />
        </Box>
        <Box className={classes.hoverShadow}></Box>
        <Box className={classes.hoverbtnWrapper}>
          <Button
            className={classes.hoverWatchBtn}
            onClick={props.NavigateToMediaPlayer}
          >
            <PlayArrowIcon className={classes.hoverIcon} />
            Watch Now
          </Button>
        </Box>
        <Typography className={classes.hoverMovieDetails}>
          {props.ReleaseDate ? props.ReleaseDate.slice(0, 4) : null} • 2h 4m •
          Hindi • U/A 13+ •{props.Genre}
        </Typography>
        <Typography className={classes.hoverOverView}>
          {props.Overview}
        </Typography>
      </Box>
    </>
  );
};

export default withStyles(MoviesPagesStyle)(HoverCardPage);
