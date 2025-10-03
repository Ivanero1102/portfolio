import { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext";
import { translations } from "../../translation/translations";
export function CVAnchor(){
    
    const handleOpenLink = () => {
    window.open("https://drive.google.com/file/d/1FR1teXzmcnk1UB-XNEhi5hVavpLGcNA4/view?usp=sharing", "_blank");
    };

    const {language} = useContext(LanguageContext);
    const t = translations[language];

    return (
        <button
         onClick={handleOpenLink}
         className={`inline-flex items-center justify-center ring-2 w-24 h-12 rounded-xl ring-indigo-300 dark:ring-gray-700 bg-indigo-200 dark:bg-gray-800 hover:bg-indigo-300 hover:dark:bg-gray-700 hover:ring-indigo-400 hover:dark:ring-gray-600`}
        >
            {t.header.cvAnchor}
        </button>
    )
}