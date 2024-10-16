import Footer from "../footer/Footer";
import Header from "../header/Header";
import "../aboutUs/about.css";

const About = () => {
  return (
    <div className="about_image">
      <Header></Header>
      {/* About US */}
      <div>
        <div className="about">
          <a href="">About Us</a>
        </div>
      </div>

      {/* Image */}
      <div className="img-1">{/* Image content goes here */}</div>

      {/* OUR TEAM */}
      <div className="ourTeam">
        <div className="what"> OUR TEAM </div>
      </div>

      <div className="member-name"> Shripad Dahale</div>

      {/* Description */}
      <div className="what"> What We Do </div>

      <p className="text">
        Cost Prediction: Our team is actively engaged in the field of cost
        prediction, utilizing advanced data analytics and machine learning
        techniques.
      </p>

      <p className="text">
        Crop Information: At present, we are dedicated to enhancing our
        capabilities in providing comprehensive crop information.
      </p>
      <p className="text">
        Query Form:Our team is focused on creating a user-friendly interface
        that allows seamless submission and processing of queries through
        E-mails.
      </p>
    </div>
  );
};

export default About;
