import React from "react";
import { motion } from "framer-motion";
import ProjectItem from "./ProjectItem";
import tubeland from "../../assets/tubeland.png";
import drsavkovic from "../../assets/drsavkovic.png";
import torexrs from "../../assets/torexrs.png";
import inspektor from "../../assets/inspektorrs.png";
import mondlinepro from "../../assets/mondlinepro.png";
import portfolio from "../../assets/portfolio.png";
import techlounge from "../../assets/techlounge.png";

const Projects = () => {
  return (
    <div
      id="projects"
      className="max-w-[992px] m-auto md:pl-20 p-4 py-10 md:py-16 "
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h1 className="relative w-fit mx-auto py-4 px-2 mb-16 text-4xl font-fira font-extrabold text-center gradient-text overflow-hidden group">
          Projects
        </h1>
      </motion.div>

      <div className="grid sm:grid-cols-2 gap-12 mt-6">
        <ProjectItem
          order={1}
          image={techlounge}
          title="TechLounge - Frontend eShop (personal project)"
          url="https://tech-lounge-nc3s.onrender.com/"
          githubUrl={"https://github.com/damjans92/tech-lounge"}
          tags={[
            "ReactJs",
            "Typescript",
            "React Hooks",
            "Context",
            "TailwindCSS",
            "Framer Motion",
          ]}
        />
        <ProjectItem
          order={2}
          image={tubeland}
          title="TubeLand - Video Sharing (personal project)"
          url="https://tubeland.onrender.com"
          githubUrl={"https://github.com/damjans92/mern-video-app-frontend"}
          githubUrl2={"https://github.com/damjans92/mern-video-app-backend"}
          tags={[
            "MERN stack",
            "ReactJs",
            "MongoDB",
            "Express",
            "NodeJs",
            "Redux",
            "JWT",
            "Firebase",
          ]}
        />
        <ProjectItem
          order={3}
          image={drsavkovic}
          title="Dr Savkovic Dental"
          url="https://drsavkovic.rs"
          githubUrl={"https://github.com/damjans92/ordinacija"}
          tags={["ReactJs", "GatsbyJs", "GraphQL", "Contentful CMS"]}
        />
        <ProjectItem
          order={4}
          image={inspektor}
          title="Inspektor"
          url="https://inspektor.gov.rs"
          githubUrl={""}
          tags={["HTML", "CSS", "Bootstrap", "JS", "Jquery"]}
        />
        <ProjectItem
          order={5}
          image={portfolio}
          title="This Site"
          url="#"
          githubUrl={"https://github.com/damjans92/portfolio-ds"}
          tags={["ReactJs", "TailwindCSS", "Framer Motion"]}
        />
        <ProjectItem
          order={6}
          image={torexrs}
          title="Torex"
          url="https://torex.smartweb.com"
          githubUrl={""}
          tags={["HTML", "CSS", "Bootstrap", "JS", "Jquery", "Wordpress"]}
        />
        <ProjectItem
          order={7}
          image={mondlinepro}
          title="Mond Line Pro (redesign)"
          url="https://mondlinepro.rs/"
          githubUrl={""}
          tags={["HTML", "CSS", "Bootstrap", "JS", "Jquery", "Wordpress"]}
        />
      </div>
    </div>
  );
};

export default Projects;
