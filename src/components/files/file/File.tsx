import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Content } from "../../home";

const File = () => {
  const [copyImage, setCopyImage] = useState("/assets/copy.svg");
  const location = useLocation();
  const path = location.pathname.split("/main/")[1].split("/");
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

  return (
    <div className="w-full h-full pt-5 px-4 space-y-6 border-l-[1px] border-l-gray-border">
      <div className="h-5 flex flex-row items-center space-x-1">
        <Link to="/" className="text-blue text-base font-bold hover:underline">
          portfolio
        </Link>
        {path.map((item, index) => {
          let pathTag;
          curPath += `/${item}`;
          if (index === path.length - 1) {
            pathTag = (
              <h1 className="text-secondary text-base font-bold">{item}</h1>
            );
          } else {
            pathTag = (
              <Link
                to={curPath}
                className="text-blue text-base hover:underline"
              >
                {item}
              </Link>
            );
          }
          return (
            <div className="flex flex-row items-center space-x-1">
              <h1 className="text-gray text-base">/</h1>
              {pathTag}
            </div>
          );
        })}
        <button
          onClick={() => {
            handleCopyImage();
            navigator.clipboard.writeText(location.pathname.slice(6));
          }}
          className="w-7 h-7 rounded-md hover:bg-gray-collapsehover flex justify-center items-center"
        >
          {copyImage === "/assets/copy.svg" ? (
            <img src="/assets/copy.svg" alt="copy" className="w-4 h-4" />
          ) : (
            <img src="/assets/check.svg" alt="check" className="w-4 h-4" />
          )}
        </button>
      </div>
      <div className="w-full p-3 flex flex-row items-center justify-between rounded-md border-[1px] border-gray-border">
        <div className="flex flex-row items-center space-x-2">
          <img src="/assets/logo.png" alt="logo" className="w-5 h-5" />
          <h1 className="text-secondary text-sm font-bold">jadonlai</h1>
        </div>
      </div>
      <Content />
    </div>
  );
};

export default File;
