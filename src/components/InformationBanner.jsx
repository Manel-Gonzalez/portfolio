import {useContext} from "react";
import {LanguageContext} from "../context/LanguageContext";
import diccionario from "../data/test.json";

const InformationBanner = () => {
  const {language} = useContext(LanguageContext);
  const jsonData = diccionario[language];

  return (
    <div className="flex justify-between flex-row w-100 bg-white mx-4 rounded-md shadow-lg shadow-gray-500/65 border border-slate-200">
      <div className="w-6 m-3 transform transition duration-500 hover:scale-125">
        <a href={jsonData.curriculum?.downloadCV} download>
          <img src={jsonData.curriculum?.img} alt={jsonData.curriculum?.name} />
        </a>
      </div>
      <div className="flex flex-row">
        {jsonData.banner?.map((banner_item) => (
          <div
            key={banner_item.name}
            className="w-6 m-3 transform transition duration-500 hover:scale-125"
          >
            <a href={banner_item.url}>
              <img src={banner_item.img} alt={banner_item.name} />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InformationBanner;
