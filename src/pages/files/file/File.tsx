import { useLocation } from "react-router-dom";

import { DirectoriesList } from "../../../components/directorieslist";
import { structure } from "../../../constants";
import { useFile } from "../../../hooks";
import Path from "./Path";
import FileTitle from "./FileTitle";
import FileContent from "./FileContent";

const Header = () => {
  return (
    <div className="grid w-full grid-cols-3 justify-between truncate text-xs font-bold text-gray sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
      <h1>Name</h1>
      <h1 className="hidden sm:inline md:inline lg:inline">Description</h1>
      <h1 className="hidden text-right md:inline lg:inline">Timeframe</h1>
    </div>
  );
};

const File = () => {
  const { getPath, getItem } = useFile();

  const location = useLocation();
  const path = getPath(location.pathname);

  const curItem = getItem(path, structure);
  if (!curItem) {
    return;
  }

  const curParent = getItem(
    path.length > 1 ? path.slice(0, -1) : path,
    structure,
  );
  if (!curParent) {
    return;
  }

  const backItem = {
    name: "..",
    type: "folder",
    commit: "",
    date: "",
  };

  return (
    <div className="h-full min-h-screen w-full px-4 pt-5">
      <Path path={path} />
      <FileTitle path={path} commit={curItem.commit} date={curItem.date} />
      {curItem.type === "folder" || path[0] === "/main" ? (
        <DirectoriesList
          topItem={<Header />}
          topItemStyles="h-[40px] px-4"
          items={
            path[0] === "/main" ? curItem : [backItem, ...curItem.contents]
          }
          basePath={path[0] === "/main" ? "" : path.join("/")}
        />
      ) : (
        <FileContent
          curItem={curItem}
          curParent={curParent}
          path={location.pathname}
        />
      )}
    </div>
  );
};

export default File;
