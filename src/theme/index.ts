import { createTheme, responsiveFontSizes, Theme } from '@mui/material';
import { THEMES } from './constants';

export interface ThemePalette {

  primary: {
    contrastText: string;
    main: string;
    second: string;
    lighter: string;
  };
}

interface ThemesOptions {
  [key: string]: {
    palette: ThemePalette;
  };
}

const themesOptions: ThemesOptions = {
  [THEMES.FEMALE]: {
    palette: {
    
      primary: {
        contrastText: '#ffffff',
        main: '#FF69B4',
        second: '#C71585',
        lighter: '#FFC0CB',
      },
    },
  },
  [THEMES.MALE]: {
    palette: {
 
      primary: {
        contrastText: '#ffffff',
        main: '#6495ED',
        second: '#4169E1',
        lighter: '#B0C4DE',
      },
    },
  },
};

export interface CustomTheme extends Omit<Theme, 'palette'> {
  palette: ThemePalette;
}

export const createCustomTheme = (config: {
  theme?: string;
  direction?: 'ltr' | 'rtl';
  responsiveFontSizes?: boolean;
  roundedCorners?: boolean;
} = {}): CustomTheme => {
  let themeOptions = themesOptions[config.theme || THEMES.FEMALE || THEMES.MALE];

  if (!themeOptions) {
    console.warn(new Error(`The theme ${config.theme} is not valid`));
    themeOptions = themesOptions[THEMES.MALE];
  }

  let theme: CustomTheme = createTheme({
    ...themeOptions,
    direction: config.direction,
  }) as unknown as CustomTheme;

  if (config.responsiveFontSizes) {
    theme = responsiveFontSizes(theme as unknown as Theme) as unknown as CustomTheme;
  }

  return theme;
};
