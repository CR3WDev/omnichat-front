import { ReactNode } from "react";

interface CrudRootProps{
  children: ReactNode,
  title: string
}
export const CrudRoot = ({children, title}:CrudRootProps) => {

  return (
    <div className="page-container flex flex-column">
      <h2 className="mx-3 mt-3 m-0">{title}</h2>
      {children}
    </div>
  );
};


