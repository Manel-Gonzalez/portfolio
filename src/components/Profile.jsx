import {useContext, useEffect, useState} from "react";
import {LanguageContext} from "../context/LanguageContext";
import diccionario from "../data/test.json";

const Profile = () => {
  const {language} = useContext(LanguageContext);
  const [jsonData, setData] = useState({});

  useEffect(() => {
    setData(diccionario[language]);
  }, [language]);

  return (
    <div className="flex flex-col md:flex-row bg-white m-4 rounded-md shadow-lg shadow-gray-500/65 border border-slate-200">
      <div className="p-8 w-100 md:w-2/5 md:row-span-3 col-span-1">
        <div className="w-100 p-1 flex justify-center">
          <img className="p-1" src={jsonData.img} alt="Profile" />
        </div>
      </div>
      <div className="md:w-3/5 p-4">
        <div>
          <h1 className="text-lg font-bold">{jsonData.name}</h1>
          <h2 className="text-lg font-medium">{jsonData.titulation}</h2>
        </div>
        <div className="p-2 md:p-4">
          <p className="text-justify">{jsonData.about_me}</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
