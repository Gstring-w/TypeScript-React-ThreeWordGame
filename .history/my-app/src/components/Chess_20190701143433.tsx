import { ChessType } from "../types/enums";
import React from "react";
interface IProps {
  type: ChessType;
}

const Type = (type: ChessType) => {
  let result = <div className="base" />;
  if (type == ChessType.red) {
    result = <div className="red base" />;
  } else if (type == ChessType.black) {
    result = <div className="black base" />;
  }
  return;
};

export const Chess = ({ type }: IProps) => {
  return <div className="chess">hello</div>;
};
