import {useContext} from "react";
import {LanguageContext} from "../context/LanguageContext";

const LanguageSelector = () => {
  const {setLanguage} = useContext(LanguageContext);

  return (
    <div className="p-4 py-2 flex flex-row gap-2">
      <button
        className=" bg-white p-2 shadow-lg shadow-gray-500/65 border border-slate-200 hover:bg-slate-100 cursor-pointer rounded-lg 
                                transform transition duration-500 
                                hover:scale-110"
        onClick={() => setLanguage("ca")}
      >
        CA
      </button>
      <button
        className="bg-white p-2 shadow-lg shadow-gray-500/65 border border-slate-200 hover:bg-slate-100 cursor-pointer rounded-lg 
            transform transition duration-500 
            hover:scale-110 "
        onClick={() => setLanguage("es")}
      >
        ES
      </button>
      <button
        className="bg-white p-2 shadow-lg shadow-gray-500/65 border border-slate-200 hover:bg-slate-100 cursor-pointer rounded-lg 
                                transform transition duration-500 
                                hover:scale-110  "
        onClick={() => setLanguage("en")}
      >
        EN
      </button>
    </div>
  );
};

export default LanguageSelector;
