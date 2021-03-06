import React from "react";
import { ChessType } from "../types/enums";
import { Chess } from "./Chess";
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
    const { chess } = this.state;
    return (
      <div className="map-wrapper">
        {chess.map((item, index) => (
          <Chess type={item.type} key={index} />
        ))}
      </div>
    );
  }
}
