import { createContext, useContext, useState } from "react";

export const PAGE_SIZE = 6;

const PaginateContext = createContext();

export default function PaginateProvider({ children }) {
  const [currPage, setCurrPage] = useState(1);

  const startIndex = (currPage - 1) * PAGE_SIZE;
  const endIndex = startIndex + PAGE_SIZE;

  return (
    <PaginateContext.Provider
      value={{ currPage, setCurrPage, startIndex, endIndex }}
    >
      {children}
    </PaginateContext.Provider>
  );
}

export function usePaginate() {
  const context = useContext(PaginateContext);
  if (context === undefined)
    throw new Error("usePaginate must be used within a UserProvider");

  return context;
}
