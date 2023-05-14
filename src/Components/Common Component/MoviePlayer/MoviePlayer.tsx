import { Component } from 'react';
import ReactPlayer from 'react-player';
import { withRouter } from '../../Utils/WithRouter';
import { Box } from '@mui/material';
import './MoviePlayer.css';

interface MoviePlayerProps {
  location: any;
}

interface MoviePlayerState {}

class MoviePlayer extends Component<MoviePlayerProps, MoviePlayerState> {
  constructor(props: MoviePlayerProps) {
    super(props);
    this.state = {};
  }

  render() {
    console.log(this.props.location.state);
    const { state: url } = this.props.location;
    return (
      <Box sx={{ height: '1000px' }}>
        <ReactPlayer
          className="react-player"
          url={`https://www.youtube.com/watch?v=${url}`}
          width="100%"
          height="100%"
          controls={true}
          volume={0.8}
          playing={true}
        />
      </Box>
    );
  }
}

export default withRouter(MoviePlayer);
