export const TVPageStyle: any = (theme: any) => ({
  slideBox: {
    height: '60%',
  },
  slideImg: {
    height: '80% !important',
    [theme.breakpoints.down('md')]: {
      height: '80% !important',
    },
  },
  slideVideo: {
    height: '100% !important',
    [theme.breakpoints.down('md')]: {
      height: '100% !important',
    },
  },
});
