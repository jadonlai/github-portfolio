import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

import { markdown } from "../../constants";

const Readme = () => {
  return (
    <div className="mt-4 border-[1px] border-gray-border rounded-md">
      <div className="h-[48px] rounded-t-md flex flex-row items-center pl-2 border-b-[1px] border-b-gray-border">
        <div className="flex flex-row items-center space-x-2 px-2 h-full border-b-[2px] border-b-orange">
          <img src="/assets/book.svg" alt="book" className="h-4 w-4" />
          <h1 className="text-secondary text-sm font-bold">README</h1>
        </div>
      </div>
      <Markdown
        children={markdown}
        remarkPlugins={[remarkGfm]}
        className="markdown text-secondary mx-8"
      />
    </div>
  );
};

export default Readme;
