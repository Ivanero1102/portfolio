// src/translations/translations.ts
export const AVAILABLE_LANGS = ["en", "es"] as const;
export type Language = (typeof AVAILABLE_LANGS)[number]; // "en" | "es"

type Dict = {
  header: {
    button1: string;
    button2: string;
    languageSwitcher1: string;
    languageSwitcher2: string;
    cvAnchor: string;
    contactPanel1: string;
    contactPanel2: string;
    contactPanel3: string;
    contactPanel4: string;

  };

  home:{
    alert:{
      alertRout: string;
    };
    name: string;
    career: string;
    aboutMe:string;
    p1:string;
    p2:string;
    p3:string;
    p4:string;
    p5:string;
    p6:string;
    p7:string;
    t1:string;
    t2:string;
    projectCard:{
      description1:string;
      description2:string;
      description3:string;
      description4:string;
    }
    copyright:string;
  }
};

export const translations: Record<Language, Dict> = {
  en:{
    header: {
      button1: "Home",
      button2: "Projects",
      languageSwitcher1: "Spanish",
      languageSwitcher2: "English",
      cvAnchor: "Curriculum",
      contactPanel1: "Contact",
      contactPanel2: "Email",
      contactPanel3: "GitHub",
      contactPanel4: "LinkedIn"
    },

    home:{
      alert:{
        alertRout: "Page not found. Redirected to home.",
      },
      name: "Iván Higueras Barrado",
      career: "Full-Stack Developer",
      aboutMe:"About Me",
      p1: "I am a",
      p2:"Full-Stack Developer",
      p3:"with experience in various technologies such as",
      p4:"React, PHP, and PostgreSQL.",
      p5:"I have lived in Ireland for 9 months improving my English.",
      p6:"I’m passionate about creating fast, scalable applications with a clean design.",
      p7:"Outside of coding, I enjoy playing sports and learning new languages.",
      t1:"Technologies",
      t2:"Featured Projects",
      projectCard:{
        description1:"Test of a website that allows donations to various NGOs through advertisements.",
        description2:"My personal website built with React and Tailwind.",
        description3:"Guide your character to the finish without crashing.",
        description4:"Work in progress",
      },
      copyright:"Iván Higueras Barrado — All rights reserved.",
    },
  },
  
  es: {
    header: { 
      button1: "Inicio", 
      button2: "Proyectos",
      languageSwitcher1: "Español",
      languageSwitcher2: "Inglés",
      cvAnchor:"Curriculum",
      contactPanel1:"Contacto", 
      contactPanel2:"Email", 
      contactPanel3:"GitHub", 
      contactPanel4:"LinkedIn" 
    },
    home:{
      alert:{
        alertRout:"Ruta no encontrada. Redirigido al inicio."
      },
      name: "Iván Higueras Barrado",
      career: "Desarrollador Full-Stack",
      aboutMe:"Sobre mi",
      p1:"Soy",
      p2:"Desarrollador Full-Stack",
      p3:"con experiencia en varias tecnologías como:",
      p4:"React, PHP y PostgreSQL",
      p5:"He vivido 9 meses en Irlanda mejorando mi ingles.",
      p6:"Me apasiona crear aplicaciones rápidas, escalables y con un diseño limpio.",
      p7:"Fuera del código, disfruto haciendo deporte y aprendiendo nuevos idiomas.",
      t1:"Tecnologías",
      t2:"Proyectos destacados",
      projectCard:{
        description1:"Prueba de una pagina web que permite realizar donaciones a diversas ONGs mediante anuncios.",
        description2:"Mi web personal con React y Tailwind.",
        description3:"Lleva tu personaje a la meta sin choca",
        description4:"Aun en desarrollo",
      },
      copyright:"Iván Higueras Barrado — All rights reserved.",
    },
  },
};
