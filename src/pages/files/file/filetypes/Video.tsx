import { useEffect } from "react";

import { useFile } from "../../../../hooks";

interface VideoProps {
  filepath: string;
  height: number;
  orientation: string;
}

const Video = ({ filepath, height, orientation }: VideoProps) => {
  const { getFile, fileContents, setFileContents } = useFile();

  useEffect(() => {
    const fetchFile = async () => {
      const file = await getFile(filepath, "video");
      setFileContents(file);
    };

    fetchFile();
  }, [filepath]);

  if (!fileContents) {
    return;
  }

  return (
    <video
      src={fileContents}
      width={orientation === "portrait" ? `${height / 2}px` : "90%"}
      controls
      autoPlay
      loop
      muted
      className={`my-4 rounded-xl ${orientation === "landscape" ? "border-[1px] border-gray-border" : ""}`}
    />
  );
};

export default Video;
