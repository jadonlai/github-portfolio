import { useEffect } from "react";

import { useFile } from "../../../../hooks";

interface VideoProps {
  filename: string;
  height: number;
}

const Video = ({ filename, height }: VideoProps) => {
  const { getFile, fileContents, setFileContents } = useFile();

  useEffect(() => {
    const fetchFile = async () => {
      const file = await getFile(`/portfolio/${filename}`, "video");
      setFileContents(file);
    };

    fetchFile();
  }, [filename]);

  if (!fileContents) {
    return;
  }

  return (
    <video
      src={fileContents}
      width={`${height / 2}px`}
      controls
      autoPlay
      loop
      muted
      className="my-4 rounded-xl"
    />
  );
};

export default Video;
