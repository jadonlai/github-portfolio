import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import { DirectoriesList } from "../../../components/directorieslist";
import { structure } from "../../../constants";
import Pdf from "./filetypes/Pdf";

const Header = () => {
  return (
    <div
      style={{
        gridTemplateColumns: "1fr 1.5fr 1fr",
      }}
      className="grid w-full grid-cols-3 justify-between truncate text-xs font-bold text-gray"
    >
      <h1>Name</h1>
      <h1>Description</h1>
      <h1 className="text-right">Timeframe</h1>
    </div>
  );
};

const File = () => {
  const [copyImage, setCopyImage] = useState("/assets/copy.svg");
  const location = useLocation();
  const headerHeight = 42.5;

  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });

  useEffect(() => {
    function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  let path = [location.pathname];
  if (path[0] !== "/main") {
    path = location.pathname.split("/main/")[1].split("/");
  }
  let curPath = "/main";

  const handleCopyImage = () => {
    setCopyImage("/assets/check.svg");
    const timeoutId = setTimeout(() => {
      setCopyImage("/assets/copy.svg");
    }, 3000);

    return () => {
      clearTimeout(timeoutId);
    };
  };

  const getItem = (path: string[], structure: any) => {
    if (path[0] === "/main") {
      return structure;
    }

    if (path.length === 1) {
      return structure.find((item: { name: string }) => item.name === path[0]);
    }

    const curPath = path[0];
    const remainingPath = path.slice(1);

    return getItem(
      remainingPath,
      structure.find((item: { name: string }) => item.name === curPath)
        ?.contents,
    );
  };

  const curItem = getItem(path, structure);
  if (!curItem) {
    return;
  }

  const backItem = {
    name: "..",
    type: "folder",
    commit: "",
    date: "",
  };

  return (
    <div className="h-full min-h-screen w-full border-l-[1px] border-l-gray-border px-4 pt-5">
      <div className="mb-6 flex h-5 flex-row items-center space-x-1">
        <Link to="/" className="text-base font-bold text-blue hover:underline">
          portfolio
        </Link>
        {path[0] === "/main" ? (
          <h1 className="text-base text-gray">/</h1>
        ) : (
          <div className="flex flex-row items-center space-x-1">
            {path.map((item, index) => {
              let pathTag;
              curPath += `/${item}`;
              if (index === path.length - 1) {
                pathTag = (
                  <h1 className="text-base font-bold text-secondary">{item}</h1>
                );
              } else {
                pathTag = (
                  <Link
                    to={curPath}
                    className="text-base text-blue hover:underline"
                  >
                    {item}
                  </Link>
                );
              }
              return (
                <div
                  key={curPath}
                  className="flex flex-row items-center space-x-1"
                >
                  <h1 className="text-base text-gray">/</h1>
                  {pathTag}
                </div>
              );
            })}
            <button
              onClick={() => {
                handleCopyImage();
                navigator.clipboard.writeText(location.pathname.slice(6));
              }}
              className="flex size-7 items-center justify-center rounded-md hover:bg-gray-collapsehover"
            >
              {copyImage === "/assets/copy.svg" ? (
                <img src="/assets/copy.svg" alt="copy" className="size-4" />
              ) : (
                <img src="/assets/check.svg" alt="check" className="size-4" />
              )}
            </button>
          </div>
        )}
      </div>
      <div className="flex w-full flex-row items-center justify-between rounded-md border-[1px] border-gray-border p-3">
        <div className="flex flex-row items-center space-x-2">
          <img src="/assets/logo.png" alt="logo" className="size-5" />
          <h1 className="text-sm font-bold text-secondary">jadonlai</h1>
          <h1 className="text-sm text-gray">
            {path[0] === "/main" ? "initial commit" : curItem.commit}
          </h1>
        </div>
      </div>
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
        <div className={`mb-10 mt-4 h-[${dimensions.height}px]`}>
          <ul className="size-full divide-y-[1px] divide-gray-border rounded-md border-[1px] border-gray-border">
            <li
              key={0}
              className={`flex h-[${headerHeight}px] flex-row items-center rounded-t-md bg-primary-200 px-3`}
            ></li>
            <Pdf
              key={1}
              filePath={"/Resume.pdf"}
              height={dimensions.height - headerHeight}
            />
          </ul>
        </div>
      )}
    </div>
  );
};

export default File;
