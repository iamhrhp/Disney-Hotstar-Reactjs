import React, { Component } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Box } from '@mui/material';
import { withStyles } from '@mui/styles';
import './SliderShowPage.css';
import { SlideShowPageStyles } from './SlideShowPageStyles';
import MovieCard from '../../../Common Component/Movie Card/MovieCard';
import { MovieDetails } from '../../../Data/MovieDetails/MovieDetails';
import LinearProgress from '@mui/material/LinearProgress';
import { connect } from 'react-redux';
import { DELETE_WATCH_LATER } from '../../../Utils/redux/reducer/reducer';
import { Toaster } from 'react-hot-toast';

interface IProps {
  classes?: any;
  watchLater?: any[];
  dispatch?: any;
}

interface IState {
  isLoading: boolean;
}

class SlideShowPage extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = { isLoading: false };
  }

  handleDeleteWatchLater = (url: string) => {
    const { dispatch } = this.props;
    //@ts-ignore
    dispatch(DELETE_WATCH_LATER(url));
  };

  componentDidMount(): void {
    setTimeout(() => {
      this.setState({ isLoading: true });
    }, 2000);
  }

  render() {
    const { classes } = this.props;
    // console.log('watchLater----------', this.props.watchLater);

    return (
      <>
        {!this.state.isLoading ? <LinearProgress /> : null}
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
          {MovieDetails.map((data, index = Date.now()) => {
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
                  handleDeleteWatchLater={() =>
                    this.handleDeleteWatchLater(data.url)
                  }
                />
              </Box>
            );
          })}
        </Carousel>
        <Toaster />
      </>
    );
  }
}

const mapStateToProps = (state: any) => ({
  watchLater: state.moviesSlice.watchLater,
});

const mapDispatchToProps = (dispatch: any) => ({ dispatch });

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(SlideShowPageStyles)(SlideShowPage));
