import { MarkdownFile } from "../files";

const Readme = () => {
  return (
    <div className="mt-4 rounded-md border-[1px] border-gray-border">
      <div className="flex h-[48px] flex-row items-center rounded-t-md border-b-[1px] border-b-gray-border pl-2">
        <div className="flex h-full flex-row items-center space-x-2 border-b-[2px] border-b-orange px-2">
          <img
            src="/github-portfolio/assets/book.svg"
            alt="book"
            className="size-4"
          />
          <h1 className="text-sm font-bold text-secondary">README</h1>
        </div>
      </div>
      <div className="flex justify-center">
        <MarkdownFile filepath="/github-portfolio/portfolio/main/README.md" />
      </div>
    </div>
  );
};

export default Readme;
