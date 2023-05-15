import { Component } from 'react';
import { Box, Button, CardMedia, Grid, Typography } from '@mui/material';
import { withStyles } from '@mui/styles';
import { FooterPageStyle } from './FooterPage.Style';
import fb from '../../images/socials/facebook.png';
import twitter from '../../images/socials/twitter.png';
import apple from '../../images/Downloads/apple.png';
import android from '../../images/Downloads/android.png';

interface FooterPageProps {
  classes: any;
}

interface FooterPageState {}

class FooterPage extends Component<FooterPageProps, FooterPageState> {
  constructor(props: FooterPageProps) {
    super(props);
    this.state = {};
  }
  render() {
    const { classes } = this.props;
    return (
      <Box className={classes.boxWrapper}>
        <Box className={classes.gridWrapper}>
          <Grid container sx={{}}>
            <Grid item lg={3} md={3} sm={12} xs={12}>
              <Box>
                <Typography className={classes.footerHeading}>
                  Company
                </Typography>
                <Box className={classes.dataList}>
                  <Typography className={classes.footerList1}>
                    About Us
                  </Typography>
                  <Typography className={classes.footerList2}>
                    Careers
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item lg={3} md={3} sm={12} xs={12}>
              <Box>
                <Typography className={classes.footerHeading}>
                  View website in
                </Typography>
                <Typography className={classes.footerList}>English</Typography>
              </Box>
            </Grid>
            <Grid item lg={3} md={3} sm={12} xs={12}>
              <Box className={classes.needHelpBox}>
                <Typography className={classes.footerHeading}>
                  Need Help?
                </Typography>
                <Box className={classes.dataList}>
                  <Typography className={classes.footerList1}>
                    Visit Help Center
                  </Typography>
                  <Typography className={classes.footerList}>
                    Share Feedback
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item lg={3} md={3} sm={12} xs={12}>
              <Box className={classes.textFix}>
                <Typography className={classes.footerHeading}>
                  Connect with us
                </Typography>
                <Box className={classes.socialImageBoxWrapper}>
                  <Box className={classes.socialImageBox}>
                    <img className={classes.socialImg} alt="img" src={fb} />
                  </Box>
                  <Box className={classes.socialImageBox2}>
                    <img
                      className={classes.socialImg}
                      alt="img"
                      src={twitter}
                    />
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
          <Box className={classes.footerlastWrapper}>
            <Box>
              <Typography className={classes.rightsReserved}>
                © 2023 STAR. All Rights Reserved.
              </Typography>
              <Button className={classes.termsofUse}>Terms of Use</Button>
              <Button className={classes.termsofUse}>Privacy Policy</Button>
              <Button className={classes.termsofUse}>FAQ</Button>
            </Box>
            <Box className={classes.appDownload}>
              <Box className={classes.appDownloadBox}>
                <CardMedia component="img" src={android} />
              </Box>
              <Box className={classes.appDownloadBox}>
                <CardMedia component="img" src={apple} />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    );
  }
}

export default withStyles(FooterPageStyle)(FooterPage);
