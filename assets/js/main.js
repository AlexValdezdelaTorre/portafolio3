import parallax from './components/parallax.js';
import activeMenu from './components/selected_menu.js';
import updateDateYear from './helpers/date_updater.js';
import loader from './helpers/loader.js';
import resetToHome from './helpers/reload_page.js';
import sendEmail from './helpers/send_form.js';

loader();

resetToHome();

activeMenu();

parallax();

updateDateYear();

sendEmail();


/*const translations = {
    es: {
        title: "Portafolio",
        description: "Soy un desarrollador web",
        headerTitle: "¡Hola! soy Alex",
        homeDescription: "Soy un desarrollador web, apasionado en la creación de aplicaciones y sitios web.",
        downloadCV: "Descargar CV",
        aboutTitle: "Acerca de Mí",
        aboutDescription: "Soy un desarrollador Full Stack apasionado por crear soluciones digitales innovadoras y eficientes. Con experiencia en tecnologías frontend y backend, disfruto trabajar en todo el ciclo de desarrollo de aplicaciones web, desde el diseño de interfaces atractivas hasta la implementación de sistemas robustos y escalables. Me especializo en tecnologías como JavaScript, TypeScript, React, Node.js, PostgreSQL y siempre busco aprender nuevas herramientas y mejores prácticas para mejorar mis habilidades. Mi enfoque se centra en escribir código limpio, optimizado y seguro, priorizando siempre la experiencia del usuario y el rendimiento del software. Cuando no estoy programando, me gusta mucho practicar deportes y también seguir aprendiendo nuevas tecnologías para ampliar mis conocimientos y mi panorama como desarrollador.",
        aboutSkills:  "Dominio de lenguajes de programación, control de versiones y metodologías ágiles, con fuertes habilidades en resolución de problemas, pensamiento lógico y atención al detalle, lo que me escribir código legible y eficiente, con gran capacidad para trabajar en equipo y adaptarme a nuevas tecnologías.",
        skillsTitle: "Habilidades",
        htmlSkills: "Dominio de HTML5, incluyendo estructuras semánticas y optimización SEO, creación de formularios interactivos y accesibles con validaciones nativas, integración de multimedia (audio y video) y gráficos SVG, implementación de prácticas de accesibilidad web y mejora de navegabilidad.", 
        cssSkills: "Dominio de CSS3, incluyendo Flexbox, Grid y diseño responsivo con media queries, creación de animaciones avanzadas y transiciones para mejorar la experiencia del usuario, experiencia en SASS y frameworks como Bootstrap y Tailwind CSS, optimización de estilos para rendimiento y accesibilidad web.",
        jsSkills: "Dominio de JavaScript ES6+, manipulación del DOM y manejo de eventos, desarrollo de aplicaciones web dinámicas con React.js y Node.js, consumo y creación de APIs RESTful con Axios y Express.js, experiencia en gestión de estado con Redux y en pruebas unitarias con Jest, optimización de código siguiendo buenas prácticas y principios SOLID.",
        reactSkills: "Desarrollo de aplicaciones dinámicas con componentes funcionales y hooks como `useState` y `useEffect`,       gestión del estado global con Redux y Context API, implementación de rutas protegidas y navegación dinámica con React Router, consumo de APIs con Axios y React Query, despliegue de aplicaciones React en plataformas como Vercel y Netlify.",
        softSkills: "Habilidades Blandas", 
        leadership: "Liderazgo",
        teamwork: "Trabajo en equipo",
        creative: "Creativo",
        dedicated: "Dedicado",
        proactive: "Proactivo",
        adaptability: "Adaptabilidad y aprendizaje continuo",
        logicThinking: "Pensamiento lógico",
        proyects: "Proyectos",
        fortune: "Galleta de la Fortuna",
        fortuneDescription: "Aplicación que muestra una frase filosófica de manera aleatoria cada vez que se actualiza.",
        demo: "VER DEMO",
        code: "VER CODIGO",
        weather: "Aplicación del Clima",
        weatherApp: "Aplicación que muestra las condiciones climáticas como temperatura, viento, presión atmosférica.",
        weatherDemo: "VER DEMO",
        weatherCode: "VER CODIGO",
        rick: "Rick and Morty App",
        rickMorty: "Aplicación donde se muestra el universo de Rick and Morty con todos sus personajes, ubicaciones y número de episodios en los que aparecen.",
        rickDemo: "VER DEMO",
        rickCode: "VER CODIGO",

        navbar: {
            home: "Inicio",
            about: "Acerca de Mí",
            skills: "Habilidades",
            portfolio: "Portafolio",
            contact: "Contacto"
        }
    },
    en: {
        title: "Portfolio",
        description: "I am a web developer",
        headerTitle: "Hi! I'm Alex",
        homeDescription: "I am a web developer, passionate about creating applications and websites.",
        downloadCV: "Download CV",
        aboutTitle: "About Me",
        aboutDescription: "I am a Full Stack developer passionate about creating innovative and efficient digital solutions. With experience in both frontend and backend technologies, I enjoy working on the entire web application development cycle, from designing attractive interfaces to implementing robust and scalable systems. I specialize in technologies such as JavaScript, TypeScript, React, Node.js, PostgreSQL, and I am always looking to learn new tools and best practices to improve my skills. My focus is on writing clean, optimized, and secure code, always prioritizing user experience and software performance. When I'm not programming, I really enjoy playing sports and also continuing to learn new technologies to expand my knowledge and perspective as a developer.",
        aboutSkills: "Proficiency in programming languages, version control, and agile methodologies, with strong skills in problem-solving, logical thinking, and attention to detail, enabling me to write clean and efficient code, with great ability to work in a team and adapt to new technologies.",
        skillsTitle: "Skills",
        htmlSkills: "Proficiency in HTML5, including semantic structures and SEO optimization, creation of interactive and accessible forms with native validations, integration of multimedia (audio and video) and SVG graphics, implementation of web accessibility practices, and enhancement of navigability.",
        cssSkills: "Proficiency in CSS3, including Flexbox, Grid, and responsive design with media queries, creation of advanced animations and transitions to enhance user experience, experience with SASS and frameworks like Bootstrap and Tailwind CSS, and optimization of styles for performance and web accessibility.",
        jsSkills: "Mastery of JavaScript ES6+, DOM manipulation, and event handling, development of dynamic web applications with React.js and Node.js, consumption and creation of RESTful APIs using Axios and Express.js, experience in state management with Redux and unit testing with Jest, code optimization following best practices and SOLID principles.",
        reactSkills: "Development of dynamic applications with functional components and hooks such as useState and useEffect, global state management with Redux and Context API, implementation of protected routes and dynamic navigation with React Router, API consumption with Axios and React Query, deployment of React applications on platforms like Vercel and Netlify.", 
        softSkills: "Soft Skills",
        leadership: "Leadership",
        teamwork: "Teamwork",
        creative: "Creative",
        dedicated: "Dedicated",
        proactive: "Proactive",
        adaptability: "Adaptability and continuous learning",
        logicThinking: "Logical thinking",
        proyects: "Proyects",
        fortune: "Fortune Cookie",
        fortuneDescription: "An application that shows a random philosophical quote every time it is refreshed.",
        demo: "VIEW DEMO",
        code: "VIEW CODE",
        weather: "Weather App",
        weatherApp: "Application that displays weather conditions such as temperature, wind, and atmospheric pressure.",
        weatherDemo: "VIEW DEMO",
        weatherCode: "VIEW CODE",
        rick: "Rick and Morty App",
        rickMorty: "Application that showcases the Rick and Morty universe, including all its characters, locations, and the number of episodes they appear in.",
        rickDemo: "VIEW DEMO",
        rickCode: "VIEW CODE",

        navbar: {
            home: "Home",
            about: "About Me",
            skills: "Skills",
            portfolio: "Portfolio",
            contact: "Contact"
        }
    }
};
  
  document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.getElementById("language-toggle");
  
    // Recuperamos el idioma guardado o usamos español por defecto
    const savedLang = localStorage.getItem("language") || "es";
  
    // Aplicamos el idioma guardado
    toggle.checked = savedLang === "en"; // Si estaba en inglés, marcar el toggle
    changeLanguage(savedLang);
  
    // Detectamos cuando el usuario cambia el interruptor
    toggle.addEventListener("change", () => {
      const lang = toggle.checked ? "en" : "es"; // Inglés si está activado, Español si no
      changeLanguage(lang);
    });
  });
  
  function changeLanguage(lang) {
    // Cambiar el título de la página
    document.title = translations[lang].title;

    // Cambiar la meta descripción
    document.querySelector('meta[name="description"]').setAttribute("content", translations[lang].description);

    // Cambiar el contenido de los elementos de la página
    //document.getElementById("header-title").textContent = translations[lang].headerTitle;

    document.getElementById("header-title").textContent = translations[lang].headerTitle;
    document.getElementById("home-description").textContent = translations[lang].homeDescription;
    document.getElementById("download-cv").textContent = translations[lang].downloadCV;
    document.getElementById("about-title").textContent = translations[lang].aboutTitle;
    document.getElementById("about-description").textContent = translations[lang].aboutDescription;
    document.getElementById("about-skills").textContent = translations[lang].aboutSkills;
    document.getElementById("skills-title").textContent = translations[lang].skillsTitle;
    document.getElementById("html-skills").textContent = translations[lang].htmlSkills;
    document.getElementById("css-skills").textContent = translations[lang].cssSkills;
    document.getElementById("js-skills").textContent = translations[lang].jsSkills;
    document.getElementById("react-skills").textContent = translations[lang].reactSkills;
    document.getElementById("soft-skills").textContent = translations[lang].softSkills;
    document.getElementById("liderazgo").textContent = translations[lang].leadership;
    document.getElementById("teamwork").textContent = translations[lang].teamwork;
    document.getElementById("creaTive").textContent = translations[lang].creative;
    document.getElementById("dedicated").textContent = translations[lang].dedicated;
    document.getElementById("proactive").textContent = translations[lang].proactive;
    document.getElementById("adaptability").textContent = translations[lang].adaptability;
    document.getElementById("logic").textContent = translations[lang].logicThinking;
    document.getElementById("proyects").textContent = translations[lang].proyects;
    document.getElementById("fortune").textContent = translations[lang].fortune;
    document.getElementById("fortune-description").textContent = translations[lang].fortuneDescription;
    document.getElementById("demo").textContent = translations[lang].demo;
    document.getElementById("code").textContent = translations[lang].code;
    document.getElementById("weather").textContent = translations[lang].weather;
    document.getElementById("weatherApp").textContent = translations[lang].weatherApp;
    document.getElementById("weatherDemo").textContent = translations[lang].weatherDemo;
    document.getElementById("weatherCode").textContent = translations[lang].weatherCode;
    document.getElementById("rick").textContent = translations[lang].rick;
    document.getElementById("rickMorty").textContent = translations[lang].rickMorty;
    document.getElementById("rickDemo").textContent = translations[lang].rickDemo;
    document.getElementById("rickCode").textContent = translations[lang].rickCode;
    
    document.getElementById("inicio").textContent = translations[lang].navbar.home;
    document.getElementById("about").textContent = translations[lang].navbar.about;
    document.getElementById("skills").textContent = translations[lang].navbar.skills;
    document.getElementById("portfolio").textContent = translations[lang].navbar.portfolio;
    document.getElementById("contact").textContent = translations[lang].navbar.contact;
    
    

    // Guardamos la preferencia en localStorage
    localStorage.setItem("language", lang);
}*/
console.log("El script se ha cargado correctamente.");

/*document.addEventListener("DOMContentLoaded", () => {
    console.log("El script se ha cargado correctamente."); // Verificación

    const toggle = document.getElementById("language-toggle");

    if (!toggle) {
        console.error("No se encontró el elemento #language-toggle");
        return;
    }

    const savedLang = localStorage.getItem("language") || "es";
    
    // Aplicamos el idioma guardado
    toggle.checked = savedLang === "en"; // Si estaba en inglés, marcar el toggle
    changeLanguage(savedLang);

    // Detectamos cuando el usuario cambia el interruptor
    toggle.addEventListener("change", () => {
        const lang = toggle.checked ? "en" : "es"; // Inglés si está activado, Español si no
        changeLanguage(lang);
    });


const translations = {
    es: {
        title: "Portafolio",
        description: "Soy un desarrollador web.",
        headerTitle: "¡Hola! soy Alex",
        homeDescription: "Soy un desarrollador web, apasionado en la creación de aplicaciones y sitios web.",
        downloadCV: "Descargar CV",
        aboutTitle: "Acerca de Mí",
        aboutDescription: "Soy un desarrollador Full Stack apasionado por crear soluciones digitales innovadoras y eficientes. Con experiencia en tecnologías frontend y backend, disfruto trabajar en todo el ciclo de desarrollo de aplicaciones web, desde el diseño de interfaces atractivas hasta la implementación de sistemas robustos y escalables. Me especializo en tecnologías como JavaScript, TypeScript, React, Node.js, PostgreSQL y siempre busco aprender nuevas herramientas y mejores prácticas para mejorar mis habilidades. Mi enfoque se centra en escribir código limpio, optimizado y seguro, priorizando siempre la experiencia del usuario y el rendimiento del software. Cuando no estoy programando, me gusta mucho practicar deportes y también seguir aprendiendo nuevas tecnologías para ampliar mis conocimientos y mi panorama como desarrollador.",

        navbar: {
            home: "Inicio",
            about: "Acerca de Mí",
            skills: "Habilidades",
            portfolio: "Portafolio",
            contact: "Contacto"
        }
    },
    en: {
        title: "Portfolio",
        description: "I am a web developer.",
        headerTitle: "Hi! I'm Alex",
        homeDescription: "I am a web developer, passionate about creating applications and websites.",
        downloadCV: "Download CV",
        aboutTitle: "About Me",
        aboutDescription: "I am a Full Stack developer passionate about creating innovative and efficient digital solutions. With experience in both frontend and backend technologies, I enjoy working on the entire web application development cycle, from designing attractive interfaces to implementing robust and scalable systems. I specialize in technologies such as JavaScript, TypeScript, React, Node.js, PostgreSQL, and I am always looking to learn new tools and best practices to improve my skills. My focus is on writing clean, optimized, and secure code, always prioritizing user experience and software performance. When I'm not programming, I really enjoy playing sports and also continuing to learn new technologies to expand my knowledge and perspective as a developer.",

        navbar: {
            home: "Home",
            about: "About Me",
            skills: "Skills",
            portfolio: "Portfolio",
            contact: "Contact"
        }
    }
};

document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.getElementById("language-toggle");

    // Recuperamos el idioma guardado o usamos español por defecto
    const savedLang = localStorage.getItem("language") || "es";
    
    // Aplicamos el idioma guardado
    toggle.checked = savedLang === "en"; // Si estaba en inglés, marcar el toggle
    changeLanguage(savedLang);

    // Detectamos cuando el usuario cambia el interruptor
    toggle.addEventListener("change", () => {
        const lang = toggle.checked ? "en" : "es"; // Inglés si está activado, Español si no
        changeLanguage(lang);
    });
});

function changeLanguage(lang) {

    if (!translations[lang]) {
        console.error("Idioma no soportado:", lang);
        return;
    }

    document.title = translations[lang].title;
    document.querySelector('meta[name="description"]').setAttribute("content", translations[lang].description);

    // Buscar elementos a modificar
    const titleElement = document.getElementById("header-title");
    const descriptionElement = document.querySelector(".home__description");

    // Verificar si existen antes de modificarlos
    if (titleElement) {
        titleElement.textContent = translations[lang].title;
    } else {
        console.warn("No se encontró el elemento con id='header-title'");
    }

    if (descriptionElement) {
        descriptionElement.textContent = translations[lang].description;
    } else {
        console.warn("No se encontró el elemento con class='home__description'");
    }

    document.title = translations[lang].title;
    document.querySelector('meta[name="description"]').setAttribute("content", translations[lang].description);

    document.getElementById("headerTitle").textContent = translations[lang].headerTitle;
    document.getElementById("homeDescription").textContent = translations[lang].homeDescription;
    document.getElementById("download-cv").textContent = translations[lang].downloadCV;
    document.getElementById("about-title").textContent = translations[lang].aboutTitle;
    document.getElementById("about-description").textContent = translations[lang].aboutDescription;

    document.getElementById("inicio").textContent = translations[lang].navbar.home;
    document.getElementById("about").textContent = translations[lang].navbar.about;
    document.getElementById("skills").textContent = translations[lang].navbar.skills;
    document.getElementById("portfolio").textContent = translations[lang].navbar.portfolio;
    document.getElementById("contact").textContent = translations[lang].navbar.contact;

    localStorage.setItem("language", lang);
}*/

document.addEventListener("DOMContentLoaded", () => {
    console.log("El script se ha cargado correctamente."); // Verificación

    const toggle = document.getElementById("language-toggle");

    if (!toggle) {
        console.error("No se encontró el elemento #language-toggle");
        return;
    }

    const form = document.getElementById("form");
    const modal = document.getElementById("modal");
    const closeModal = document.getElementById("btn_close-modal");

  if (!form) {
    console.error("Formulario no encontrado en el DOM");
    return;
  }

  form.addEventListener("submit", (event) => {
    event.preventDefault(); // Evita el envío por defecto
    console.log("Formulario enviado correctamente!");

    // Muestra el modal al enviar el formulario
    if (modal) {
      modal.showModal();
    }
  });

  if (closeModal) {
    closeModal.addEventListener("click", () => {
      modal.close();
    });
  }

  const footerText = document.querySelector(".footer__copy");
  if (footerText) {
    footerText.textContent = "© 2025, All rights reserved"; // Traducción al inglés
  }

    const translations = {
        es: {
        title: "Portafolio",
        description: "Soy un desarrollador web.",
        headerTitle: "¡Hola! soy Alex",
        homeDescription: "Soy un desarrollador web, apasionado en la creación de aplicaciones y sitios web.",
        downloadCV: "Descargar CV",
        acercaDeMi: "Acerca de Mí",
        aboutDescription: "Soy un desarrollador Full Stack apasionado por crear soluciones digitales innovadoras y eficientes. Con experiencia en tecnologías frontend y backend, disfruto trabajar en todo el ciclo de desarrollo de aplicaciones web, desde el diseño de interfaces atractivas hasta la implementación de sistemas robustos y escalables. Me especializo en tecnologías como JavaScript, TypeScript, React, Node.js, PostgreSQL y siempre busco aprender nuevas herramientas y mejores prácticas para mejorar mis habilidades. Mi enfoque se centra en escribir código limpio, optimizado y seguro, priorizando siempre la experiencia del usuario y el rendimiento del software. Cuando no estoy programando, me gusta mucho practicar deportes y también seguir aprendiendo nuevas tecnologías para ampliar mis conocimientos y mi panorama como desarrollador.",
        descHabilidades:  "Dominio de lenguajes de programación, control de versiones y metodologías ágiles, con fuertes habilidades en resolución de problemas, pensamiento lógico y atención al detalle, lo que me escribir código legible y eficiente, con gran capacidad para trabajar en equipo y adaptarme a nuevas tecnologías.",
        habilidadesTitulo: "Habilidades",
        htmlTitulo: "HTML",

        htmlSkills: "Dominio de HTML5, incluyendo estructuras semánticas y optimización SEO, creación de formularios interactivos y accesibles con validaciones nativas, integración de multimedia (audio y video) y gráficos SVG, implementación de prácticas de accesibilidad web y mejora de navegabilidad.", 
        cSSHabilidades: "Dominio de CSS3, incluyendo Flexbox, Grid y diseño responsivo con media queries, creación de animaciones avanzadas y transiciones para mejorar la experiencia del usuario, experiencia en SASS y frameworks como Bootstrap y Tailwind CSS, optimización de estilos para rendimiento y accesibilidad web.",
        jsSkills: "Dominio de JavaScript ES6+, manipulación del DOM y manejo de eventos, desarrollo de aplicaciones web dinámicas con React.js y Node.js, consumo y creación de APIs RESTful con Axios y Express.js, experiencia en gestión de estado con Redux y en pruebas unitarias con Jest, optimización de código siguiendo buenas prácticas y principios SOLID.",
        reactSkills: "Desarrollo de aplicaciones dinámicas con componentes funcionales y hooks como `useState` y `useEffect`,       gestión del estado global con Redux y Context API, implementación de rutas protegidas y navegación dinámica con React Router, consumo de APIs con Axios y React Query, despliegue de aplicaciones React en plataformas como Vercel y Netlify.",
        softSkills: "Habilidades Blandas", 
        leadership: "Liderazgo",
        teamwork: "Trabajo en equipo",
        creative: "Creativo",
        dedicated: "Dedicado",
        proactive: "Proactivo",
        adaptability: "Adaptabilidad y aprendizaje continuo",
        logicThinking: "Pensamiento lógico",
        proyects: "Proyectos",
        fortune: "Galleta de la Fortuna",
        fortuneDescription: "Aplicación que muestra una frase filosófica de manera aleatoria cada vez que se actualiza.",
        demo: "VER DEMO",
        code: "VER CODIGO",
        weather: "Aplicación del Clima",
        weatherApp: "Aplicación que muestra las condiciones climáticas como temperatura, viento, presión atmosférica.",
        weatherDemo: "VER DEMO",
        weatherCode: "VER CODIGO",
        rickMorty: "Aplicación donde se muestra el universo de Rick and Morty con todos sus personajes, ubicaciones y número de episodios en los que aparecen.",
        rickDemo: "VER DEMO",
        rickCode: "VER CODIGO",
        Crud: "Permitir crear, leer, actualizar y eliminar usuarios de una API.",
        CrudDemo: "VER DEMO",
        CrudCode: "VER CODIGO",
        Pokedex: "Aplicación que permite ver la información de tu pokemón favorito.",
        pokeDemo: "VER DEMO",
        pokeCode: "VER CODIGO",
        contacto: "Contacto",
        infocontacto: "Información de contacto",
        contactDesc: "Puedes contactarme a través de los siguientes medios",
        mensage: "Enviar mensaje",
        nombre: "Nombre",
        email: "Email",
        asunto: "Asunto",
        message: "Mensaje",
        enviar: "Enviar",
         modal: "Formulario enviado con éxito!",
         close: "Cerrar",
         footer: "© 2025, Todos los derechos reservados",

            
    
            navbar: {
                home: "Inicio",
                about: "Acerca de Mí",
                skills: "Habilidades",
                portfolio: "Portafolio",
                contact: "Contacto"
            }
        },
        en: {
            title: "Portfolio",
        description: "I am a web developer.",
        headerTitle: "Hi! I'm Alex",
        homeDescription: "I am a web developer, passionate about creating applications and websites.",
        downloadCV: "Download CV",
        acercaDeMi: "About Me",
        aboutDescription: "I am a Full Stack developer passionate about creating innovative and efficient digital solutions. With experience in both frontend and backend technologies, I enjoy working on the entire web application development cycle, from designing attractive interfaces to implementing robust and scalable systems. I specialize in technologies such as JavaScript, TypeScript, React, Node.js, PostgreSQL, and I am always looking to learn new tools and best practices to improve my skills. My focus is on writing clean, optimized, and secure code, always prioritizing user experience and software performance. When I'm not programming, I really enjoy playing sports and also continuing to learn new technologies to expand my knowledge and perspective as a developer.",
        descHabilidades: "Proficiency in programming languages, version control, and agile methodologies, with strong skills in problem-solving, logical thinking, and attention to detail, enabling me to write clean and efficient code, with great ability to work in a team and adapt to new technologies.",
        habilidadesTitulo: "Skills",
        htmlTitulo: "HTML",

        htmlSkills: "Proficiency in HTML5, including semantic structures and SEO optimization, creation of interactive and accessible forms with native validations, integration of multimedia (audio and video) and SVG graphics, implementation of web accessibility practices, and enhancement of navigability.",
        cSSHabilidades: "Proficiency in CSS3, including Flexbox, Grid, and responsive design with media queries, creation of advanced animations and transitions to enhance user experience, experience with SASS and frameworks like Bootstrap and Tailwind CSS, and optimization of styles for performance and web accessibility.",
        jsSkills: "Mastery of JavaScript ES6+, DOM manipulation, and event handling, development of dynamic web applications with React.js and Node.js, consumption and creation of RESTful APIs using Axios and Express.js, experience in state management with Redux and unit testing with Jest, code optimization following best practices and SOLID principles.",
        reactSkills: "Development of dynamic applications with functional components and hooks such as useState and useEffect, global state management with Redux and Context API, implementation of protected routes and dynamic navigation with React Router, API consumption with Axios and React Query, deployment of React applications on platforms like Vercel and Netlify.", 
        softSkills: "Soft Skills",
        leadership: "Leadership",
        teamwork: "Teamwork",
        creative: "Creative",
        dedicated: "Dedicated",
        proactive: "Proactive",
        adaptability: "Adaptability and continuous learning",
        logicThinking: "Logical thinking",
        proyects: "Projects",
        fortune: "Fortune Cookie",
        fortuneDescription: "An application that shows a random philosophical quote every time it is refreshed.",
        demo: "VIEW DEMO",
        code: "VIEW CODE",
        weather: "Weather App",
        weatherApp: "Application that displays weather conditions such as temperature, wind, and atmospheric pressure.",
        weatherDemo: "VIEW DEMO",
        weatherCode: "VIEW CODE",
        rickMorty: "Application that showcases the Rick and Morty universe, including all its characters, locations, and the number of episodes they appear in.",
        rickDemo: "VIEW DEMO",
        rickCode: "VIEW CODE",
        Crud: "Allow creating, reading, updating, and deleting users from an API.",
        CrudDemo: "VIEW DEMO",
        CrudCode: "VIEW CODE",
        Pokedex: "Application that allows you to view information about your favorite Pokémon.",
        pokeDemo: "VIEW DEMO",
        pokeCode: "VIEW CODE",
        contacto:"Contact",
        infocontacto: "Contact Information",
        contactDesc: "You can contact me through the following channels!",
        mensage: "Send message",
        nombre: "Name",
        email: "Email",
        asunto: "Subject",
        message: "Message",
        enviar: "Submit",
        modal: "Form submitted successfully!",
        close: "Close",
        footer: "© 2025, All rights reserved",

        navbar: {
            home: "Home",
            about: "About Me",
            skills: "Skills",
            portfolio: "Portfolio",
            contact: "Contact"
        }
        }
    };

    const savedLang = localStorage.getItem("language") || "es";

    toggle.checked = savedLang === "en";
    changeLanguage(savedLang);

    toggle.addEventListener("change", () => {
        const lang = toggle.checked ? "en" : "es";
        localStorage.setItem("language", lang); // Guardar la elección
        changeLanguage(lang);
    });

    function changeLanguage(lang) {
        if (!translations[lang]) {
            console.error("Idioma no soportado:", lang);
            return;
        }

        document.querySelector(".footer__copy").textContent = translations[lang].footer;
        document.title = translations[lang].title;
        document.querySelector('meta[name="description"]').setAttribute("content", translations[lang].description);

        

        document.getElementById("headerTitle").textContent = translations[lang].headerTitle;
        document.getElementById("homeDescription").textContent = translations[lang].homeDescription;
        document.getElementById("curriculum").textContent = translations[lang].downloadCV;
        document.getElementById("AboutMe").textContent = translations[lang].acercaDeMi;
        document.getElementById("aboutMeDescription").textContent = translations[lang].aboutDescription;

        document.getElementById("habilidadesDesc").textContent = translations[lang].descHabilidades;
        document.getElementById("habiliTitulo").textContent = translations[lang].habilidadesTitulo;
        document.getElementById("html").textContent = translations[lang].htmlTitulo;
        document.getElementById("skillsHtml").textContent = translations[lang].htmlSkills;
        document.getElementById("cSSHabilidades").textContent = translations[lang].cSSHabilidades;
        document.getElementById("jsHabilidades").textContent = translations[lang].jsSkills;
        document.getElementById("reactHabilidades").textContent = translations[lang].reactSkills;
        document.getElementById("habilidadBlanda").textContent = translations[lang].softSkills;
        document.getElementById("liderazgo").textContent = translations[lang].leadership;
        document.getElementById("trabajoEquipo").textContent = translations[lang].teamwork;
        document.getElementById("creativo").textContent = translations[lang].creative;
        document.getElementById("dedicado").textContent = translations[lang].dedicated;
        document.getElementById("proactivo").textContent = translations[lang].proactive;
        document.getElementById("adaptabilidad").textContent = translations[lang].adaptability;
        document.getElementById("pensamientoLogico").textContent = translations[lang].logicThinking;
        document.getElementById("proyecto").textContent = translations[lang].proyects;
        document.getElementById("galleta").textContent = translations[lang].fortune;
        document.getElementById("galletafortuna").textContent = translations[lang].fortuneDescription;
        document.getElementById("galletaDemo").textContent = translations[lang].demo;
        document.getElementById("galletaCodigo").textContent = translations[lang].code;
        document.getElementById("clima").textContent = translations[lang].weather;
        document.getElementById("climaApp").textContent = translations[lang].weatherApp;
        document.getElementById("climaDemo").textContent = translations[lang].weatherDemo;
        document.getElementById("climaCode").textContent = translations[lang].weatherCode;
        document.getElementById("rickAndmorty").textContent = translations[lang].rickMorty;
        document.getElementById("rickDemo").textContent = translations[lang].rickDemo;
        document.getElementById("rickCode").textContent = translations[lang].rickCode;
        document.getElementById("crud").textContent = translations[lang].Crud;
        document.getElementById("crudDemo").textContent = translations[lang].CrudDemo;
        document.getElementById("crudCode").textContent = translations[lang].CrudCode;
        document.getElementById("pokedex").textContent = translations[lang].Pokedex;
        document.getElementById("pokeDemo").textContent = translations[lang].pokeDemo;
        document.getElementById("pokeCode").textContent = translations[lang].pokeCode;
        document.getElementById("contacto").textContent = translations[lang].contacto;
        document.getElementById("infocontacto").textContent = translations[lang].infocontacto;
        document.getElementById("contactDesc").textContent = translations[lang].contactDesc;
        document.getElementById("sendMessage").textContent = translations[lang].mensage;
        document.getElementById("label-name").textContent = translations[lang].nombre;
        document.getElementById("label-email").textContent = translations[lang].email;
        document.getElementById("label-subject").textContent = translations[lang].asunto;
        document.getElementById("label-message").textContent = translations[lang].message;
        document.getElementById("enviar").textContent = translations[lang].enviar;
        document.getElementById("modal").firstChild.textContent = translations[lang].modal;
        

        document.getElementById("inicio").textContent = translations[lang].navbar.home;
        document.getElementById("acercaDeMi").textContent = translations[lang].navbar.about;
        document.getElementById("habilidades").textContent = translations[lang].navbar.skills;
        document.getElementById("miPortafolio").textContent = translations[lang].navbar.portfolio;
        document.getElementById("miContacto").textContent = translations[lang].navbar.contact;
        

    }
});