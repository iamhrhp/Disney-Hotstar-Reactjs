export const FooterPageStyle: any = (theme: any) => ({
  boxWrapper: {
    background: '#000000',
    // paddingTop: '5%',
  },
  footerHeading: {
    fontFamily: '"Inter",sans-serif !important',
    fontWeight: '600',
    fontSize: '16px !important',
    textTransform: 'capitalize !important',
    color: '#ffffff !important',
    marginBottom: '10px !important',
    [theme.breakpoints.down('sm')]: {
      fontSize: '12px !important',
    },
  },
  footerList: {
    fontFamily: '"Inter",sans-serif !important',
    color: '#8f98b2 !important',
    fontWeight: '400',
    fontSize: '14px !important',
    marginBottom: '10px !important',
    [theme.breakpoints.down('sm')]: {
      fontSize: '12px !important',
    },
  },
  footerList1: {
    fontFamily: '"Inter",sans-serif !important',
    color: '#8f98b2 !important',
    fontWeight: '400',
    fontSize: '14px !important',
    marginBottom: '10px !important',
    [theme.breakpoints.down('sm')]: {
      marginRight: '10px !important',
      fontSize: '12px !important',
    },
  },
  footerList2: {
    fontFamily: '"Inter",sans-serif !important',
    color: '#8f98b2 !important',
    fontWeight: '400',
    fontSize: '14px !important',
    [theme.breakpoints.down('sm')]: {
      fontSize: '12px !important',
    },
  },
  gridWrapper: {
    width: '95%',
    margin: 'auto',
  },
  needHelpBox: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'start',
  },
  textFix: {
    textAlign: 'center !important',
    [theme.breakpoints.down('md')]: {
      textAlign: 'start !important',
    },
    [theme.breakpoints.down('sm')]: {
      textAlign: 'start !important',
    },
  },
  socialImageBoxWrapper: {
    display: 'flex',
    justifyContent: 'center',
    [theme.breakpoints.down('md')]: {
      justifyContent: 'start',
    },
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'start',
    },
  },
  socialImageBox: {
    width: '25px',
    marginRight: '20px !important',
  },
  socialImageBox2: {
    width: '25px',
  },
  socialImg: {
    color: 'white !important',
  },
  footerlastWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '50px !important',
    paddingBottom: '50px',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
  rightsReserved: {
    fontFamily: '"Inter",sans-serif !important',
    fontWeight: '400',
    fontSize: '12px !important',
    textTransform: 'capitalize !important',
    color: '#8f98b2 !important',
    [theme.breakpoints.down('sm')]: {
      fontSize: '10px !important',
    },
  },
  termsofUse: {
    fontFamily: '"Inter",sans-serif !important',
    color: '#8f98b2 !important',
    fontSize: '12px',
    textTransform: 'capitalize !important',
    [theme.breakpoints.down('sm')]: {
      fontSize: '10px !important',
    },
  },
  appDownload: {
    display: 'flex',
  },
  appDownloadBox: {
    width: '150px',
  },
  dataList: {
    [theme.breakpoints.down('sm')]: {
      display: 'flex',
    },
  },
});

// [theme.breakpoints.down('md')]: {
//       height: 'auto',
//     },
