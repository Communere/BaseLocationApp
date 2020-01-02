import React from "react";
import {
  WithStyles,
  createStyles,
  withStyles,
  Grid,
  TextField,
  Select,
  MenuItem,
  Button
} from "@material-ui/core";
import { Map } from "./Map";

const styles = () =>
  createStyles({
    formContainer: {
      margin: "5%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      alignItems: "center",
      height: "80%",
      textAlign: "left"
    },
    rowContainer: {
      display: "flex",
      alignItems: "center"
    }
  });

interface Props extends WithStyles {}

export const FormData = withStyles(styles)((props: Props) => {
  return (
    <div className={props.classes.formContainer}>
      <Grid container className={props.classes.rowContainer}>
        <Grid item xs={4}>
          Location Name:
        </Grid>
        <Grid item xs={6}>
          <TextField label="Location Name" variant="outlined" />
        </Grid>
      </Grid>
      <Grid container className={props.classes.rowContainer}>
        <Grid item xs={4}>
          Location on map:
        </Grid>
        <Grid item xs={6}>
          <div style={{ height: "20vh" }}>
            <Map mapId="smallMap" clickable />
          </div>
        </Grid>
      </Grid>
      <Grid container className={props.classes.rowContainer}>
        <Grid item xs={4}>
          Location Type:
        </Grid>
        <Grid item xs={6}>
          <Select style={{ width: "100%" }}>
            <MenuItem>Work</MenuItem>
            <MenuItem>Home</MenuItem>
            <MenuItem>Other</MenuItem>
          </Select>
        </Grid>
      </Grid>
    </div>
  );
});
