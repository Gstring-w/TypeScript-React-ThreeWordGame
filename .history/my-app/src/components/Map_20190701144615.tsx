import React from "react";
import { ChessType } from "../types/enums";
export default class Map extends React.Component {
  state = {
    chess: [
      { type: ChessType.red, loaction: 0 },
      { type: ChessType.red, loaction: 1 },
      { type: ChessType.red, loaction: 2 },
      { type: ChessType.red, loaction: 3 }
    ]
  };

  render() {
    return <div className="map-wrapper" />;
  }
}
