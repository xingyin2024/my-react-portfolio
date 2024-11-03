import projects from "../Libraries/projects.json";
import { Button } from "./Button/Button"


export const ProjectCard = () => {

  return (
    <>
      {projects.projects.map((item) => (
        <div className="project-card" key={item.id}>
          <div className="image-container">
            <a href={item.global} target="_blank">
              <img className="project-image" src={item.image} alt={item.name} /></a>
          </div>
          
          <div className="project-info">
            <ul className="tags">
              {item.tags.map((tag, index) => (
                <li className="tag" key={index}>
                  {tag}
                </li>
              ))}
            </ul>
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            
            <div className="buttons">
              <Button
                className="button"
                source={item.global}
                image="global"
                text="Live demo"
                color="grey"
              />
              <Button
                className="button"
                source={item.github}
                image="Github"
                text="View the code"
                color="grey"
              />
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
