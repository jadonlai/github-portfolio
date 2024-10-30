import { Route, Routes } from "react-router-dom";

import { Files, Home } from "./pages";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/files" element={<Files />} />
    </Routes>
  );
};

export default App;
