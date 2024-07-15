import { TranslationType } from "../../types/translationTypes";

export const getDictionary = (translation: TranslationType[], component: string, language: string) => {
  let dictionary = Array.isArray(translation) ? translation.filter((row) => row?.page === component) : [];
  return dictionary;
};


// if (dictionary) {

//   if (dictionary?.length === 0 || !dictionary[0]?.values ||
//     !dictionary[0]?.values[field]) {
//     return "No trans";
//   }
//   const value = dictionary[0]?.values[field][language] ?
//     dictionary[0]?.values[field][language] :
//     dictionary[0]?.values[field]["english"] ?
//       dictionary[0]?.values[field]["english"] : "No translation";
//   return value;
// }
export const getField = (dictionary: any, field: string, language: string) => {
  if (dictionary?.length === 0 || !dictionary[0]?.values ||
    !dictionary[0]?.values[field]) {
    return "No trans";
  }
  const value = dictionary[0]?.values[field][language] ?
    dictionary[0]?.values[field][language] :
    dictionary[0]?.values[field]["english"] ?
      dictionary[0]?.values[field]["english"] : "No translation";
  return value;
}


const checkObjectValues = (obj: any) => {
  return Object.keys(obj).every(key => {
    const value = obj[key];
    return value === '' || value === null || value === undefined;
  });
}

export const getDataFieldTranslation = (dataObject: any, language: string) => {
  if (!dataObject) {
    return "";
  }
  if (checkObjectValues(dataObject)) {
    return "";
  }
  //else
  return (dataObject[language] ? dataObject[language] :
    dataObject["english"] ? dataObject["english"] : "No translation")
}

