import { ReactNode } from "react";

interface CrudActionsProps {
  children?: ReactNode;
}

export const CrudTableActions = ({ children }: CrudActionsProps) => {

  return (
    <div className="flex justify-content-center">
      {children}
    </div>
  );
};
