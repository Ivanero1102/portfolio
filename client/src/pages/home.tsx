import { useEffect, useState, useContext } from "react";
import { useLocation } from "react-router-dom";
import Alert from "../components/ui/Alert";
import Header from "../components/layout/Header";
import SkillsSection from "../components/layout/SkillsSection";
import Projects from "../components/layout/Projects";
import emailLogo from "../assets/email.png";
import gitHubLogo from  "../assets/gitHub.png";
import linkedInLogo from "../assets/linkedIn.png"
import { LanguageContext } from "../context/LanguageContext";
import { translations } from "../translation/translations";

export default function Home() {
  const location = useLocation();
  const [showAlert, setShowAlert] = useState(false);
  const [animateOut, setAnimateOut] = useState(false);
  const { language } = useContext(LanguageContext);
  const t = translations[language];

  useEffect(() => {
    if (location.state?.notFound) {
      setShowAlert(true);
      setAnimateOut(false);

      requestAnimationFrame(() => {
      setAnimateOut(false);
      });

      const timer = setTimeout(() => {
        setAnimateOut(true);
      }, 2000);

      const removeTimer = setTimeout(() => {
        setShowAlert(false);
      }, 5000);

      window.history.replaceState({}, document.title);

      return () => {
        clearTimeout(timer);
        clearTimeout(removeTimer);
      };
    }
  }, [location.state]);
    
    return (
    <div className="w-full min-h-screen mx-auto text-center">
        {showAlert && (
        <Alert
          className={`bg-red-500 text-white shadow-lg ${animateOut ? "animate-slideUp" : "animate-slideDown"}`}
        >
          {t.home.alert.alertRout}
        </Alert>
      )}
      <Header></Header>
      <div className="py-10">
        <h1 className="text-3xl text-cyan-700 dark:text-cyan-300 font-bold"> {t.home.name} </h1>
        <p className="mt-4 text-2xl text-cyan-800 dark:text-cyan-400 font-bold"> {t.home.career} </p>
      </div>
      <section className="p-6 max-w-3xl mx-auto bg-sky-200 dark:bg-gray-800 text-slate-800 dark:text-slate-50" >
        <h2 className="text-2xl font-bold mb-4 text-cyan-600 dark:text-cyan-500" > {t.home.aboutMe} </h2>
        <p className="mb-3">
          {t.home.p1} <span className="font-semibold">{t.home.p2}</span> {t.home.p3}
          <span className="dark:text-sky-500 text-violet-600 font-bold"> {t.home.p4}</span>. 
        </p>
        <p className="mb-3">
          {t.home.p5}
        </p>
        <p className="mb-3">
          {t.home.p6}
        </p>
        <p className="mb-3">
          {t.home.p7}
        </p>
      </section>
      <SkillsSection></SkillsSection>
      <Projects></Projects>

    <footer className="mt-12 py-6 bg-sky-200 dark:bg-gray-900 text-center">
      <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
        © {new Date().getFullYear()} {t.home.copyright}
      </p>
      <div className="flex justify-center gap-6">
        <a 
          href="mailto:ihiguerasbarrado@gmail.com" 
          target="_blank" 
          className="hover:opacity-80 inline-block w-6 h-6"
        >
          <img src={emailLogo} alt="Email" className="w-full h-full" />
        </a>

        <a 
          href="https://github.com/Ivanero1102" 
          target="_blank" 
          className="hover:opacity-80 inline-block w-6 h-6"
        >
          <img src={gitHubLogo} alt="GitHub" className="w-full h-full dark:invert" />
        </a>

        <a 
          href="https://www.linkedin.com/in/ivanhigueras" 
          target="_blank" 
          className="hover:opacity-80 inline-block w-6 h-6"
        >
          <img src={linkedInLogo} alt="LinkedIn" className="w-full h-full" />
        </a>

      </div>
    </footer>

  </div>
  );
}