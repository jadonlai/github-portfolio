import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface MarkdownProps {
  file: string;
  styles?: string;
}

const MarkdownFile = ({ file, styles }: MarkdownProps) => {
  return (
    <Markdown
      children={file}
      remarkPlugins={[remarkGfm]}
      className={`markdown mx-8 text-secondary ${styles}`}
    />
  );
};

export default MarkdownFile;
