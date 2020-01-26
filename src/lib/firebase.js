import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyC1Y882LbkCdyVXC3dBR61_AGvggQfggbE",
    authDomain: "qwerhacks-2f0e8.firebaseapp.com",
    databaseURL: "https://qwerhacks-2f0e8.firebaseio.com",
    projectId: "qwerhacks-2f0e8",
    storageBucket: "qwerhacks-2f0e8.appspot.com",
    messagingSenderId: "200765239178",
    appId: "1:200765239178:web:014b0daa2ca0a79d182273"
};
firebase.initializeApp(config);

export default firebase;
