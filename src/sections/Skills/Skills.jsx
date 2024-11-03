import "./skills.css";
import { SkillCard } from "../../components/SkillCard";

export const Skills = () => { 
  return (
    <section className="skills-section">
      <h2 className="skills-heading">Skills</h2>
      <div className="skills-container">
        <SkillCard />
      </div>
    </section>    
  )
 }