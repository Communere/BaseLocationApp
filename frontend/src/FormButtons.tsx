import React from "react";
import { Button } from "@material-ui/core";

interface Props {}

export const FormButtons = (props: Props) => {
  return (
    <>
      <Button title="upload" color="secondary" variant="contained">
        Cancel
      </Button>
      <Button title="upload" color="primary" variant="contained">
        Save
      </Button>
    </>
  );
};
