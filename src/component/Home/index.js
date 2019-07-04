import React, { Component } from "react";
import axios from "axios";
import "./home.css";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { timer: null, homeData: null };
  }

  componentDidMount = () => {
    axios.get("./home.json").then(res => {
      this.setState({
        homeData: res.data
      });
    });
    var countDownDate = new Date("June 27, 2019 15:30:00");
    var x = setInterval(() => {
      var now = new Date().getTime();

      var distance = countDownDate - now;

      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);

      this.setState({
        timer: days + "d " + hours + "h " + minutes + "m " + seconds + "s "
      });

      if (distance < 0) {
        clearInterval(x);
        this.setState({
          timer: "Tourment Started"
        });
      }
    }, 1000);
  };

  render() {
    return (
      <div className="container mt-8">
        <div className="row">
          <div className="offset-md-4 col-md-4">
            <p className="ml-6">Upcoming match</p>
            {this.state.homeData ? (
              <div className="row border rounded p-2 transparent">
                <div className="row">
                  <div className="col-sm-5 text-center f-1 mr-2">
                    {this.state.homeData.home.opponent1}
                  </div>
                  <div className="col-sm-1 text-center pt-6">vs</div>
                  <div className="col-sm-5 text-center f-1 pt-4 ml-3">
                    {this.state.homeData.home.opponent2}
                  </div>
                </div>
                <div className="row mt-2">
                  <div className="col-12 ml-7">
                    {this.state.homeData.home.date}
                  </div>
                </div>
              </div>
            ) : (
              ""
            )}
            <div className="mask rgba-black-light d-flex justify-content-center align-items-center">
              <div className="text-center white-text mx-5 wow fadeIn">
                <h4 className="mt-6 mb-4">
                  <strong>REVIVE CRICKET LEAGUE</strong>
                </h4>

                <p id="time-counter" className="border-light my-4">
                  {this.state.timer}
                </p>
              </div>
            </div>
          </div>
        </div>
        {this.state.homeData ? (
          <div className="card-deck mt-6">
            <div className="card text-center transparent">
              <div className="card-header">
                <strong>Most valuable player</strong>
              </div>
              <div className="card-body">
                <h5 className="card-title mt-3">
                  {this.state.homeData.home.mvp.name}
                </h5>
                <p className="card-text">
                  <strong>Points: </strong>
                  {this.state.homeData.home.mvp.points}
                </p>
              </div>
              <div className="card-footer">
                <strong>{this.state.homeData.home.mvp.team}</strong>
              </div>
            </div>
            <div className="card text-center transparent">
              <div className="card-header">
                <strong>Most Runs</strong>
              </div>
              <div className="card-body">
                <h5 className="card-title mt-3">
                  {this.state.homeData.home.mr.name}
                </h5>
                <p className="card-text">
                  <strong>Runs: </strong>
                  {this.state.homeData.home.mr.runs}
                </p>
              </div>
              <div className="card-footer">
                <strong>{this.state.homeData.home.mr.team}</strong>
              </div>
            </div>
            <div className="card text-center transparent">
              <div className="card-header">
                <strong>Most wickets</strong>
              </div>
              <div className="card-body">
                <h5 className="card-title mt-3">
                  {this.state.homeData.home.mw.name}
                </h5>
                <p className="card-text">
                  <strong>Wickets: </strong>
                  {this.state.homeData.home.mw.wickets}
                </p>
              </div>
              <div className="card-footer">
                <strong>{this.state.homeData.home.mvp.team}</strong>
              </div>
            </div>
            <div className="card text-center transparent">
              <div className="card-header">
                <strong>Fair play award</strong>
              </div>
              <div className="card-body">
                <h5 className="card-title mt-3">
                  {this.state.homeData.home.fairplay.name}
                </h5>
                <p className="card-text">
                  <strong>Points: </strong>
                  {this.state.homeData.home.fairplay.points}
                </p>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default Home;
