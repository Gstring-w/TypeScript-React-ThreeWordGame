import { ChessType } from "../types/enums";
import React from "react";
interface IProps {
  type: ChessType;
  ChessClick: (event, n: number) => void;
}

const Type = (type: ChessType) => {
  let result = <div className="base" />;
  if (type == ChessType.red) {
    result = <div className="red base" />;
  } else if (type == ChessType.black) {
    result = <div className="black base" />;
  }
  return result;
};

export const Chess = ({ type, ChessClick }: IProps) => {
  return (
    <div className="chess" onClick={ChessClick}>
      {Type(type)}
    </div>
  );
};
