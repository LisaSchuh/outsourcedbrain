import * as React from 'react';
import * as ReactDOM from 'react-dom';
import OutsourcedBrain from './app/outsourcedBrain';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import firebaseApp from "@config/firebaseApp";

var firebaseui = require('firebaseui');
// var currentUser = firebaseApp.auth().currentUser; 
// if(currentUser == null) {
//   showAuthUI();
// }
// else {
//   showMainUI();
// }

firebaseApp.auth().onAuthStateChanged(function(user) {
  if (user) {
    showMainUI();
  } else {
    showAuthUI();
  }
});


function showMainUI() {
  (document.getElementById('authentication') as HTMLElement).remove();
  ReactDOM.render(
    <OutsourcedBrain />,
    document.getElementById('root') as HTMLElement
  );
  registerServiceWorker();
}

function showAuthUI() {
  firebaseApp.auth().setPersistence(firebaseApp.auth.Auth.Persistence.SESSION);
  // Initialize the FirebaseUI Widget using Firebase.
  var ui = new firebaseui.auth.AuthUI(firebaseApp.auth());

  var uiConfig = {
    callbacks: {
      signInSuccessWithAuthResult: function(authResult:any, redirectUrl:any) {
        showMainUI();
      },
      uiShown: function() {
        // // The widget is rendered.
        // // Hide the loader.
        // document.getElementById('loader').style.display = 'none';
      }
    },
    // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
    signInFlow: 'popup',
    signInOptions: [
      // Leave the lines as is for the providers you want to offer your users.
      firebaseApp.auth.GoogleAuthProvider.PROVIDER_ID
    ],
  };

  ui.start('#firebaseui-auth-container', uiConfig)
}
