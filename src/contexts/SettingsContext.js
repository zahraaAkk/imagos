import React, { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { THEMES } from '../theme/constants';

const initialSettings = {
  compact: true,
  direction: 'ltr',
  responsiveFontSizes: true,
  roundedCorners: true,
  theme: THEMES.FEMALE,  // default to FEMALE
};

export const restoreSettings = () => {
  let settings = null;

  try {
    const storedData = window.localStorage.getItem('settings');

    if (storedData) {
      settings = JSON.parse(storedData);
    } else {
      settings = {
        compact: true,
        direction: 'ltr',
        responsiveFontSizes: true,
        roundedCorners: true,
        theme: THEMES.FEMALE,  // default to FEMALE
      };
    }
  } catch (err) {
    console.error(err);
  }

  return settings;
};

export const storeSettings = (settings) => {
  window.localStorage.setItem('settings', JSON.stringify(settings));
};

const SettingsContext = createContext({
  settings: initialSettings,
  saveSettings: () => {},
});

export const SettingsProvider = (props) => {
  const { children } = props;
  const [settings, setSettings] = useState(initialSettings);

  useEffect(() => {
    const restoredSettings = restoreSettings();

    if (restoredSettings) {
      setSettings(restoredSettings);
    }
  }, []);

  const saveSettings = (updatedSettings) => {
    setSettings(updatedSettings);
    storeSettings(updatedSettings);
  };

  return (
    <SettingsContext.Provider
      value={{
        settings,
        saveSettings,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
};

SettingsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const SettingsConsumer = SettingsContext.Consumer;

export default SettingsContext;
