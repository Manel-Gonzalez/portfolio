import {createContext, useEffect, useState} from "react";

export const LanguageContext = createContext();

export const LanguageProvider = ({children}) => {
  const [language, setLanguage] = useState("es");

  useEffect(() => {
    console.log("Language changed to:", language);
  }, [language]);

  return (
    <LanguageContext.Provider value={{language, setLanguage}}>
      {children}
    </LanguageContext.Provider>
  );
};
