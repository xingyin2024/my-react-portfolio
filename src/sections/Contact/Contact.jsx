import "./contact.css";
import { SocialMedia } from "../../components/SocialMedia/SocialMedia";

export const Contact = () => {
  return (
    <section className="contact-section">
      <div className="contact-container">
        <h2 className="contact-heading">Let&apos;s Talk</h2>

        <div className="frame">
          <img
            src="./Me.jpg"
            alt="profile-picture of Xing Yin"
            className="image-me"
          />

          <div className="contact-info">
            <p>Xing Yin</p>
            <p>+46 (0)765 25 76 35</p>
            <p>xing.yin@gmail.com</p>
          </div>

          <SocialMedia />
        </div>
      </div>
    </section>
  );
};
