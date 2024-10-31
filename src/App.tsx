import { Route, Routes } from "react-router-dom";

import { Files, Home } from "./pages";
import File from "./components/files/file/File";

const App = () => {
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
