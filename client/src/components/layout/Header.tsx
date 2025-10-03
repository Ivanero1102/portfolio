import { useState } from "react";
import { CVAnchor } from "../ui/CVAnchor";
import ContactPanel from "../ui/ContactPanel";
import DarkModeToggle from "../ui/DarkModeToggle";
import logo from "../../assets/logo.jpg";
import LanguageSwitcher from "../ui/LanguageSwitcher";

export default function Header() {


  const [open, setOpen] = useState(false);

  return (
    <header className="relative w-full z-40">
      <div className="w-full h-25 grid grid-cols-12 items-center gap-4 px-3 lg:px-32 bg-indigo-50 dark:bg-gray-800 text-black dark:text-white shadow-md">
        <div className="col-span-6 lg:col-span-4 flex items-center space-x-6 px-4">
          <img
            src={logo}
            alt="Logo"
            className="w-14 h-14 object-contain rounded-full"
          />
        </div>
        <div className="hidden lg:flex col-span-8 justify-end space-x-6">
          <LanguageSwitcher />
          <CVAnchor/>
          <ContactPanel />
          <DarkModeToggle />
        </div>
        <div className="flex lg:hidden col-span-6 justify-end pr-4">
          <button
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            className="flex flex-col justify-center items-center w-8 h-8 focus:outline-none"
          >
            <span
              className={`h-1 w-6 bg-black dark:bg-white rounded transition-all duration-300 ${
                open ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`h-1 w-6 bg-black dark:bg-white rounded transition-all duration-300 my-1 ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`h-1 w-6 bg-black dark:bg-white rounded transition-all duration-300 ${
                open ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-[10%] bg-gradient-to-b from-transparent to-sky-300  dark:bg-gradient-to-b dark:from-transparent dark:to-green-600 pointer-events-none"></div>
      </div>
      {open && (
        <div className="lg:hidden absolute top-[100%] left-0 w-full bg-indigo-50 dark:bg-gray-800 shadow-md flex flex-col items-center gap-6 py-6 z-50">
          <LanguageSwitcher />
          <CVAnchor/>
          <ContactPanel />
          <DarkModeToggle />
        </div>
      )}
    </header>
  );
}
