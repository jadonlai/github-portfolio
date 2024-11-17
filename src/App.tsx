import { Route, Routes } from "react-router-dom";
import { useEffect } from "react";

import { Files, Home } from "./pages";
import { File } from "./pages/files";
import { SidebarProvider } from "./contexts/SidebarContext";

const App = () => {
  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.add("light");
    }
  }, []);

  return (
    <SidebarProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/main" element={<Files />}>
          <Route index element={<File />} />
          <Route path="*" element={<File />} />
        </Route>
      </Routes>
    </SidebarProvider>
  );
};

export default App;
