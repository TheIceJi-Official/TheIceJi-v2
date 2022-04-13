import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import serverConfig from 'server/config'

const clientCredentials = {
    apiKey: serverConfig.FIREBASE_API_KEY,
    authDomain: serverConfig.FIREBASE_AUTH_DOMAIN,
    projectId: serverConfig.FIREBASE_PROJECT_ID,
    storageBucket: serverConfig.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: serverConfig.FIREBASE_MESSAGING_SENDER_ID,
    appId: serverConfig.FIREBASE_APP_ID,
  };
  
  if (!firebase.apps.length) {
    firebase.initializeApp(clientCredentials);
  }
  
  export default firebase;