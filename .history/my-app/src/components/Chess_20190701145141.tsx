import { ChessType } from "../types/enums";
import React from "react";
import "./Chess.css";
interface IProps {
  type: ChessType;
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

export const Chess = ({ type }: IProps) => {
  return <div className="chess">{Type(type)}</div>;
};
