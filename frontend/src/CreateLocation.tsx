import React from "react";
import {
  Paper,
  Typography,
  Grid,
  Button,
  Select,
  MenuItem,
  TextField,
  createStyles,
  WithStyles,
  withStyles
} from "@material-ui/core";
import { Map } from "./Map";

const styles = () =>
  createStyles({
    container: {
      width: "40%",
      height: "60%",
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
    },
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

export const CreateLocation = withStyles(styles)((props: Props) => {
  return (
    <Paper className={props.classes.container}>
      <div className={props.classes.headerContainer}>
        <Typography>Share Location</Typography>
      </div>
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
        <Grid container className={props.classes.rowContainer}>
          <Grid item xs={4}>
            Logo:
          </Grid>
          <Grid item xs={6}>
            <Button title="upload" color="primary" variant="contained">
              Upload
            </Button>
          </Grid>
        </Grid>
      </div>
      <Button title="upload" color="secondary" variant="contained">
        Cancel
      </Button>
      <Button title="upload" color="primary" variant="contained">
        Save
      </Button>
    </Paper>
  );
});
