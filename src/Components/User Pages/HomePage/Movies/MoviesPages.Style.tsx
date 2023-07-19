export const MoviesPagesStyle: any = (theme: any) => ({
  wrapperBox: {
    paddingTop: '10%',
    background: '#000000',
    paddingBottom: '10%',
  },
  wrapperBtn: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  GenreBtn: {
    marginLeft: '25px',
    fontFamily: '"Inter",sans-serif !important',
    fontWeight: '600',
    fontSize: '20px !important',
    textTransform: 'capitalize !important',
    color: '#ffffff !important',
    [theme.breakpoints.down('sm')]: {
      fontSize: '12px !important',
    },
  },
  viewAllBtn: {
    marginRight: '25px',
    fontFamily: '"Inter",sans-serif !important',
    fontWeight: '600',
    fontSize: '20px !important',
    textTransform: 'capitalize !important',
    color: '#8f98b2 !important',
    '&:hover': {
      color: '#ffffff !important',
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '12px !important',
    },
  },
  titleLogoBox: {
    width: '90%',
    margin: 'inherit',
  },
  titleLogo: {
    width: '100%',
    height: 'fit-content',
  },
  mainBoxMBG: {
    marginBottom: '20px',
  },
  hoverImageBox: {
    width: '100% !important',
    marginBottom: '10px',
    [theme.breakpoints.down('sm')]: {
      marginBottom: '0px',
    },
  },
  hoverImg: {
    width: '100% !important',
    height: 'fit-content',
    boxShadow: 'inset 0 0 100px #000 !important',
    borderRadius: '15px',
  },
  hoverShadow: {
    width: '78%',
    margin: 'auto',
    boxShadow:
      '10px 1px 46px 50px rgba(0,0,0,0.75),10px 1px 46px 50px rgba(0,0,0,0.75)',
    position: 'sticky',
    height: '1px !important',
    [theme.breakpoints.down('md')]: {
      boxShadow: 'none',
    },
  },
  hoverbtnWrapper: {
    width: '93%',
    margin: 'auto',
    marginBottom: '25px !important',
    [theme.breakpoints.down('md')]: {
      width: '70%',
      marginBottom: '15px !important',
    },
    [theme.breakpoints.down('sm')]: {
      marginBottom: '2px !important',
    },
  },
  hoverWatchBtn: {
    fontFamily: '"Inter",sans-serif !important',
    fontSize: '12.5px !important',
    fontWeight: '600 !important',
    color: '#000000 !important',
    background: '#ffffff !important',
    width: '100%',
    transition: 'all .2s ease-in-out',
    height: '40px',
    textTransform: 'capitalize !important',
    '&:hover': {
      background: '#ffffff !important',
      scale: '1.02',
      transition: 'all .2s ease-in-out',
    },
    [theme.breakpoints.down('md')]: {
      fontSize: '8px !important',
      height: '25px',
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '6px !important',
      height: '18px',
    },
  },
  hoverIcon: {
    fontSize: '18px !important',
    marginRight: '10px',
    marginTop: '-5px !important',
    [theme.breakpoints.down('md')]: {
      marginTop: '-5px !important',

      fontSize: '8px !important',
    },
    [theme.breakpoints.down('sm')]: {
      marginTop: '-4px !important',
      fontSize: '8px !important',
    },
  },
  hoverMovieDetails: {
    color: '#ffffff !important',
    fontFamily: '"Inter",sans-serif !important',
    fontWeight: '600 !important',
    fontSize: '12.5px !important',
    marginLeft: '10px !important',
    [theme.breakpoints.down('md')]: {
      fontSize: '8px !important',
      marginLeft: '5px !important',
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '7px !important',
      marginLeft: '0px !important',
    },
  },
  hoverOverView: {
    color: '#8f98b2 !important',
    fontFamily: '"Inter",sans-serif !important',
    fontWeight: '600 !important',
    fontSize: '12.5px !important',
    marginTop: '5px !important',
    marginLeft: '10px !important',
    [theme.breakpoints.down('md')]: {
      fontSize: '8px !important',
      marginLeft: '5px !important',
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '7px !important',
      marginLeft: '0px !important',
    },
  },
});
