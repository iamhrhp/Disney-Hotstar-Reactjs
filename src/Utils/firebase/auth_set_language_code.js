import { getAuth, RecaptchaVerifier } from 'firebase/auth';

const auth = getAuth();
window.recaptchaVerifier = new RecaptchaVerifier(
  'recaptcha-container',
  {},
  auth
);
