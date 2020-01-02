import React, { useState } from "react";
import { Map } from "./Map";
import {
  Fab,
  Modal,
  WithStyles,
  createStyles,
  withStyles
} from "@material-ui/core";
import { CreateLocation } from "./CreateLocation";

const styles = () =>
  createStyles({
    container: {
      height: "100%",
      width: "100%"
    },
    fab: {
      position: "absolute",
      right: "1%",
      bottom: "3%"
    },
    modal: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  });

interface Props extends WithStyles {}

const App = withStyles(styles)((props: Props) => {
  const [create, setCreate] = useState(false);
  return (
    <div className={props.classes.container}>
      <Map mapId="map" />
      <Fab
        className={props.classes.fab}
        variant="extended"
        color="primary"
        onClick={() => setCreate(true)}
      >
        Create
      </Fab>
      <Modal
        open={create}
        onClose={() => setCreate(false)}
        className={props.classes.modal}
      >
        <CreateLocation />
      </Modal>
    </div>
  );
});

export default App;
