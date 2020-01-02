import React, { useState } from "react";
import { Map } from "./Map";
import { Fab, Modal, Paper, Typography, Grid, Button } from "@material-ui/core";

const App = () => {
  const [create, setCreate] = useState(true);
  return (
    <div style={{ height: "100%", width: "100%" }}>
      <Map mapId="map" />
      <Fab
        style={{ position: "absolute", right: "1%", bottom: "3%" }}
        variant="extended"
        color="primary"
        onClick={() => setCreate(true)}
      >
        Create
      </Fab>
      <Modal
        open={create}
        onClose={() => setCreate(false)}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <Paper
          style={{
            width: "40%",
            height: "50%",
            borderRadius: "15px"
          }}
        >
          <div
            style={{
              height: "10%",
              backgroundColor: "blue",
              color: "white",
              display: "flex",
              alignItems: "center",
              borderTopLeftRadius: "15px",
              borderTopRightRadius: "15px",
              paddingLeft: "5%"
            }}
          >
            <Typography>Share Location</Typography>
          </div>
          <div
            style={{
              margin: "5%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "center",
              height: "70%"
            }}
          >
            <Grid container spacing={10}>
              <Grid item xs={4}>
                Location Name:
              </Grid>
              <Grid item xs={5}>
                <input />
              </Grid>
            </Grid>
            <Grid container spacing={10}>
              <Grid item xs={4}>
                Location on map:
              </Grid>
              <Grid item xs={5}>
                <div style={{ height: "20vh" }}>
                  <Map mapId="smallMap" clickable />
                </div>
              </Grid>
            </Grid>
            <Grid container spacing={10}>
              <Grid item xs={4}>
                Location Type:
              </Grid>
              <Grid item xs={5}>
                <select>
                  <option>Work</option>
                  <option>Home</option>
                  <option>Other</option>
                </select>
              </Grid>
            </Grid>
            <Grid container spacing={10}>
              <Grid item xs={4}>
                Logo:
              </Grid>
              <Grid item xs={5}>
                <Button title="upload" color="primary" variant="contained">
                  Upload
                </Button>
              </Grid>
            </Grid>
          </div>
        </Paper>
      </Modal>
    </div>
  );
};

export default App;
