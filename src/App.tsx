import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from 'react';
import React, { Suspense } from 'react';
import { CircularProgress, Typography } from '@mui/material';
import { Error } from "./components/error/error";
//redux components
import { connect } from "react-redux";
import { Dispatch } from 'redux';
//Layouts
import SpecialLayout from "./layouts/SpecialLayout";
//to create theme
import { ThemeProvider, CssBaseline, createTheme } from '@mui/material'
import useSettings from './hooks/useSettings'
import { createCustomTheme } from './theme'

function App({ themeChoice }: {  themeChoice: string }) {
  const { settings } = useSettings()
  const theme = createCustomTheme({
    direction: settings.direction === 'rtl' ? 'rtl' : 'ltr',
    responsiveFontSizes: settings.responsiveFontSizes,
    roundedCorners: settings.roundedCorners,
    theme: `${themeChoice}`,
  })


  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <CssBaseline />
        <Suspense fallback={
          <div className="loader-wrapper">
            <CircularProgress color="primary" size={70} />
            <Typography variant="body1" className="loader-text"> Loading..</Typography>
          </div>}>
          <Routes>
            <Route path="/*" element={<SpecialLayout headerHidden={false} />} />
            <Route path="/*" element={<Error />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </ThemeProvider>
  );
}
const mapStateToProps = (state: any) => ({ themeChoice: state.themeSwitch.themeChoice, });
export default connect(mapStateToProps, null)(App);