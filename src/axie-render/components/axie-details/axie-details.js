import React from "react";
import Loader from "react-loader-spinner";
import "./axie-details.css";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    axie: state.axie,
    loading: state.loading,
  };
};

class AxieDetails extends React.Component {
  render() {
    return (
      <div>
        {this.props.loading && (
          <div className="layout-details">
            <div className="column-details">
              <Loader
                type="TailSpin"
                color="#00BFFF"
                height={100}
                width={100}
                timeout={3000} //3 secs
              />
            </div>
          </div>
        )}
        {!!this.props.axie && !this.props.loading && (
          <div className="layout-details">
            <div className="column-details">
              <img
                className="image"
                src={this.props.axie.image}
                alt={this.props.axie.name}
              />
              <table>
                <tr>
                  <td>Id</td>
                  <td>{this.props.axie.id}</td>
                </tr>
                <tr>
                  <td>Name</td>
                  <td>{this.props.axie.name}</td>
                </tr>
                <tr>
                  <td>Class</td>
                  <td>{this.props.axie.class}</td>
                </tr>
                <tr>
                  <td>Birthdate</td>
                  <td>
                    {new Date(this.props.axie.birthDate).toLocaleString()}
                  </td>
                </tr>
              </table>
            </div>
            <div className="column-details">
              <span>Breed: {this.props.axie.breedCount}</span>
              <span>
                HP: <span className="hp">{this.props.axie.stats.hp}</span>{" "}
                Speed:{" "}
                <span className="speed">{this.props.axie.stats.speed}</span>{" "}
                Skill:{" "}
                <span className="skill">{this.props.axie.stats.skill}</span>{" "}
                Morale:{" "}
                <span className="morale">{this.props.axie.stats.morale}</span>
              </span>
              {this.props.axie.parts.length > 0 && (
              <table>
                <thead>
                <tr>
                  <th>Name</th>
                  <th>Class</th>
                  <th>Type</th>
                </tr>
                </thead>
                <tbody>
                {this.props.axie.parts.map((part, index) => (
                  <tr key={index.toString()}>
                    <td>{part.name}</td>
                    <td>{part.class}</td>
                    <td>{part.type}</td>
                  </tr>
                ))}
                </tbody>
              </table>
              )}
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default connect(mapStateToProps)(AxieDetails);
