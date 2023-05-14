import tv1 from '../../../images/Tv/tv1logo.png';
import tv2 from '../../../images/Tv/tv2logo.png';
import tv3 from '../../../images/Tv/tv3logo.png';
import tv4 from '../../../images/Tv/tv4logo.png';
import tv5 from '../../../images/Tv/tv5logo.png';

import tv1poster from '../../../images/Tv/tv1poster.jpg';
import tv2poster from '../../../images/Tv/tv2poster.jpg';
import tv3poster from '../../../images/Tv/tv3poster.jpg';
import tv4poster from '../../../images/Tv/tv4poster.jpg';
import tv5poster from '../../../images/Tv/tv5poster.jpg';

import tv1banner from '../../../images/Tv/tv1banner.png';
import tv2banner from '../../../images/Tv/tv2banner.png';
import tv3banner from '../../../images/Tv/tv3banner.png';
import tv4banner from '../../../images/Tv/tv4banner.png';
import tv5banner from '../../../images/Tv/tv5banner.png';

export interface TvDetailsProps {
  id?: number;
  Title?: string;
  Logo: string;
  poster: string;
  MovieYear: string;
  MovieRunTime: string;
  Lang: string;
  Certificate: string;
  Description: string;
  Genre: string;
  Image?: string;
  url: string;
}

export const TvDetails = [
  {
    id: 1,
    Title: 'Saas bahu Aur Flamingo',
    Logo: tv1,
    poster: tv1poster,
    MovieYear: '2023',
    MovieRunTime: '2h 56m',
    Lang: 'Hindi',
    Certificate: '15',
    Description:
      'Savitri, the matriarch of a massive cartel in the lawless Borderlands, opens up a battle for succession to find her heir in a murky world of drugs and violence.',
    Genre: 'Action | Drama | Thriller',
    Image: tv1banner,
    url: 'Tt0z8QzfiKg',
  },
  {
    id: 2,
    Title: 'Criminal Justice',
    Logo: tv2,
    poster: tv2poster,
    MovieYear: '2022',
    MovieRunTime: '2h 4m',
    Lang: 'Hindi',
    Certificate: '12A',
    Description:
      "When a teenage star's brother becomes the prime suspect in her murder, Madhav Mishra takes the case, only to realise he has to first tackle his client's lies.",
    Genre: 'Thriller | Drama',
    Image: tv2banner,
    url: 'b6F7G104_ec',
  },
  {
    id: 3,
    Title: 'The Great Indian Murder',
    Logo: tv3,
    poster: tv3poster,
    MovieYear: '2022',
    MovieRunTime: '3h 7m',
    Lang: 'Hindi',
    Certificate: '15',
    Description:
      'When notorious industrialist Vicky Rai is shot dead at his own party, the main suspects are the guests, both invited and uninvited.',
    Genre: 'Thriller | Drama ',
    Image: tv3banner,
    url: 'GvfUXlTpvzg',
  },
  {
    id: 4,
    Title: 'The Night Manager',
    Logo: tv4,
    poster: tv4poster,
    MovieYear: '2023',
    MovieRunTime: '2h 26m',
    Lang: 'Hindi',
    Certificate: '15',
    Description:
      "A hotel's night manager is the only weapon against a dangerous arms dealer. Will he be able to stop him?",
    Genre: 'Thriller | Drama ',
    Image: tv4banner,
    url: '6QJQysiUxKc',
  },
  {
    id: 5,
    Title: 'Rudra',
    Logo: tv5,
    poster: tv5poster,
    MovieYear: '2023',
    MovieRunTime: '2h 30m',
    Lang: 'Hindi',
    Certificate: '13',
    Description:
      'In the crime-ridden streets of Mumbai, journeying through the maze of psychopathic minds is brilliant supercop Rudraveer Singh, guarding against their darkness.',
    Genre: 'Action | Thriller',
    Image: tv5banner,
    url: 'FyuODiTjoFs',
  },
];
