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
    minWidth: 650
  }
}));

const BowlingTable = ({ bowlingscore }) => {
  const classes = useStyles();
  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Bowler</TableCell>
            <TableCell align="right">Overs</TableCell>
            <TableCell align="right">Maiden</TableCell>
            <TableCell align="right">Runs</TableCell>
            <TableCell align="right">Wickets</TableCell>
            <TableCell align="right">Economy</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {bowlingscore.map(bowlers => (
            <TableRow key={bowlers.bowler}>
              <TableCell component="th" scope="row">
                {bowlers.bowler}
              </TableCell>
              <TableCell align="right">{bowlers.overs}</TableCell>
              <TableCell align="right">{bowlers.maiden}</TableCell>
              <TableCell align="right">{bowlers.runs}</TableCell>
              <TableCell align="right">{bowlers.wickets}</TableCell>
              <TableCell align="right">{bowlers.economy}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
};

export default BowlingTable;
