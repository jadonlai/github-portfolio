import { createContext, useState } from "react";

interface DirectoriesContextType {
  openDirectories: string[];
}

export const DirectoriesContext = createContext<DirectoriesContextType | null>(
  null,
);

const DirectoriesProvider = ({ children }: { children: React.ReactNode }) => {
  const [openDirectories, setOpenDirectories] = useState<string[]>([]);

  return (
    <DirectoriesContext.Provider value={{ openDirectories }}>
      {children}
    </DirectoriesContext.Provider>
  );
};

export default DirectoriesProvider;
