import { Route, Routes } from 'react-router-dom';
import HomePage from '../Components/User Pages/HomePage/HomePage';
import MoviePlayer from '../Components/Common Component/MoviePlayer/MoviePlayer';
import LoginPage from '../Components/User Pages/LoginPage/LoginPage';
import SidebarPage from '../Components/Common Component/Sidebar/SidebarPage';
import SearchPage from '../Components/User Pages/SearchPage/SearchPage';
import MoviesListMain from '../Components/User Pages/MoviesList/MoviesListMain';
import TVPageMain from '../Components/User Pages/TVPage/TvPageMain';

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
