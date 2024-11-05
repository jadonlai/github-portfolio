interface FileTitleProps {
  path: string[];
  commit: string;
  date: string;
}

const FileTitle = ({ path, commit, date }: FileTitleProps) => {
  return (
    <div className="flex w-full flex-row items-center justify-between rounded-md border-[1px] border-gray-border p-3">
      <div className="flex flex-row items-center">
        <img
          src="/github-portfolio/assets/logo.png"
          alt="logo"
          className="mr-2 size-5"
        />
        <h1 className="text-sm font-bold text-secondary">jadonlai</h1>
        <h1 className="truncate whitespace-nowrap px-2 text-sm text-gray">
          {path[0] === "/main" ? "initial commit" : commit}
        </h1>
      </div>
      <h1 className="truncate whitespace-nowrap text-sm text-gray">
        {date === "cur_date"
          ? new Date().toLocaleDateString("en-US", {
              year: "numeric",
              month: "2-digit",
              day: "2-digit",
            })
          : date}
      </h1>
    </div>
  );
};

export default FileTitle;
