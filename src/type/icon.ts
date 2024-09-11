import { SVGProps } from "react";

export interface IconProps extends SVGProps<SVGSVGElement> {
  width?: string | number;
  height?: string | number;
  className?: string | undefined;
  fill?: string | undefined;
}
