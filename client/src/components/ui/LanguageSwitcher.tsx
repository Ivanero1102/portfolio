import { useState, useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext";
import { translations } from "../../translation/translations";

export default function LanguageSwitcher() {
  const { language, changeLanguage } = useContext(LanguageContext);
  const [open, setOpen] = useState(false);
  const t = translations[language];
  
  return (
    <div className="relative inline-block">
      <button
        onClick={() => setOpen(!open)}
        className={`w-28 h-12 flex items-center justify-center gap-2
          ring-2 
         ${open
            ? "bg-indigo-300 dark:bg-gray-700 ring-indigo-400 dark:ring-gray-600 rounded-t-xl"
            : "bg-indigo-200 dark:bg-gray-800 ring-indigo-300 dark:ring-gray-700 rounded-xl hover:bg-indigo-300 hover:dark:bg-gray-700 hover:ring-indigo-400"}`}
      >
      {language === "es" ? "Español" : "English"}
      </button>

      {open && (
        <div className="absolute left-0 w-28 bg-indigo-200 dark:bg-gray-800 shadow-lg ring-2 ring-indigo-400 dark:ring-gray-600 rounded-b-xl overflow-hidden z-10">
          <ul className="divide-y divide-indigo-400 dark:divide-gray-700 text-sm">
            <li>
              <button
                onClick={() => {
                  changeLanguage("es");
                  setOpen(false);
                }}
                className="block w-full text-left px-3 py-2 hover:bg-indigo-300 dark:hover:bg-gray-700"
              >
                {t.header.languageSwitcher1}
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  changeLanguage("en");
                  setOpen(false);
                }}
                className="block w-full text-left px-3 py-2 hover:bg-indigo-300 dark:hover:bg-gray-700"
              >
                {t.header.languageSwitcher2}
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
