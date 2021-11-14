import React from "react";
import "./energy-counter.css";
import { connect } from "react-redux";
import {
  incrementEnergy,
  decrementEnergy,
  incrementCards,
  decrementCards,
  nextRound,
  newGame,
} from "../../../store/axie";

const mapStateToProps = (state) => {
  return {
    round: state.round,
    energy: state.energy,
    cards: state.cards,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    incrementEnergy: () => dispatch(incrementEnergy()),
    decrementEnergy: () => dispatch(decrementEnergy()),
    incrementCards: () => dispatch(incrementCards()),
    decrementCards: () => dispatch(decrementCards()),
    nextRound: () => dispatch(nextRound()),
    newGame: () => dispatch(newGame()),
  };
};

class EnergyCounter extends React.Component {
  _handleKeyDown = (event) => {
    switch (event.key) {
      case 'Enter':
        this.props.nextRound();
        break;
      case '+':
        this.props.incrementEnergy();
        break;
      case '-':
        this.props.decrementEnergy();
        break;
      case '0':
        this.props.newGame();
        break;
      default:
        break;
    }
  };

  componentDidMount() {
    document.addEventListener("keydown", this._handleKeyDown);
  }

  render() {
    return (
      <div className="container">
        <div className="counter-components">
          <h2>
            Round <span>{this.props.round}</span>
          </h2>
          <div className="options-wrapper">
            <div className="element-container">
              <button
                className="minus-button"
                title="Deduct Energy"
                onClick={() => this.props.decrementEnergy()}
              >
                -
              </button>
            </div>
            <div className="energy-container">
              <h3 className="energy-title">Energy Count</h3>
              <h3>{this.props.energy} / 10</h3>
            </div>
            <div className="element-container">
              <button
                className="plus-button"
                title="Add Energy"
                onClick={() => this.props.incrementEnergy()}
              >
                +
              </button>
            </div>
          </div>
          <div className="options-wrapper">
            <div className="element-container">
              <button
                className="minus-button"
                title="Deduct Card"
                onClick={() => this.props.decrementCards()}
              >
                -
              </button>
            </div>
            <div className="energy-container">
              <h3>Card Count</h3>
              <h3>{this.props.cards}</h3>
            </div>
            <div className="element-container">
              <button
                className="plus-button"
                title="Add Card"
                onClick={() => this.props.incrementCards()}
              >
                +
              </button>
            </div>
          </div>
          <div className="options-wrapper">
            <div className="element-container">
              <button
                className="end-button"
                title="End Turn"
                onClick={() => this.props.nextRound()}
              >
                End Turn
              </button>
            </div>
            <div className="element-container">
              <button
                className="reset-button"
                title="New Game"
                onClick={() => this.props.newGame()}
              >
                New Game
              </button>
            </div>
          </div>
          <div className="element-container">
            <span id="shortcut-trigger">
              <i className="fas fa-keyboard"></i> Shortcuts
            </span>
            <div>
              <ul>
                <li className="shortcut-li">"+" to Add energy</li>
                <li className="shortcut-li">"-" to Deduct energy</li>
                <li className="shortcut-li">"Enter" to End Turn</li>
                <li className="shortcut-li">"0" to Reset</li>
              </ul>
              <small>
                These shortcuts are only applicable when accessed via Laptop or
                PC keyboard
              </small>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EnergyCounter);
