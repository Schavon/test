import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyCbJyzWAAGa0DyNicS4Fnt1rDVLGHThObs",
    authDomain: "test-18258.firebaseapp.com",
    databaseURL: "https://test-18258.firebaseio.com",
    projectId: "test-18258",
    storageBucket: "test-18258.appspot.com",
    messagingSenderId: "254031774525",
    appId: "1:254031774525:web:7d7c9492383b4691363b54",
    measurementId: "G-7MN0QE8D7Y"
};

export const firebaseApp = firebase.initializeApp(config)