export type Translation = {

  page: string;
  content: string;
};

export type TranslationType = {
  language: string;
  page: string;
  translations: Translation[];
};
