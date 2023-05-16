import {
  Box,
  Button,
  CardMedia,
  Modal,
  TextField,
  Typography,
} from '@mui/material';
import React, { FC, useState, useEffect } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { withStyles } from '@mui/styles';
import { LoginPageStyle } from './LoginPage.Style';
import { auth } from '../../Utils/firebase/firebaseConfig';
import toast, { Toaster } from 'react-hot-toast';
import {
  PhoneAuthProvider,
  RecaptchaVerifier,
  signInWithCredential,
  signInWithPhoneNumber,
  signOut,
} from 'firebase/auth';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
import './LoginPage.css';
import { useDispatch, useSelector } from 'react-redux';
import HoverCardPage from '../../Common Component/Hover Card/HoverCardPage';
import LinearProgress from '@mui/material/LinearProgress';
import {
  ADD_USER_NUMBER,
  DELETE_USER_NUMBER,
} from '../../Utils/redux/reducer/reducer';

interface IProps {
  classes?: any;
}

const LoginPage: FC<IProps> = (props: IProps) => {
  const [open, setOpen] = React.useState(false);
  const [phonenumber, setPhonenumber] = useState<string>('');
  const [verificationId, setVerificationId] = useState<string>('');
  const [otp, setOtp] = useState<string>('');
  const [currNumber, setCurrNumber] = useState<any>('');
  const [isloading, setIsLoading] = useState<boolean>(false);

  const { watchLater } = useSelector((state: any) => state.moviesSlice);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { classes } = props;
  const dispatch = useDispatch();
  const handleChange = (value: undefined) => {
    if (value) {
      setPhonenumber(value);
    }
  };

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    setTimeout(() => {
      setIsLoading(true);
    }, 2000);
  }, []);

  // captcha handler---------------
  const handleappverifier: any = async (event: any) => {
    if (event.key === 'Enter') {
      const recaptchaVerifier = new RecaptchaVerifier(
        'recaptcha-container',
        {
          size: 'normal',
          callback: (response: any) => {
            console.log(response);
          },
          'expired-callback': () => {},
        },
        auth
      );
      // singIn handler---------------------
      return signInWithPhoneNumber(auth, phonenumber, recaptchaVerifier)
        .then((confirmationResult) => {
          // console.log('--------', confirmationResult);
          setVerificationId(confirmationResult.verificationId);
          toast.success('OTP sent successfully');
        })
        .catch((error) => {
          alert(error);
        });
    }
  };

  // user login check------------------
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setCurrNumber(user.phoneNumber);
        dispatch(ADD_USER_NUMBER(user.phoneNumber));
      } else {
        setCurrNumber('');
      }
    });
  }, []);

  // otp handler-------------------------
  const handleOtp = async (event: any) => {
    if (event.key === 'Enter') {
      try {
        const authCredential = PhoneAuthProvider.credential(
          verificationId,
          otp
        );
        await signInWithCredential(auth, authCredential)
          .then((data) => data.user)
          .then((data) => setCurrNumber(data.phoneNumber));
        toast.success('Sign in successfully');
      } catch (e) {
        alert(e);
      }
      handleClose();
    }
  };

  // signout handler--------------

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        toast.success('Sign out Successful!');
        dispatch(DELETE_USER_NUMBER(''));
      })
      .catch((error) => {
        toast.success('An error happened.!');
      });
  };

  return (
    <React.Fragment>
      <Box sx={{ height: '100vh', margin: '0 auto' }}>
        {!isloading ? <LinearProgress /> : null}

        <Box className={classes.mainWrapper}>
          {currNumber === '' ? (
            <Box sx={{ position: 'relative', top: '20rem' }}>
              <Typography className={classes.loginTitle}>
                Login to Disney+ Hotstar
              </Typography>
              <Typography className={classes.startWatching}>
                Start watching from where you left off, personalise for kids and
                more
              </Typography>
              <Button onClick={handleOpen} className={classes.loginNowTitle}>
                Login Now
              </Button>
            </Box>
          ) : (
            <Box className={classes.loggedBoxWrapper}>
              <Box className={classes.loggedTitleBox}>
                <Typography className={classes.loggedTitle}>
                  Subscribe to enjoy Disney+ HotStar
                </Typography>
                <Typography className={classes.loggedTitle}>
                  {currNumber}
                </Typography>
              </Box>
              <Box className={classes.loggedTitleBox2}>
                <Button className={classes.loginNowTitle}>Subscribe</Button>
                <Button className={classes.helpBtn} onClick={handleSignOut}>
                  Sign out
                </Button>
              </Box>
            </Box>
          )}
          <Modal
            open={open}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box className={classes.modalWrapper}>
              {verificationId === '' ? (
                <Box className={classes.modalTopBody}>
                  <Box className={classes.closeIconBox}>
                    <Button onClick={handleClose}>
                      <CloseIcon className={classes.closeIcon} />
                    </Button>
                  </Box>
                  <Typography className={classes.modalLoginTitle}>
                    Log in or sign up to continue
                  </Typography>
                  <Box className={classes.modalInputBox}>
                    <TextField
                      label="+91"
                      type="number"
                      disabled
                      sx={{
                        textAlign: 'center',
                        width: '60px',
                        fontFamily: '"Inter",sans-serif !important',
                        marginRight: '10px !important',
                        border: '1px solid #8f98b2 !important',
                        borderRadius: '4px',
                        '.css-14s5rfu-MuiFormLabel-root-MuiInputLabel-root': {
                          color: '#8f98b2 !important',
                        },
                      }}
                    />
                    <PhoneInput
                      defaultCountry="IN"
                      placeholder="Enter mobile number"
                      value={phonenumber}
                      onChange={handleChange}
                      onKeyDown={handleappverifier}
                    />
                    <div
                      className={classes.recaptchaStyle}
                      id="recaptcha-container"
                    />
                  </Box>
                  <Typography className={classes.modalByProceeding}>
                    By proceeding you confirm that you are above 18 years of age
                    and agree to the Privacy Policy & Terms of Use
                  </Typography>
                </Box>
              ) : (
                <Box className={classes.modalTopBody}>
                  <Box className={classes.closeIconBox}>
                    <Button onClick={handleClose}>
                      <CloseIcon className={classes.closeIcon} />
                    </Button>
                  </Box>
                  <Typography className={classes.modalLoginTitle}>
                    Confirm OTP
                  </Typography>
                  <Box className={classes.modalInputBox}>
                    <TextField
                      placeholder="Enter otp"
                      value={otp}
                      onChange={(e) => setOtp(e.target.value)}
                      // onChange={handleChange}
                      onKeyDown={handleOtp}
                      sx={{
                        border: '1px solid #8f98b2 !important',
                        borderRadius: '4px',
                        '.css-9ddj71-MuiInputBase-root-MuiOutlinedInput-root ':
                          {
                            color: '#8f98b2 !important',
                            '& input[type=number]': {
                              '-moz-appearance': 'textfield !important',
                            },
                            '& input[type=number]::-webkit-outer-spin-button': {
                              '-webkit-appearance': 'none',
                              margin: '0 !important',
                            },
                            '& input[type=number]::-webkit-inner-spin-button': {
                              '-webkit-appearance': 'none',
                              margin: '0 !important',
                            },
                          },
                        '.css-14s5rfu-MuiFormLabel-root-MuiInputLabel-root': {
                          color: '#8f98b2 !important',
                        },
                        '.css-1d3z3hw-MuiOutlinedInput-notchedOutline': {
                          borderColor: '#8f98b2 !important',
                        },
                        '.css-14lo706': {
                          color: '#8f98b2 !important',
                        },
                      }}
                    />
                  </Box>
                  <Typography className={classes.modalByProceeding}>
                    By proceeding you confirm that you are above 18 years of age
                    and agree to the Privacy Policy & Terms of Use
                  </Typography>
                </Box>
              )}

              <Box className={classes.modalHavingtroubleBox}>
                <Typography className={classes.modalHavingtrouble}>
                  Having trouble logging in?
                </Typography>
                <Typography className={classes.modalGetHelp}>
                  Get Help
                </Typography>
              </Box>
            </Box>
          </Modal>
        </Box>
        {currNumber !== '' ? (
          <Box className={classes.watchLaterListBox}>
            {watchLater.length > 0 ? (
              <Box
                className={classes.wrapperBtn}
                // onClick={() => navigateToViewAllPage()}
              >
                <Button className={classes.GenreBtn}>Watchlist</Button>
                {/* <Button className={classes.viewAllBtn}>View All</Button> */}
              </Box>
            ) : null}

            <Box sx={{ display: 'flex' }}>
              {currNumber !== ''
                ? watchLater?.map((movie: any, i = Date.now()) => {
                    return (
                      <Box
                        className="mapBox"
                        key={i}
                        sx={{ marginRight: '10px' }}
                      >
                        <CardMedia
                          className="mapImg"
                          component="img"
                          src={movie.poster}
                        />
                        <HoverCardPage
                          Image={movie.Image}
                          Genre={movie.Genre}
                          ReleaseDate={movie.MovieYear}
                          Overview={movie.Description}
                          // NavigateToMediaPlayer={() => handleNavigatePlayer(movie)}
                        />
                      </Box>
                    );
                  })
                : null}
            </Box>
          </Box>
        ) : null}
        <Toaster />
      </Box>
    </React.Fragment>
  );
};

export default withStyles(LoginPageStyle)(LoginPage);
