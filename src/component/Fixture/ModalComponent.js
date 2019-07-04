import React from "react";
import { withStyles } from "@material-ui/core/styles";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import BattingTable from "./BattingTable";
import BowlingTable from "./BowlingTable";

const TabContainer = ({ children, dir }) => {
  return (
    <Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
      {children}
    </Typography>
  );
};

const styles = theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(2)
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500]
  }
});

const DialogTitle = withStyles(styles)(props => {
  const { children, classes, onClose } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="Close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const ModalComponent = props => {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  function handleChangeIndex(index) {
    setValue(index);
  }
  return (
    <Dialog
      onClose={props.handleClose}
      aria-labelledby="simple-dialog-title"
      open={props.open}
    >
      <DialogTitle id="simple-dialog-title" onClose={props.handleClose}>
        Score card
      </DialogTitle>
      <DialogContent
        style={{
          maxHeight: "60rem !important",
          overflow: "auto"
        }}
      >
        <AppBar position="static" color="default">
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="fullWidth"
          >
            <Tab label={props.scoreCard.team1.name} />
            <Tab label={props.scoreCard.team2.name} />
          </Tabs>
        </AppBar>
        <SwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={value}
          onChangeIndex={handleChangeIndex}
        >
          <TabContainer dir={theme.direction}>
            <p>Batting</p>
            <BattingTable
              battingscore={props.scoreCard.team1.battingscore}
              extras={props.scoreCard.team1.extras}
              wickets={props.scoreCard.team1.wickets}
              totalruns={props.scoreCard.team1.totalruns}
            />
            <p className="mt-3">Bowling</p>
            <BowlingTable bowlingscore={props.scoreCard.team1.bowlingscore} />
          </TabContainer>
          <TabContainer dir={theme.direction}>
            <p>Batting</p>
            <BattingTable
              battingscore={props.scoreCard.team2.battingscore}
              extras={props.scoreCard.team2.extras}
              wickets={props.scoreCard.team2.wickets}
              totalruns={props.scoreCard.team2.totalruns}
            />
            <p className="mt-3">Bowling</p>
            <BowlingTable bowlingscore={props.scoreCard.team2.bowlingscore} />
          </TabContainer>
        </SwipeableViews>
      </DialogContent>
      <DialogActions />
    </Dialog>
  );
};

export default ModalComponent;
