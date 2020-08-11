import md5 from "md5";

const timeInMs = new Date().getTime();

const publicKey = process.env.REACT_APP_PUBKEY;
const privateKey = process.env.REACT_APP_PRIVKEY;

const md5Final = md5(timeInMs + privateKey + publicKey);
const endUrl = `&ts=${timeInMs}&apikey=${publicKey}&hash=${md5Final}`;


const KeyMarvel = endUrl;
export default KeyMarvel;