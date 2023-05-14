import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';

import DesktopWindowsOutlinedIcon from '@mui/icons-material/DesktopWindowsOutlined';
import DesktopWindowsIcon from '@mui/icons-material/DesktopWindows';

import MovieIcon from '@mui/icons-material/Movie';
import MovieOutlinedIcon from '@mui/icons-material/MovieOutlined';

import SportsBaseballOutlinedIcon from '@mui/icons-material/SportsBaseballOutlined';
import SportsBaseballIcon from '@mui/icons-material/SportsBaseball';
import { SvgIconProps } from '@mui/material';

export interface IProps {
  id: number;
  title: string;
  icon: (props: SvgIconProps) => JSX.Element;
  icon2: (props: SvgIconProps) => JSX.Element;
}

export const SidebarData = [
  {
    id: 1,
    title: 'Profile',
    icon: AccountCircleOutlinedIcon,
    icon2: AccountCircleIcon,
  },
  {
    id: 2,
    title: 'Search',
    icon: SearchOutlinedIcon,
    icon2: SearchOutlinedIcon,
  },
  {
    id: 3,
    title: 'Home',
    icon: HomeRoundedIcon,
    icon2: HomeOutlinedIcon,
  },
  {
    id: 4,
    title: 'TV',
    icon: DesktopWindowsOutlinedIcon,
    icon2: DesktopWindowsIcon,
  },
  {
    id: 5,
    title: 'Movies',
    icon: MovieOutlinedIcon,
    icon2: MovieIcon,
  },
  {
    id: 6,
    title: 'Sports',
    icon: SportsBaseballOutlinedIcon,
    icon2: SportsBaseballIcon,
  },
];
