import { createContext, useContext } from "react";

interface CookieContextInterface {
  cookies: string[];
  searchValue: string;
  setSearchValue: (value: string) => void;
}

const CookieContext = createContext<CookieContextInterface | undefined>(
  undefined,
);

export const useCookieContext = () => {
  const context = useContext(CookieContext);
  if (context === undefined) {
    throw new Error("useCookieContext must be used within a CookieProvider");
  }
  return context;
};

export default CookieContext;
