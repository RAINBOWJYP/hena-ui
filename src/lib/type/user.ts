import React from "react";

export interface IProfileThumbProps {
  src: string;
  alt: string;
  onClick?: React.MouseEventHandler<HTMLImageElement>;
}
