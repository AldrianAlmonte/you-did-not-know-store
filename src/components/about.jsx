import "./about.css";
import { useState } from "react";

const About = () => {
  const [visible, setVisible] = useState(false);

  const showEmail = () => {
    setVisible(true);
  };

  const hideEmail = () => {
    setVisible(false);
  };

  const getContent = () => {
    if (visible) {
      return (
        <div>
          <h5>aldrianalmonte02@gmail.com</h5>
          <button onClick={hideEmail} className="btn btn-primary">
            Show Info
          </button>
        </div>
      );
    } else {
      return (
        <div>
          <p>Click on the button below</p>
          <button onClick={showEmail} className="btn btn-primary">
            Show Info
          </button>
        </div>
      );
    }
  };

  return (
    <div className="about-page">
      <h2>Aldrian Almonte</h2>
      {getContent()}
      {/* visible ? <h5>aldrianalmonte02@gmail.com</h5> : <p>Click on the button below</p> */}
      {/* !visible ? <button onClick={showEmail} className="btn btn-primary">Show Info</button> : null */}
    </div>
  );
};

export default About;
