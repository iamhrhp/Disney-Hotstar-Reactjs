import batmanLogo from '../../../images/Slides Logo/bm.png';
import antman from '../../../images/Slides Logo/antman.png';
import rrr from '../../../images/Slides Logo/rrr.png';
import pathaan from '../../../images/Slides Logo/pathaan.png';
import tenet from '../../../images/Slides Logo/tenet.png';
import banner1 from '../../../images/1.jpg';
import banner2 from '../../../images/2.jpg';
import banner3 from '../../../images/3.jpg';
import banner4 from '../../../images/4.jpg';
import banner5 from '../../../images/5.jpg';
import poster1 from '../../../images/slides/poster/1.jpg';
import poster2 from '../../../images/slides/poster/2.jpg';
import poster3 from '../../../images/slides/poster/3.jpg';
import poster4 from '../../../images/slides/poster/4.jpg';
import poster5 from '../../../images/slides/poster/5.jpg';

export interface IProps {
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

export const MovieDetails = [
  {
    id: 1,
    Title: 'The Batman',
    Logo: batmanLogo,
    poster: poster1,
    MovieYear: '2022',
    MovieRunTime: '2h 56m',
    Lang: 'Hindi',
    Certificate: '15',
    Description:
      "Two years of nights have turned Bruce Wayne into a nocturnal animal. But as he continues to find his way as Gotham's dark knight Bruce is forced into a game of cat and mouse with his biggest threat so far,",
    Genre: 'Action | Crime | Drama | Thriller',
    Image: banner1,
    url: 'mqqft2x_Aa4',
  },
  {
    id: 2,
    Title: 'Ant-Man and the Wasp: Quantumania',
    Logo: antman,
    poster: poster2,
    MovieYear: '2023',
    MovieRunTime: '2h 4m',
    Lang: 'Hindi',
    Certificate: '12A',
    Description:
      "When Scott Lang and Hope van Dyne, along with Hope's parents, Hank Pym and Janet van Dyne, and Scott's daughter, Cassie, are accidentally sent to the Quantum Realm, they soon find themselves exploring the Realm, ",
    Genre: 'Action | Adventure | Comedy',
    Image: banner2,
    url: '8_rTIAOohas',
  },
  {
    id: 3,
    Title: 'RRR',
    Logo: rrr,
    poster: poster3,
    MovieYear: '2022',
    MovieRunTime: '3h 7m',
    Lang: 'Hindi',
    Certificate: '15',
    Description:
      'During the British era, Malli, a small tribal girl, is taken away by British governor Scott Buxton and his wife Catherine against the wishes of her mother. Rama Raju is an Indian cop who works for the British army,',
    Genre: 'Action | Drama ',
    Image: banner3,
    url: 'UrN4oyanERU',
  },
  {
    id: 4,
    Title: 'Pathaan',
    Logo: pathaan,
    poster: poster4,
    MovieYear: '2023',
    MovieRunTime: '2h 26m',
    Lang: 'Hindi',
    Certificate: '15',
    Description:
      "Indian RAW agent 'Pathaan' (Shah Rukh Khan) gets to know of a major impending attack against India, mounted by a mercenary group led by the ruthless enigma Jim (John Abraham), who has a history of his own.",
    Genre: 'Action | Adventure | Drama ',
    Image: banner4,
    url: 'vqu4z34wENw',
  },
  {
    id: 5,
    Title: 'Tenet',
    Logo: tenet,
    poster: poster5,
    MovieYear: '2020',
    MovieRunTime: '2h 30m',
    Lang: 'Hindi',
    Certificate: '13',
    Description:
      'In a twilight world of international espionage, an unnamed CIA operative, known as The Protagonist, is recruited by a mysterious organization called Tenet to participate in a global assignment that unfolds beyond real time. ',
    Genre: 'Action | Sci-Fi | Thriller ',
    Image: banner5,
    url: 'L3pk_TBkihU',
  },
];
