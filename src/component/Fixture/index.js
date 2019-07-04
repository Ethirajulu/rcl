import React, { Component } from "react";
import axios from "axios";
import "./fixture.css";
import ModalComponent from "./ModalComponent";

class Fixture extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      fixtures: [],
      scoreCard: null
    };
  }

  componentDidMount() {
    axios.get("./fixture.json").then(res => {
      this.setState({
        fixtures: res.data
      });
    });
  }

  handleOpen = matchNumber => {
    var fixture = this.state.fixtures.filter(fixture => {
      return fixture.match == matchNumber;
    });
    this.setState({
      scoreCard: fixture[0].scores,
      open: true
    });
  };

  handleClose = () => {
    this.setState({
      open: false
    });
  };

  render() {
    return (
      <div className="container mt-5 overflow-auto h-10">
        <h1 className="ml-10">
          <strong>Fixtures</strong>
        </h1>
        {this.state.fixtures.map(fixture => (
          <div className="card border-primary mb-3 mr-10 text-dark text-center">
            <div className="card-header">Match {fixture.match}</div>
            <div className="card-body">
              <div className="row m-2">
                <div className="col-sm-5">{fixture.team1}</div>
                <div className="col-sm-2">VS</div>
                <div className="col-sm-5">{fixture.team2}</div>
              </div>
              {fixture.winner && <div className="mt-4">{fixture.winner}</div>}
            </div>
            <div className="card-footer bg-transparent">
              {fixture.isCompleted ? (
                <button
                  className="btn btn-primary"
                  onClick={() => this.handleOpen(fixture.match)}
                >
                  Get scores
                </button>
              ) : (
                fixture.date
              )}
            </div>
          </div>
        ))}
        {this.state.scoreCard && (
          <ModalComponent
            open={this.state.open}
            handleClose={this.handleClose}
            scoreCard={this.state.scoreCard}
          />
        )}
      </div>
    );
  }
}

export default Fixture;
