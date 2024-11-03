import "./introduction.css";
import pinWhite from "../../assets/icon/Ic-map-pin-white.svg";

export const Introduction = () => { 
  return (
    <section className="intro-section">
      <div className="intro-container">
        <div className="intro-header">
          <h3>Hi there, I am</h3>
          <h1>Xing Yin</h1>
          <h3>Creative Frontend Developer with a Background in Architecture & Accessibility</h3>
        </div>
        
        <div className="intro-image">
          <img src="./ref1.png" alt="profile-picture of project A" className="image left" />
          <img src="./ref2.png" alt="profile-picture of project B" className="image middle" />
          <img src="./ref3.png" alt="profile-picture of project C" className="image right"/>
        </div>
       
        <div className="intro-text">
          <h3><img src={pinWhite} alt="located at" className="pin-white" />
            Stockholm, Sweden
          </h3>

          <p>Xing is an exceptional developer known for her innovative solutions and exceptional coding abilities. She creates user-friendly applications and solves complex issues with ease. Her drive for excellence makes her a valuable asset to any project and a standout in the technology field.</p>  
        </div>        
      </div>  
   </section>   
  )
 }