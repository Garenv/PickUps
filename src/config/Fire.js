import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyAQCHgyskEZgbWR7VzAHAf2hSaNbZU_YT0",
    authDomain: "foodtruck-58c83.firebaseapp.com",
    databaseURL: "https://foodtruck-58c83.firebaseio.com",
    projectId: "foodtruck-58c83",
    storageBucket: "foodtruck-58c83.appspot.com",
    messagingSenderId: "756891961828"
};

const fire = firebase.initializeApp(config);
export default fire;