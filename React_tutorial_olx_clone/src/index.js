import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {FirebaseContext} from './store/Context'
import Contest from './store/Context'
import firebase from './firebase/config'
import "dotenv/config"

ReactDOM.render(
          <FirebaseContext.Provider value={{firebase}}>
                    <Contest>
                    <App />
                    </Contest>
          </FirebaseContext.Provider>
, document.getElementById('root'));
