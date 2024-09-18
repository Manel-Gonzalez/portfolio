import "./App.css";
import {LanguageProvider} from "./context/LanguageContext";
import Curriculum from "./components/Curriculum/Curriculum";

export default function App() {
  return (
    <LanguageProvider>
      <Curriculum />
    </LanguageProvider>
  );
}
