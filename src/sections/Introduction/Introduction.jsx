import "./introduction.css";
import pinWhite from "../../assets/icon/Ic-map-pin-white.svg";

export const Introduction = () => {
  return (
    <section className="intro-section">
      <div className="intro-container">
        <div className="intro-header">
          <h3>Hi there, I am</h3>
          <h1>Xing Yin</h1>
          <h3>
            Passionate Fullstack Developer with a Background in Architecture
          </h3>
        </div>

        <div className="intro-image">
          <img
            src="./ref1.png"
            alt="profile-picture of project A"
            className="image left"
          />
          <img
            src="./ref2.png"
            alt="profile-picture of project B"
            className="image middle"
          />
          <img
            src="./ref3.png"
            alt="profile-picture of project C"
            className="image right"
          />
        </div>

        <div className="intro-text">
          <h3>
            <img src={pinWhite} alt="located at" className="pin-white" />
            Stockholm, Sweden
          </h3>

          <p>
            Xing is a Fullstak Developer with growing expertise in JavaScript,
            React, TypeScript, and Node.js. She is currently finishing a Web
            Developer Bootcamp, which has helped her build proficiency in
            modern, responsive web applications. Having worked 7 years as an
            Architect, she is eager to merge design principles with hands-on
            coding. Focused on delivering engaging user experiences, Xing values
            continuous learning and looks forward to growing within a supportive
            team.
          </p>
        </div>
      </div>
    </section>
  );
};
