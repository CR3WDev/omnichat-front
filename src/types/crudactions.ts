export type iButtonColor = "secondary" | "success" | "info" | "warning" | "danger" | "help";

export interface iActionType {
  onClick: () => void;
  icon: JSX.Element;
  severity: any;
  label: string;
}
