import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './App';
import { Provider } from 'react-redux';
import { configurePersistor, configureStore } from "./redux/store/store";
import { PersistGate } from "redux-persist/lib/integration/react";
import packageJson from '../package.json';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const store = configureStore();
const persistor = configurePersistor(store);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={<div />} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

function checkForNewVersionAndClearCache() {

  const currentVersion = localStorage.getItem('appVersion');
  console.log('stored version:', currentVersion);
  const newVersion = packageJson.version;
  console.log('project version:', newVersion);
  if (currentVersion !== newVersion) {
    console.log('Versions do not match. Clearing cache and updating version.');

    localStorage.clear();

    setTimeout(() => {
      window.location.reload();
    }, 0);

    localStorage.setItem('appVersion', newVersion);
  } else {
    console.log(`Current app version matches stored version (${newVersion}). No need to clear`);
  }
}

checkForNewVersionAndClearCache();

window.onload = () => {
  checkForNewVersionAndClearCache();
};
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

