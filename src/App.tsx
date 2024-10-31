import { Route, Routes } from "react-router-dom";

import { Files, Home } from "./pages";
import File from "./components/files/file/File";
import { useEffect } from "react";

const App = () => {
  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.add("light");
    }
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/main" element={<Files />}>
        <Route path="*" element={<File />} />
      </Route>
    </Routes>
  );
};

export default App;
