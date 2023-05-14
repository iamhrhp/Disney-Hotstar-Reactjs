import { FC } from 'react';
import FooterPage from '../../FooterPage/FooterPage';
import SlideShowPage from '../HomePage/Slider/SlideShowPage';
import TVPage from './TVPage';
import SlideShow from '../HomePage/Slider/SlideShow';
import { Box } from '@mui/material';
import SeriesPage from './SeriesPage/SeriesPage';

interface IProps {}

const TVPageMain: FC<IProps> = (props: IProps) => {
  return (
    <>
      <TVPage />
      <SeriesPage />
      <FooterPage />
    </>
  );
};

export default TVPageMain;
