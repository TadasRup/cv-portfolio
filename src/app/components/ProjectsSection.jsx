"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "PROJECT 1",
    description: "Project 1 description",
    image: "/images/4.png",
    tag: ["All", "Web"],
  },
  {
    id: 2,
    title: "PROJECT 2",
    description: "Project 2 description",
    image: "/images/4.png",
    tag: ["All", "Web"],
  },
  {
    id: 3,
    title: "PROJECT 3",
    description: "Project 3 description",
    image: "/images/4.png",
    tag: ["All", "Web"],
  },
  {
    id: 4,
    title: "PROJECT 4",
    description: "Project 4 description",
    image: "/images/4.png",
    tag: ["All", "Mobile"],
  },
  {
    id: 5,
    title: "PROJECT 5",
    description: "Project 5 description",
    image: "/images/4.png",
    tag: ["All", "Web"],
  },
  {
    id: 6,
    title: "PROJECT 6",
    description: "Project 6 description",
    image: "/images/4.png",
    tag: ["All", "Web"],
  },
];
const ProjectsSection = () => {
    const [tag, setTag] = useState("All");
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
  
    const filteredProjects = projectsData.filter((project) =>
      project.tag.includes(tag)
    );
  
    const cardVariants = {
      initial: { y: 50, opacity: 0 },
      animate: { y: 0, opacity: 1 },
    };
  
    const handleTagChange = (newTag) => {
      setTag(newTag);
    };
  
    return (
      <section ref={ref} className="my-8 md:my-12">
        <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
          My Projects
        </h2>
        <div className="flex flex-row justify-center items-center gap-2 text-white my-6">
          <ProjectTag
            name="All"
            onClick={() => handleTagChange("All")}
            isSelected={tag === "All"}
          />
          <ProjectTag
            name="Web"
            onClick={() => handleTagChange("Web")}
            isSelected={tag === "Web"}
          />
          <ProjectTag
            name="Mobile"
            onClick={() => handleTagChange("Mobile")}
            isSelected={tag === "Mobile"}
          />
        </div>
        <ul className="grid md:grid-cols-3 gap-8 md:gap-12">
          {filteredProjects.map((project, index) => (
            <motion.li
              key={project.id}
              variants={cardVariants}
              initial="initial"
              animate={isInView ? "animate" : "initial"}
              transition={{ duration: 0.3, delay: index * 0.4 }}
            >
              <ProjectCard
                title={project.title}
                description={project.description}
                imgUrl={project.image}
                gitUrl={project.gitUrl}
                previewUrl={project.previewUrl}
              />
            </motion.li>
          ))}
        </ul>
      </section>
    );
  };
  
  export default ProjectsSection;