import { Dispatch, Action } from 'redux';

export const SWITCH_THEME = 'SWITCH_THEME'

interface SwitchThemeAction extends Action<typeof SWITCH_THEME> { payload: { theme: string; } }

export type ThemeActionTypes = SwitchThemeAction;

const themeswitch = (theme: string): SwitchThemeAction => ({ type: SWITCH_THEME, payload: { theme } });

export const ThemeActions = { switchTheme: (theme: string) => (dispatch: Dispatch<any>) => { dispatch(themeswitch(theme)); }, };