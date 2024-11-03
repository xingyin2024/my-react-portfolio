import skills from "../Libraries/skills.json";


export const SkillCard = () => {
  return (
    <>
      {skills.skills.map((item) => (
        <div className="skill-card" key={item.id}>
          <h3 className="skill-tag">{item.tag}</h3>
          <ul className="skill">
            {item.info.map((value, index) => (
              <li className="skill-info" key={index}>
                {value}
              </li>
            ))}
          </ul>          
        </div>
      ))}
    </>
  )
}
