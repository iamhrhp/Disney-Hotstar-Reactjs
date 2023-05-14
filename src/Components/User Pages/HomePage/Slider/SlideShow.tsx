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

interface IProps {
  classes?: any;
  watchLater?: any;
  dispatch?: any;
  //   Title?: string;
  //   Logo: string;
  //   Poster: string;
  //   MovieYear: string;
  //   MovieRunTime: string;
  //   Lang: string;
  //   Certificate: string;
  //   Description: string;
  //   Genre: string;
  //   Image: string;
  //   url: string;
  children: any;
}

interface IState {
  isLoading: boolean;
}

class SlideShow extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = { isLoading: false };
  }

  //   handleDeleteWatchLater = (url: any) => {
  //     const { dispatch } = this.props;
  //     //@ts-ignore
  //     dispatch(DELETE_WATCH_LATER(url));
  //   };

  componentDidMount(): void {
    setTimeout(() => {
      this.setState({ isLoading: true });
    }, 2000);
  }

  render() {
    const {
      classes,
      //   Image,
      //   Logo,
      //   Poster,
      //   Title,
      //   MovieYear,
      //   MovieRunTime,
      //   Lang,
      //   Certificate,
      //   Description,
      //   Genre,
      //   url,
      children,
    } = this.props;
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
          {/* <Box className={classes.slideBox}> */}
          {/* <img className={classes.slideImg} alt="logo" src={Image} /> */}
          {/* <MovieCard
              Image={Image}
              Logo={Logo}
              poster={Poster}
              Title={Title}
              MovieYear={MovieYear}
              MovieRunTime={MovieRunTime}
              Lang={Lang}
              Certificate={Certificate}
              Description={Description}
              Genre={Genre}
              url={url}
              handleDeleteWatchLater={() => this.handleDeleteWatchLater(url)}
            /> */}
          {children}
          {/* </Box> */}
        </Carousel>
      </>
    );
  }
}

const mapStateToProps = (state: any) => ({
  watchLater: state.moviesSlice.watchLater,
});

const mapDispatchToProps = (dispatch: any) => ({ dispatch });

export default withStyles(SlideShowPageStyles)(SlideShow);
