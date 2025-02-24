import React, {useContext, useEffect, useState} from "react";
import {LanguageContext} from "../context/LanguageContext";
import diccionario from "../data/test.json";

export default function Projects() {
  const {language} = useContext(LanguageContext);
  const [jsonData, setData] = useState({});

  useEffect(() => {
    setData(diccionario[language]);
  }, [language]);

  return (
    <div className="flex justify-between flex-row w-100 bg-white mx-4 rounded-md shadow-lg shadow-gray-500/65 border border-slate-200 dark:bg-dark-background dark:text-dark-text">
      Projects
    </div>
  );
}
