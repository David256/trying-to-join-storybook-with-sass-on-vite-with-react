import React from "react";

import './SpatialButton.css';

export interface SpatialButtonProps {
  value: string,
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void,
};

export function SpatialButton(props: SpatialButtonProps) {
  const {
    value,
    onClick=() => {},
  } = props;

  return (
    <button
      className="SpatialButton"
      onClick={onClick}
    >{value}</button>
  );
}