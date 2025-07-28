import { createContext, useContext, useState } from "react";

const TechnologyContext = createContext();

function TechnologyProvider({ children }) {
  const [filterTechnology, setFilterTechnology] = useState("");

  return (
    <TechnologyContext.Provider
      value={{ filterTechnology, setFilterTechnology }}
    >
      {children}
    </TechnologyContext.Provider>
  );
}

export function useTechnologyFilter() {
  const context = useContext(TechnologyContext);
  if (!context) {
    throw new Error(
      "useTechnologyFilter must be used within a TechnologyProvider",
    );
  }
  return context;
}

export default TechnologyProvider;
