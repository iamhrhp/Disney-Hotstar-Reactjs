export const SidebarPageStyles: any = (theme: any) => ({
  childrenProp: {
    width: '95%',
    zIndex: '0',
    [theme.breakpoints.down('sm')]: {
      width: '90%',
    },
    [theme.breakpoints.down(295)]: {
      width: '85%',
    },
  },
  sidebarMainbox: {
    width: '5%',
    height: 'fit-content !important',
    [theme.breakpoints.down('sm')]: {
      width: '10%',
    },
    [theme.breakpoints.down(295)]: {
      width: '15%',
    },
  },
});
