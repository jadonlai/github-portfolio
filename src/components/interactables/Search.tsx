interface SearchProps {
  width: number;
  height?: number;
  text: string;
}

const Search = ({ width, height = 32, text }: SearchProps) => {
  return (
    <div
      style={{ width: `${width}px`, height: `${height}px` }}
      className={`flex flex-row items-center justify-between space-x-2 rounded-md border-[1px] border-gray-border bg-primary py-1 pl-3 pr-2 focus-within:border-[2px] focus-within:border-blue`}
    >
      <div className="flex flex-row items-center space-x-2 text-sm">
        <img src={"/assets/search.svg"} alt="search" />
        <input
          placeholder={text}
          className="w-[100%] bg-primary text-secondary outline-none"
        />
      </div>
      <div className="rounded-md border-[1px] border-gray-border bg-primary-200">
        <p className="mx-1 text-xs text-secondary">t</p>
      </div>
    </div>
  );
};

export default Search;
