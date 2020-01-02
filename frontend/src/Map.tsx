import React from "react";
import * as L from "leaflet";

const TILE_URL = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";

interface Props {
  clickable?: boolean;
  mapId: string;
}

export class Map extends React.Component<Props> {
  map!: L.Map;

  initMap = () => {
    this.map = L.map(this.props.mapId, { zoomControl: !this.props.clickable });

    if (this.props.clickable) {
      this.map.on("click", e => console.log(e));
    }

    this.map.setView([53.3781, -3], 7);
    const tileUrl = TILE_URL;
    const tiles = L.tileLayer(tileUrl);
    tiles.addTo(this.map);
  };

  componentDidMount = () => {
    this.initMap();
  };

  render = () => {
    return (
      <div id={this.props.mapId} style={{ width: "100%", height: "100%" }} />
    );
  };
}
