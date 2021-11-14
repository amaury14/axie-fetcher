import React from "react";
import "./about.css";

class About extends React.Component {
  render() {
    return (
      <div className="container">
        This small web was created to use some of the features of React.
        <div>
          Features Used:
          <ul>
            <li className="shortcut-li">Redux for state management</li>
            <li className="shortcut-li">React Router for routes handling</li>
            <li className="shortcut-li">React Loader Spinner for the loading behavior on Axies load</li>
            <li className="shortcut-li">Axios to fetch Axie detials</li>
            <li className="shortcut-li">React functional component</li>
            <li className="shortcut-li">React class component</li>
          </ul>
          <small>
            Created by Amaury Chong Rodríguez. <a className="email-to" href="mailto: amaurychong@gmail.com">Send Email</a> <a className="email-to" href="https://www.linkedin.com/in/amaury-chong-rodr%C3%ADguez-ab3633163/">LinkedIn</a>
          </small>
        </div>
      </div>
    );
  }
}

export default About;
