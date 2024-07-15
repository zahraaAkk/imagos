import { IconButton, Button, Box, Link, Container, FormControl, TextField, useTheme, Grid } from '@mui/material';

import "../../index.css";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getDictionary, getField } from '../../utils/translation/translation';
import { TranslationType } from "../../types/translationTypes";
import { connect } from "react-redux";
import TranslateIcon from '@mui/icons-material/Translate';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import useStyles from './styles';
import { CustomTheme } from '../../theme/index';
import { ThemeActions } from '../../redux/actions/themeActions';
import { Dispatch } from 'redux';
import ThemeSwitch from '../../components/error/themeSwitch';

const LoginPage = ({ mobileView, desktopView, themeChoice, switchTheme }: { mobileView?: boolean; desktopView?: boolean; switchTheme: any, themeChoice?: any }) => {


    const [isSubmitting, setIsSubmitting] = useState(false);

    const [showPassword, setShowPassword] = useState(false);


    const handleTogglePassword = () => { setShowPassword((prevShowPassword) => !prevShowPassword); };
    const theme: CustomTheme = useTheme();
    const navigate = useNavigate();
    const classes = useStyles();

    return (
        <>
            <Grid container display='flex' justifyContent='center' alignItems='center' style={{ minHeight:'100vh', backgroundColor: theme.palette.primary.lighter }}>
                <div >
                    <Button variant='contained' onClick={() => { navigate('/dashboard') }} sx={{ backgroundColor: "theme.palette.primary.main" }}>
                       THEME 
                    </Button>
                    <ThemeSwitch switchTheme={switchTheme} theme={themeChoice} textColor={""} text='Change Theme' />
                </div>
              
            </Grid>


        </>
    );
};
const mapStateToProps = (state: any) => ({
    themeChoice: state.themeSwitch.themeChoice,


});
const mapDispatchToProps = (dispatch: Dispatch<any>) => {
    return {
        switchTheme: (theme: string) => dispatch(ThemeActions.switchTheme(theme)),

    }
}


export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);