import React from "react";
import {
  Paper,
  Typography,
  createStyles,
  WithStyles,
  withStyles
} from "@material-ui/core";
import { FormData } from "./FormData";
import { FormButtons } from "./FormButtons";

const styles = () =>
  createStyles({
    container: {
      width: "40%",
      height: "50%",
      borderRadius: "15px",
      textAlign: "right"
    },
    headerContainer: {
      height: "10%",
      backgroundColor: "blue",
      color: "white",
      display: "flex",
      alignItems: "center",
      borderTopLeftRadius: "15px",
      borderTopRightRadius: "15px",
      paddingLeft: "5%"
    }
  });

interface Props extends WithStyles {}

export const CreateLocation = withStyles(styles)((props: Props) => {
  return (
    <Paper className={props.classes.container}>
      <div className={props.classes.headerContainer}>
        <Typography>Share Location</Typography>
      </div>
      <FormData />
      <FormButtons />
    </Paper>
  );
});
