import { useEffect } from "react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { useFile } from "../../../../hooks";

interface MarkdownProps {
  filename: string;
  styles?: string;
}

const MarkdownFile = ({ filename, styles }: MarkdownProps) => {
  const { getFile, fileContents, setFileContents } = useFile();

  useEffect(() => {
    const fetchFile = async () => {
      const file = await getFile(`/portfolio/${filename}`, "markdown");
      setFileContents(file);
    };

    fetchFile();
  }, [filename]);

  if (!fileContents) {
    return;
  }

  return (
    <Markdown
      children={fileContents}
      remarkPlugins={[remarkGfm]}
      className={`markdown mx-8 text-secondary ${styles}`}
    />
  );
};

export default MarkdownFile;
