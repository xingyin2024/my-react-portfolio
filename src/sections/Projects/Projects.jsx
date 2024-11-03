import "./projects.css";
import { ProjectCard } from "../../components/ProjectCard";

export const Projects = () => { 
  return (
    <section className="project-section">
      <div className="projects-container">
        <h2 className="projects-heading">Featured Projects</h2>
        <ProjectCard />
      </div>
    </section>    
  )
 }