import React, { Component } from "react";
import axios from "axios";
import "./team.scss";

class Team extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
      title: null,
      teams: []
    };
  }

  componentDidMount() {
    axios.get("./team.json").then(res => {
      this.setState({
        teams: res.data
      });
    });
  }

  onContentClick = team => {
    var title = document.getElementById(team).parentElement;
    var stripClose = document.getElementById("strip__close");
    if (!this.state.expanded) {
      title.classList.add("strips__strip--expanded");
      stripClose.classList.add("strip__close--show");
      this.setState({
        expanded: true,
        title
      });
    }
  };

  onCloseClick = () => {
    var stripClose = document.getElementById("strip__close");
    if (this.state.expanded) {
      this.state.title.classList.remove("strips__strip--expanded");
      stripClose.classList.remove("strip__close--show");
      this.setState({
        expanded: false,
        title: null
      });
    }
  };

  render() {
    return (
      <section className="strips">
        {this.state.teams.map(team => (
          <article className="strips__strip">
            <div
              id={team.teamName}
              className="strip__content"
              onClick={() => this.onContentClick(team.teamName)}
            >
              <h1 className="strip__title" data-name="Lorem">
                {team.teamName}
              </h1>
              <div className="strip__inner-text">
                <h2>{team.teamName} Squad</h2>
                <div className="card-columns">
                  {team.squad.map(player => (
                    <div className="card">
                      <div className="card-body">
                        <h5 className="card-title">{player.name}</h5>
                        <p className="card-text">{player.role}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </article>
        ))}
        <i
          id="strip__close"
          className="fa fa-times strip__close"
          onClick={this.onCloseClick}
        />
      </section>
    );
  }
}

export default Team;
