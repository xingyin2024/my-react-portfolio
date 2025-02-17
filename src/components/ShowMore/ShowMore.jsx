import PropTypes from "prop-types";
import { BiChevronsDown } from "react-icons/bi";
import { BiChevronsUp } from "react-icons/bi";
import "./showmore.css";

export const ShowMore = ({ showAll, toggleShowAll }) => {
  return (
    <button className="show-more-button" onClick={toggleShowAll}>
      {showAll ? <BiChevronsUp /> : <BiChevronsDown />}
      {showAll ? "Show less" : "Show more"}
    </button>
  );
};

ShowMore.propTypes = {
  showAll: PropTypes.bool.isRequired,
  toggleShowAll: PropTypes.func.isRequired,
};
