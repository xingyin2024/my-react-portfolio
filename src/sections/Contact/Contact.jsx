import "./contact.css";
import LinkedIn from "../../assets/icon/Btn-linkedin.svg"
import GitHub from "../../assets/icon/Btn-github.svg"
import StackOverFlow from "../../assets/icon/Btn-stackoverflow.svg"
import Twitter from "../../assets/icon/Btn-twitter.svg"
import Instagram from "../../assets/icon/Btn-instagram.svg"

export const Contact = () => { 
  return (
    <section className="contact-section">
      <div className="contact-container">
        <h2 className="contact-heading">Let&apos;s Talk</h2>

        <div className="frame">
          <img src="./Me.jpg" alt="profile-picture of Xing Yin" className="image-me" />

          <div className="contact-info">
            <p>Xing Yin</p>
            <p>+46 (0)765 25 76 35</p>
            <p>xing.yin@gmail.com</p>
          </div>

          <div className="socialmedia">
            <a href="https://www.linkedin.com/in/xing-yin/" target="_blank"><img src={LinkedIn} alt="LinkedIn"></img></a>

            <a href="https://github.com/xingyin2024" target="_blank"><img src={GitHub} alt="GitHub"/></a>

            <a href="https://stackoverflowteams.com/c/technigo/users/655/?tab=profile" target="_blank"><img src={StackOverFlow} alt="StackOverflow"
            /></a>

            <a href="#" target="_blank"><img src={Twitter} alt="Twitter"
            /></a>
            
            <a href="#" target="_blank"><img src={Instagram} alt="Instagram"/></a>
          </div>
        </div>
      </div>
    </section>
  )
 }