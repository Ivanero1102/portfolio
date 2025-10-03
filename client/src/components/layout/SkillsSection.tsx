import phpLogo from "../../assets/php.png";
import javaLogo from "../../assets/java.png";
import pythonLogo from "../../assets/python.png";
import javaScriptLogo from "../../assets/javaScript.png";
import typeScriptLogo from "../../assets/typeScript.png";
import cPlusPlusLogo from "../../assets/cPlusPlus.png";
import reactLogo from "../../assets/react.png";
import postmanLogo from "../../assets/postman.png";
import awsLogo from "../../assets/aws.png";
import postgreSQLLogo from "../../assets/PostgresSQL.png";
import { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext";
import { translations } from "../../translation/translations";

export default function SkillsSection() {

  const {language} = useContext(LanguageContext);
  const t = translations[language];

  const skills = [
    { name: "PHP", img: phpLogo },
    { name: "Java", img: javaLogo },
    { name: "Python", img: pythonLogo },
    { name: "JavaScript", img: javaScriptLogo },
    { name: "TypeScript", img: typeScriptLogo },
    { name: "C++", img: cPlusPlusLogo },
    { name: "React", img: reactLogo },
    { name: "Postman", img: postmanLogo },
    { name: "AWS", img: awsLogo },
    { name: "PostgreSQL", img: postgreSQLLogo },
  ];

  return (
    <section className="py-10 px-4 md:px-8 lg:px-16">
      <h2 className="text-2xl font-bold text-center text-cyan-800 dark:text-cyan-500 mb-6">{t.home.t1}</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-10 justify-items-center">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="relative group w-20 h-20 flex items-center justify-center bg-white dark:bg-gray-600 shadow-lg rounded-xl p-2 transition hover:scale-105"
          >
            <img src={skill.img} alt={skill.name} className="w-full h-full object-contain" />

            {/* Tooltip */}
            <span className="absolute bottom-[-2rem] scale-0 group-hover:scale-100 transition bg-gray-900 text-white text-xs px-2 py-1 rounded shadow-lg">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}