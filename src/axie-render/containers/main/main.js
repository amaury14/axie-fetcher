import React from "react";
import "./main.css";
import { connect } from "react-redux";
import AxieForm from "../../components/axie-form/axie-form";
import AxieDetails from "../../components/axie-details/axie-details";
import { fetchAxie, loadAxie } from "../../../store/axie";

const mapStateToProps = (state) => {
  return {
    id: state.id,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAxie: (id) => dispatch(fetchAxie(id)),
    loadAxie: (id) => dispatch(loadAxie(id)),
  };
};

class MainLayout extends React.Component {
  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.id !== this.props.id) {
      this.props.fetchAxie(this.props.id);
      this.props.loadAxie(this.props.id);
    }
  }

  render() {
    return (
      <div className="main-layout">
        <span className="main-title">Axie Fetcher, Details and Cards</span>
        <div className="layout">
          <div className="column flex1">
            <AxieForm className="form"></AxieForm>
            <span className="example-title">Axie Ids Examples:</span>
            <table className="main-table">
              <tr>
                <th>Id</th>
                <th>Class</th>
              </tr>
              <tr>
                <td>8773512</td>
                <td>Bird</td>
              </tr>
              <tr>
                <td>3190945</td>
                <td>Beast</td>
              </tr>
              <tr>
                <td>8748011</td>
                <td>Fish</td>
              </tr>
              <tr>
                <td>7516949</td>
                <td>Plant</td>
              </tr>
              <tr>
                <td>8407546</td>
                <td>Bug</td>
              </tr>
              <tr>
                <td>8657188</td>
                <td>Reptile</td>
              </tr>
              <tr>
                <td>8435718</td>
                <td>Terminator</td>
              </tr>
            </table>
          </div>
          <div className="column flex3">
            <AxieDetails></AxieDetails>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainLayout);
