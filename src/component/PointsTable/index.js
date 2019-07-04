import React, { Component } from "react";
import axios from "axios";
import { TableComponent } from "./TableComponent";
import "./pointsTable.css";

class PointsTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      points: []
    };
  }

  componentDidMount() {
    axios.get("./pointsTable.json").then(res => {
      this.setState({
        points: res.data
      });
    });
  }

  render() {
    return (
      <div className="container mt-10 mr-16">
        <h1>Points table</h1>
        <TableComponent points={this.state.points} />
      </div>
    );
  }
}

export default PointsTable;
