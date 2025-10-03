import { useState } from "react";
import { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext";
import { translations } from "../../translation/translations";
import emailLogo from "../../assets/email.png";
import gitHubLogo from  "../../assets/gitHub.png";
import linkedInLogo from "../../assets/linkedIn.png";

export default function ContactPanel() {
  const emailOpenLink = () => {
    window.open("mailto:ihiguerasbarrado@gmail.com", "_blank");
  };

  const gitHubOpenLink = () => {
    window.open("https://github.com/Ivanero1102", "_blank");
  };

  const linkedInOpenLink = () => {
    window.open("https://www.linkedin.com/in/ivanhigueras", "_blank");
  };

  const [open, setOpen] = useState(false);
  const {language} = useContext(LanguageContext);
  const t = translations[language];

  return (
    <div className="relative inline-block">
      <button
        onClick={() => setOpen(!open)}
        className={`w-24 h-12 flex items-center justify-center gap-2
          ring-2 
          ${open
            ? "bg-indigo-300 dark:bg-gray-700 ring-indigo-400 dark:ring-gray-600 rounded-t-xl"
            : "bg-indigo-200 dark:bg-gray-800 ring-indigo-300 dark:ring-gray-700 rounded-xl hover:bg-indigo-300 hover:dark:bg-gray-700 hover:ring-indigo-400"}`}
      >
        {t.header.contactPanel1}
      </button>

      {open && (
        <div className="absolute left-0 w-24 bg-indigo-200 dark:bg-gray-800 shadow-lg ring-2 ring-indigo-400 dark:ring-gray-600 rounded-b-xl overflow-hidden z-10">
          <ul className="divide-y divide-indigo-400 dark:divide-gray-700 text-sm">
            <li>
              <button
              onClick={emailOpenLink}
              className="w-full px-3 py-2 hover:bg-indigo-300 dark:hover:bg-gray-700 flex items-center gap-2"
              >
                <img src={emailLogo} alt="Email" className="w-4 h-4" />
                {t.header.contactPanel2}
              </button>
            </li>
            <li>
               <button
              onClick={gitHubOpenLink}
              className="w-full px-3 py-2 hover:bg-indigo-300 dark:hover:bg-gray-700 flex items-center gap-2 "
              >
                <img src={gitHubLogo} alt="Email" className="w-4 h-4 dark:invert" />
                {t.header.contactPanel3}
              </button>
            </li>
            <li>
               <button
              onClick={linkedInOpenLink}
              className="w-full px-3 py-2 hover:bg-indigo-300 dark:hover:bg-gray-700 flex items-center gap-2"
              >
              <img src={linkedInLogo} alt="Email" className="w-4 h-4" />
                {t.header.contactPanel4}
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}