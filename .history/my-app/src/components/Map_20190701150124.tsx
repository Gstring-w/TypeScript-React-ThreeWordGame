import React from "react";
import { ChessType } from "../types/enums";
import { Chess } from "./Chess";
import "./Map.css";
export default class Map extends React.Component {
  state = {
    chess: [
      { type: ChessType.red, loaction: 0 },
      { type: ChessType.red, loaction: 1 },
      { type: ChessType.red, loaction: 2 },
      { type: ChessType.red, loaction: 3 },
      { type: ChessType.none, loaction: 4 },
      { type: ChessType.red, loaction: 2 },
      { type: ChessType.red, loaction: 3 },
      { type: ChessType.none, loaction: 4 },
      { type: ChessType.black, loaction: 5 }
    ]
  };
  handlClick(e) {
    console.log(e.target);
  }

  render() {
    const { chess } = this.state;
    return (
      <div className="map-wrapper" onClick={this.handlClick}>
        {chess.map((item, index) => (
          <Chess type={item.type} key={index} />
        ))}
      </div>
    );
  }
}
