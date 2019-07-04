import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing(3),
    overflowX: "auto",
    marginLeft: "0rem !important"
  },
  table: {
    minWidth: 650
  }
}));

export function TableComponent({ points }) {
  const classes = useStyles();
  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Teams</TableCell>
            <TableCell align="right">Played</TableCell>
            <TableCell align="right">Win</TableCell>
            <TableCell align="right">Lost</TableCell>
            <TableCell align="right">Draw</TableCell>
            <TableCell align="right">Points</TableCell>
            <TableCell align="right">NRR</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {points.map(point => (
            <TableRow key={point.teams}>
              <TableCell component="th" scope="row">
                {point.teams}
              </TableCell>
              <TableCell align="right">{point.played}</TableCell>
              <TableCell align="right">{point.win}</TableCell>
              <TableCell align="right">{point.lost}</TableCell>
              <TableCell align="right">{point.draw}</TableCell>
              <TableCell align="right">{point.points}</TableCell>
              <TableCell align="right">{point.nrr}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}
