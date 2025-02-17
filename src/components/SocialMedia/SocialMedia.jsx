import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaStackOverflow } from "react-icons/fa";
import "./socialmedia.css";

export const SocialMedia = () => {
  return (
    <div className="socialmedia">
      <a href="https://www.linkedin.com/in/xing-yin/" target="_blank">
        <FaLinkedinIn />
      </a>

      <a href="https://github.com/xingyin2024" target="_blank">
        <FaGithub />
      </a>

      <a
        href="https://stackoverflowteams.com/c/technigo/users/655/?tab=profile"
        target="_blank"
      >
        <FaStackOverflow />
      </a>
    </div>
  );
};
