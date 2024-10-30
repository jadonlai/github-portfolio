interface SearchProps {
  width: number;
  height?: number;
  text: string;
}

const Search = ({ width, height = 32, text }: SearchProps) => {
  return (
    <div
      style={{ width: `${width}px`, height: `${height}px` }}
      className={`bg-primary border-[1px] border-gray-border focus-within:border-[2px] focus-within:border-blue flex flex-row items-center justify-between rounded-md py-1 pl-3 pr-2 space-x-2`}
    >
      <div className="flex flex-row items-center space-x-2 text-sm">
        <img src={"/assets/search.svg"} alt="search" />
        <input
          placeholder={text}
          className="bg-primary outline-none text-secondary w-28"
        />
      </div>
      <div className="bg-primary-200 border-[1px] border-gray-border rounded-md">
        <p className="text-secondary text-xs mx-1">t</p>
      </div>
    </div>
  );
};

export default Search;
