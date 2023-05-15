import { FC } from 'react';
import FooterPage from '../../FooterPage/FooterPage';
import TVPage from './TVPage';
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
