import * as firebase from "firebase";
const config = require("config.js");
firebase.initializeApp(config);
const firebaseApp = firebase;

export default firebaseApp;