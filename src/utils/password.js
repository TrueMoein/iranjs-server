import CryptoJS from 'crypto-js';

const SALT = '#$^%)(#@_&*DH$*&%@_SDL#*&@#$_!$*$#^';

export function encrypt(plainPass) {
  const hashedPass = CryptoJS.AES.encrypt(plainPass, SALT);
  
  return hashedPass.toString();
}

export function decrypt(hashedPass) {
  const bytes = CryptoJS.AES.decrypt(hashedPass, SALT);
  const res = bytes.toString(CryptoJS.enc.Utf8);

  
  return res;
}