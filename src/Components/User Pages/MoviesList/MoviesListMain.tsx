import React, { useEffect } from 'react';
import FooterPage from '../../FooterPage/FooterPage';
import MovieList from './MovieList';

const MoviesListMain = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);
  return (
    <>
      <MovieList />
      <FooterPage />
    </>
  );
};

export default MoviesListMain;
