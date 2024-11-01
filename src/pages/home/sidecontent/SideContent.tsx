import About from "./About";
import Tags from "./tags/Tags";
import Languages from "./languages/Languages";

const SideContent = () => {
  return (
    <ul className="max-w-[275px] space-y-5">
      <li key={0} className="space-y-3">
        <About />
        <div className="flex flex-row items-center space-x-2">
          <img src="/assets/book.svg" alt="book" className="size-4" />
          <button className="text-sm text-gray">Readme</button>
        </div>
      </li>
      <li key={1}>
        <hr className="mb-3 border-gray-border" />
        <div className="mb-3 flex h-[32px] flex-row items-center justify-between">
          <h1 className="text-base font-bold text-secondary">Technologies</h1>
        </div>
        <Tags />
      </li>
      <li key={2}>
        <hr className="mb-3 border-gray-border" />
        <Languages />
      </li>
    </ul>
  );
};

export default SideContent;
