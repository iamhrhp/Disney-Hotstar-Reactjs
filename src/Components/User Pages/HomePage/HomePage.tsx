import { useEffect } from 'react';
import FooterPage from '../../FooterPage/FooterPage';
import MoviesPage from './Movies/MoviesPage';
import SlideShowPage from './Slider/SlideShowPage';
import Box from '@mui/material/Box';

const HomePage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);
  return (
    <Box>
      <SlideShowPage />
      <MoviesPage />
      <FooterPage />
    </Box>
  );
};
export default HomePage;
