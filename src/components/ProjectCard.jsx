import projects from "../Libraries/projects.json";
import { Button } from "./Button/Button";
import { useState } from "react";
import { ShowMore } from "./ShowMore/ShowMore";

export const ProjectCard = () => {
  // State to toggle the show more button
  const [showAll, setShowAll] = useState(false);

  // Function to toggle the show more button
  const toggleShowAll = () => {
    setShowAll((prevState) => !prevState);
  };

  // If showAll is false, only show the first 5 projects
  const projectsToShow = showAll
    ? projects.projects
    : projects.projects.slice(0, 5);

  return (
    <>
      {projectsToShow.map((item) => (
        <div className="project-card" key={item.id}>
          <div className="image-container">
            <a href={item.global} target="_blank">
              <img className="project-image" src={item.image} alt={item.name} />
            </a>
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

      {/* Show the toggle button only if there are more than 5 projects */}
      {projects.projects.length > 5 && (
        <ShowMore showAll={showAll} toggleShowAll={toggleShowAll} />
      )}
    </>
  );
};
