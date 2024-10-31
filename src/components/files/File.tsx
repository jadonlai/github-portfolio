import { useLocation } from "react-router-dom";

const File = () => {
  const location = useLocation();
  const path = location.pathname.split("/main/")[1];

  return <div className="text-secondary">File {path}</div>;
};

export default File;
