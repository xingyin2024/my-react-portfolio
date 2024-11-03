import PropTypes from 'prop-types';
import "./Button.css";
import global from "../../assets/icon/Ic-Web.svg";
import github from "../../assets/icon/Ic-Github.svg";

export const Button = ({ image, text, source, color }) => {
  let icon = image === "Github" ? github : global;
  
  return (
    <div className={`link-button ${color}`}>
      <a href={source} target="_blank">
        <div className="button-inner">
          <img src={icon} alt={`${image} icon`} />
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
 
