import PropTypes from "prop-types";
import "./button.css";
import { AiOutlineGlobal } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";

export const Button = ({ image, text, source, color }) => {
  let IconComponent = image === "Github" ? FaGithub : AiOutlineGlobal;

  return (
    <div className={`link-button ${color}`}>
      <a href={source} target="_blank">
        <div className="button-inner">
          <IconComponent />
          <p>{text}</p>
        </div>
      </a>
    </div>
  );
};

Button.propTypes = {
  image: PropTypes.oneOf(["global", "Github"]).isRequired,
  text: PropTypes.string.isRequired,
  source: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};
