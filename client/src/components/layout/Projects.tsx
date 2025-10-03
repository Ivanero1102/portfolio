import ProjectCard from "../ui/ProjectCard";
import { useContext} from "react";
import { LanguageContext } from "../../context/LanguageContext";
import { translations } from "../../translation/translations";
import workInProgressIMG from "../../assets/workInProgress.png";
import socialhopeIMG from "../../assets/socialhope.png";
import puntoExtraIMG from "../../assets/puntoExtra.png";
import portfolioIMG from "../../assets/portfolio.png"

export default function Projects() {
  const { language } = useContext(LanguageContext);
  const t = translations[language];
  return (
    <section className="p-10 ">
      <h2 className="text-2xl font-bold text-cyan-800 dark:text-cyan-500 mb-6">{t.home.t2}</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20">
        <ProjectCard
          title="Socialhope"
          description={t.home.projectCard.description1}
          tech={["PHP", "MySql", "HTML5"]}
          githubUrl="https://github.com/Ivanero1102/Final-Proyect"
          image={socialhopeIMG}
        />

        <ProjectCard
          title="Portfolio"
          description={t.home.projectCard.description2}
          tech={["React", "Tailwind"]}
          githubUrl="https://github.com/Ivanero1102/portfolio"
          image={portfolioIMG}
        />

        <ProjectCard
          title="Don´t crash the car"
          description={t.home.projectCard.description3}
          tech={["PHP", "HTML5", "Apache"]}
          githubUrl="https://github.com/Ivanero1102/Punto_Extra"
          image={puntoExtraIMG}
        />
        <div></div>
        <ProjectCard 
                title="Work in progress" 
                description={t.home.projectCard.description4}
                tech={["C#"]} 
                image={workInProgressIMG}
        />
        <div></div>
      </div>
    </section>
  );
}