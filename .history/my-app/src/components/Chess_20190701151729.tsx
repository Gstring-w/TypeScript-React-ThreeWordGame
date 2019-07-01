import { ChessType } from "../types/enums";
import React from "react";
import "./Chess.css";
interface IProps {
  type: ChessType;
  event: (e: any) => void;
}

const Type = (type: ChessType) => {
  let result = <div className="base" />;
  if (type === ChessType.red) {
    result = (
      <div className="base">
        <div className="red" />
      </div>
    );
  } else if (type === ChessType.black) {
    result = (
      <div className="base">
        <div className="black" />
      </div>
    );
  }
  return result;
};

export const Chess = ({ type, event }: IProps) => {
  return (
    <div
      className="chess"
      onClick={e => {
        if (type == ChessType.none) {
          event(e);
        }
      }}
    >
      {Type(type)}
    </div>
  );
};
