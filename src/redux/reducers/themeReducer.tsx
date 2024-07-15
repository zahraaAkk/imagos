import { SWITCH_THEME, ThemeActionTypes } from '../actions/themeActions'

const INITIAL_STATE = { themeChoice: 'MALE' }

const themeReducer = (state = INITIAL_STATE, action: ThemeActionTypes) => {
    switch (action.type) {
        case SWITCH_THEME:
            return {
                ...state,
                themeChoice: action.payload.theme,
            };
        default:
            return state;
    }
};
export default themeReducer;