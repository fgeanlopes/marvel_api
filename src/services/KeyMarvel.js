import md5 from "md5";

const timeInMs = new Date().getTime();
// const privateKey = "8d2a7ca5d3ea634c5276a2e1cef0575374c1f5da";
const privateKey = "c26f20cab6ace21a06ba56caee2353a5ccd94c5d";
// const publicKey = "c3c8876fa5fa3d1baa02d617d24157c2";
const publicKey = "5076e5bc03ef093f81759c1655aa3967";
const md5Final = md5(timeInMs + privateKey + publicKey);
const endUrl = `&ts=${timeInMs}&apikey=${publicKey}&hash=${md5Final}`;

const KeyMarvel = endUrl;
export default KeyMarvel;