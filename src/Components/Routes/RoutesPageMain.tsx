import { Route, Routes } from 'react-router-dom';
import HomePage from '../User Pages/HomePage/HomePage';
import MoviePlayer from '../Common Component/MoviePlayer/MoviePlayer';
import LoginPage from '../User Pages/LoginPage/LoginPage';
import SidebarPage from '../Common Component/Sidebar/SidebarPage';
import SearchPage from '../User Pages/SearchPage/SearchPage';
import MoviesListMain from '../User Pages/MoviesList/MoviesListMain';
import TVPageMain from '../User Pages/TVPage/TvPageMain';

const RoutesPageMain = () => {
  return (
    <>
      <SidebarPage>
        <Routes>
          <Route path="/myspace" element={<LoginPage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/Tv" element={<TVPageMain />} />
          <Route path="/:path-MoviesList" element={<MoviesListMain />} />
          <Route path="/:path-MoviesPlayer" element={<MoviePlayer />} />
          <Route path="/search" element={<SearchPage />} />
        </Routes>
      </SidebarPage>
    </>
  );
};

export default RoutesPageMain;
