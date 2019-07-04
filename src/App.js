import React from "react";
import "./App.css";
import Home from "./component/Home";
import Team from "./component/Team";
import Fixture from "./component/Fixture";
import PointsTable from "./component/PointsTable";
import homeVideo from "../src/winning-shot.mp4";

function App() {
  return (
    <div className="ct" id="t1">
      <div className="ct" id="t2">
        <div className="ct" id="t3">
          <div className="ct" id="t4">
            <div className="ct" id="t5">
              <ul id="menu">
                <a href="#t1">
                  <li className="icon fa fa-home  " id="uno" />
                </a>
                <a href="#t2">
                  <li className="icon fa fa-users" id="dos" />
                </a>
                <a href="#t3">
                  <li className="icon fa fa-calendar" id="tres" />
                </a>
                <a href="#t4">
                  <li className="icon fa fa-calendar-check-o " id="cuatro" />
                </a>
                {/* <a href="#t5">
                  <li className="icon fa fa-plus-circle" id="cinco" />
                </a> */}
              </ul>
              <div className="page" id="p1">
                <video
                  className="video-intro"
                  poster="https://mdbootstrap.com/img/Photos/Others/background.jpg"
                  playsInline
                  autoPlay
                  muted
                  loop
                >
                  <source src={homeVideo} type="video/mp4" />
                </video>
                <Home />
              </div>
              <div className="page" id="p2">
                <Team />
              </div>
              <div className="page" id="p3">
                <Fixture />
              </div>
              <div className="page" id="p4">
                <PointsTable />
              </div>
              <div className="page" id="p5">
                <section className="icon fa fa-plus-circle">
                  <span className="title">More</span>
                  <p className="hint">
                    <span>You love one page & CSS only stuff? </span>
                    <br />
                    <a
                      href="https://codepen.io/hrtzt/details/pgXMYb/"
                      target="_blank"
                    >
                      check this pen "Pure CSS One page vertical navigation"
                    </a>
                  </p>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
