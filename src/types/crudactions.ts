export type ButtonColor = "secondary" | "success" | "info" | "warning" | "danger" | "help";

export interface ActionType {
  onClick: () => void;
  icon: JSX.Element;
  severity: any;
  label: string;
}
