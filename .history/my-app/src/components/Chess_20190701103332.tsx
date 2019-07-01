import { ChessType } from "../types/enums";
import React from "react";
interface IProps {
  type: ChessType;
}

export const Chess = (props: IProps) => {
  return <div className="chess">hello</div>;
};
