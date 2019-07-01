import React from "react";
import { ChessType } from "../types/enums";
import { Chess } from "./Chess";
import "./Map.css";

interface ChessItem {
  type: ChessType;
  loaction: number;
}
interface IState {
  chess: ChessItem[];
}
export default class Map extends React.Component<{}, IState> {
  state: IState = {
    chess: [
      { type: ChessType.red, loaction: 0 },
      { type: ChessType.red, loaction: 1 },
      { type: ChessType.red, loaction: 2 },
      { type: ChessType.red, loaction: 3 },
      { type: ChessType.none, loaction: 4 },
      { type: ChessType.red, loaction: 5 },
      { type: ChessType.red, loaction: 6 },
      { type: ChessType.none, loaction: 7 },
      { type: ChessType.black, loaction: 8 }
    ]
  };
  handlClick(e: any) {
    console.log(e.target);
  }

  render() {
    const { chess } = this.state;
    return (
      <div
        className="map-wrapper"
        onClick={e => {
          this.handlClick(e);
        }}
      >
        {chess.map((item, index) => (
          <Chess type={item.type} key={index} />
        ))}
      </div>
    );
  }
}
