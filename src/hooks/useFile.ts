import { useEffect, useState } from "react";

const useFile = () => {
  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });
  const [copyImage, setCopyImage] = useState("/assets/copy.svg");
  const [fileContents, setFileContents] = useState<string | null>(null);

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
  }, []);

  const getPath = (path: string) => {
    if (path[0] === "/main") {
      return [path];
    }

    return location.pathname.split("/main/")[1].split("/");
  };

  const copyImageClick = () => {
    const handleCopyImage = () => {
      setCopyImage("/assets/check.svg");
      const timeoutId = setTimeout(() => {
        setCopyImage("/assets/copy.svg");
      }, 3000);

      return () => {
        clearTimeout(timeoutId);
      };
    };

    handleCopyImage();
    navigator.clipboard.writeText(location.pathname.slice(6));
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

  const getFile = async (file: string) => {
    try {
      const response = await fetch(`/src/constants/${file}`);
      const content = response.text();
      return content;
    } catch (error) {
      console.error(`getFile: ${error}`);
      return null;
    }
  };

  const download = (file: string) => {
    const link = document.createElement("a");
    link.href = `/${file}`;
    link.download = file;
    link.click();
  };

  return {
    dimensions,
    getPath,
    copyImage,
    copyImageClick,
    getItem,
    getFile,
    fileContents,
    setFileContents,
    download,
  };
};

export default useFile;
