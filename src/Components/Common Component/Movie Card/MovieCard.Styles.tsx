export const MovieCardStyles: any = (theme: any) => ({
  detailsCardBox: {
    position: 'relative',
    top: '-60%',
    width: '30%',
    marginLeft: '20px',
    zIndex: '2',
  },
  titleLogoBox: {
    width: '60%',
    margin: 'inherit',
    [theme.breakpoints.down('md')]: {
      height: 'auto',
    },
  },
  titleLogo: {
    width: '100%',
    height: 'fit-content',
  },
  movieDetails: {
    color: '#ffffff !important',
    fontFamily: '"Inter",sans-serif !important',
    fontWeight: '600 !important',
    textAlign: 'start',
    marginLeft: '10px !important',
    marginTop: '10px !important',
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {
      fontSize: '10px !important',
      marginTop: '5px !important',
    },
  },
  movieCertificate: {
    background: 'rgba(250, 250, 250, 0.4) !important',
    color: '#ffffff !important',
    fontFamily: '"Inter",sans-serif !important',
    fontWeight: '600 !important',
    [theme.breakpoints.down('md')]: {
      fontSize: '10px !important',
      marginTop: '5px !important',
    },
  },

  movieDescription: {
    color: '#ffffff !important',
    textAlign: 'start',
    marginTop: '20px !important',
    fontFamily: '"Inter",sans-serif !important',
    marginLeft: '10px !important',
    maxHeight: '75px !important',
    overflow: 'hidden !important',
    [theme.breakpoints.down('md')]: {
      fontSize: '10px !important',
      marginTop: '5px !important',
      maxHeight: '48px !important',
      overflow: 'hidden !important',
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '10px !important',
      maxHeight: '28px !important',
      overflow: 'hidden !important',
      marginTop: '5px !important',
    },
    [theme.breakpoints.down(510)]: {
      display: 'none',
    },
  },
  movieGenre: {
    color: '#ffffff !important',
    textAlign: 'start',
    marginTop: '20px !important',
    fontFamily: '"Inter",sans-serif !important',

    marginLeft: '10px !important',
    fontWeight: '600 !important',
    marginBottom: '20px !important',
    [theme.breakpoints.down('md')]: {
      fontSize: '10px !important',
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '10px !important',
      marginTop: '5px !important',
      marginBottom: '5px !important',
    },
    [theme.breakpoints.down(510)]: {
      fontSize: '8px !important',
    },
  },
  btnBox: {
    display: 'flex',
    justifyContent: 'space-around',
    marginTop: '10%',
    [theme.breakpoints.down('sm')]: {
      marginTop: '5%',
    },
  },
  watchBtn: {
    fontFamily: '"Inter",sans-serif !important',
    color: '#ffffff !important',
    fontWeight: '600 !important',
    fontSize: '18px !important',
    textTransform: 'capitalize !important',
    background: 'transparent',
    width: '80%',

    '&:hover': {
      background: 'rgba(250, 250, 250, 0.4) !important',
    },
    [theme.breakpoints.down('md')]: {
      fontSize: '10px !important',
    },
    [theme.breakpoints.down('sm')]: {
      width: '100% !important',
    },
    [theme.breakpoints.down(515)]: {
      padding: '0px !important',
    },
  },
  watchIcon: {
    fontSize: '30px !important',
    marginRight: '10px !important',
    [theme.breakpoints.down('md')]: {
      fontSize: '15px !important',
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '15px !important',
      width: '10% !important',
    },
  },
  watchLaterBtn: {
    color: '#ffffff !important',
    background: 'transparent',
    minWidth: '0px !important',
    '&:hover': {
      background: 'rgba(250, 250, 250, 0.4) !important',
    },
    [theme.breakpoints.down('md')]: {
      fontSize: '15px !important',
    },
  },
  watchLaterIcon: {
    fontSize: '35px !important',
    [theme.breakpoints.down('md')]: {
      fontSize: '20px !important',
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '13px !important',
    },
  },
});
