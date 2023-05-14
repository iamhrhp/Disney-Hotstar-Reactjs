import FooterPage from '../../FooterPage/FooterPage';
import MoviesPage from './Movies/MoviesPage';
import SlideShowPage from './Slider/SlideShowPage';
import Box from '@mui/material/Box';

const HomePage = () => {
  return (
    <Box>
      <SlideShowPage />
      <MoviesPage />
      <FooterPage />
    </Box>
  );
};
export default HomePage;
