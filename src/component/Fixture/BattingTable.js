import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing(3),
    overflowX: "auto",
    marginLeft: "0rem !important"
  },
  table: {
    minWidth: 700
  }
}));

const BattingTable = props => {
  const classes = useStyles();
  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Player</TableCell>
            <TableCell align="right">Out/Not Out</TableCell>
            <TableCell align="right">Runs</TableCell>
            <TableCell align="right">Balls</TableCell>
            <TableCell align="right">4's</TableCell>
            <TableCell align="right">6's</TableCell>
            <TableCell align="right">SR</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.battingscore.map(playerData => (
            <TableRow key={playerData.player}>
              <TableCell>{playerData.player}</TableCell>
              <TableCell align="right">{playerData.status}</TableCell>
              <TableCell align="right">{playerData.runs}</TableCell>
              <TableCell align="right">{playerData.balls}</TableCell>
              <TableCell align="right">{playerData.fours}</TableCell>
              <TableCell align="right">{playerData.sixes}</TableCell>
              <TableCell align="right">{playerData.sr}</TableCell>
            </TableRow>
          ))}

          <TableRow>
            <TableCell rowSpan={12} />
            <TableCell colSpan={4}>Extras</TableCell>
            <TableCell align="right">{props.extras}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell colSpan={4}>Wickets</TableCell>
            <TableCell align="right">{props.wickets}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell colSpan={4}>Total runs</TableCell>
            <TableCell align="right">{props.totalruns}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Paper>
  );
};

export default BattingTable;
