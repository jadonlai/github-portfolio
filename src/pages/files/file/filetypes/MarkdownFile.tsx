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
      remarkPlugins={[remarkGfm]}
      components={{
        a: ({ node, ...props }) => <a {...props} target="_blank" />,
      }}
      className={`prose prose-a prose-img prose-hr m-8 max-w-none ${styles}`}
    >
      {fileContents}
    </Markdown>
  );
};

export default MarkdownFile;
