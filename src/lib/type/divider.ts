export interface DividerClasses {
  horizontal: string;
  vertical: string;
  middle: string;
  full: string;
}

export type DividerClassesKey = keyof DividerClasses;

export interface DividerProps {
  orientation?: "horizontal" | "vertical";
  variant?: "middle" | "full";
}
