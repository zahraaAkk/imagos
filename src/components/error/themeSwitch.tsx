import React from 'react';
import { Radio, RadioGroup, FormControlLabel, FormControl, FormLabel } from '@mui/material';
import { CustomTheme } from '../../theme/index';
import { useTheme } from '@mui/material/styles';

interface ThemeSwitchProps {
    text?: string;
    switchTheme: any;
    theme: string;
    textColor?: string;
}

const ThemeSwitch: React.FC<ThemeSwitchProps> = ({ text, switchTheme, theme, textColor }) => {
    const handleThemeSwitch = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newTheme = event.target.value;
        switchTheme(newTheme);
        document.documentElement.setAttribute('data-theme', newTheme);
    };

    const themeContext: CustomTheme = useTheme();

    return (
        <FormControl component="fieldset">
            <FormLabel component="legend" style={{ color: textColor }}>{text || "Select Theme"}</FormLabel>
            <RadioGroup
                aria-label="theme"
                name="theme"
                value={theme}
                onChange={handleThemeSwitch}
                row
            >
                <FormControlLabel
                    value="FEMALE"
                    control={<Radio />}
                    label="Female"
                    sx={{
                        // '& .MuiRadio-root': {
                        //     color: themeContext.palette.mode === 'Female' ? '#8796A5' : '#aab4be',
                        // },
                        '& .Mui-checked': {
                            color: themeContext.palette.primary.main,
                        },
                    }}
                />
                <FormControlLabel
                    value="MALE"
                    control={<Radio />}
                    label="Male"
                    sx={{
                        // '& .MuiRadio-root': {
                        //     color: themeContext.palette.mode === 'Female' ? '#8796A5' : '#aab4be',
                        // },
                        '& .Mui-checked': {
                            color: themeContext.palette.primary.main,
                        },
                    }}
                />
            </RadioGroup>
        </FormControl>
    );
};

export default ThemeSwitch;
