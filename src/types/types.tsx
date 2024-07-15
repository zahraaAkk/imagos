import { TranslationType } from "./translationTypes";


type TranslationState = {
  translation: TranslationType[];
};

type AppState = {
  translation: TranslationState;
};

export default AppState;