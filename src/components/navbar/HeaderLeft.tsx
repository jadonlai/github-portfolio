import { useState } from "react";
import { Button } from "../interactables";

const HeaderLeft = () => {
  const [mode, setMode] = useState(
    document.body.classList.contains("dark") ? "dark" : "light"
  );

  return (
    <div className="flex flex-row space-x-2">
      {/* <Button
        onClick={async () => {
          const newMode = mode === "dark" ? "light" : "dark";
          setMode(newMode);
          document.body.classList.replace(mode, newMode);
        }}
        imagePath={`/assets/${mode}.svg`}
        imageAltText={mode}
        imageStyles="w-4 h-4"
        buttonStyles="px-1.5 bg-primary-100 mr-2"
      /> */}
      <img src="/assets/logo.png" alt="logo" className="w-8 h-8" />
      <div className="ml-4 flex flex-row items-center">
        <button
          onClick={() => {
            window.open("https://github.com/jadonlai", "_blank");
          }}
          className="hover:bg-primary-300 px-2 py-1.5 rounded-md"
        >
          <h1 className="text-secondary text-sm">jadonlai</h1>
        </button>
        <h1 className="text-gray text-sm">/</h1>
        <button
          onClick={() => {
            window.location.reload();
          }}
          className="hover:bg-primary-300 px-2 py-1.5 rounded-md"
        >
          <h1 className="text-secondary text-sm font-bold">portfolio</h1>
        </button>
      </div>
    </div>
  );
};

export default HeaderLeft;
