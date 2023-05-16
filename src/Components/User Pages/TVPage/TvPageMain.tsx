import { FC, useEffect } from 'react';
import FooterPage from '../../FooterPage/FooterPage';
import TVPage from './TVPage';
import SeriesPage from './SeriesPage/SeriesPage';

interface IProps {}

const TVPageMain: FC<IProps> = (props: IProps) => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);
  return (
    <>
      <TVPage />
      <SeriesPage />
      <FooterPage />
    </>
  );
};

export default TVPageMain;
