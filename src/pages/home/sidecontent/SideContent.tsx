import About from "./About";
import Tags from "./tags/Tags";
import Languages from "./languages/Languages";

const SideContent = () => {
  return (
    <ul className="max-w-[275px] space-y-5">
      <li key={0} className="space-y-3">
        <About />
        <div className="flex flex-row space-x-2 items-center">
          <img src="/assets/book.svg" alt="book" className="h-4 w-4" />
          <button className="text-gray text-sm">Readme</button>
        </div>
      </li>
      <li key={1}>
        <hr className="border-gray-border mb-3" />
        <div className="h-[32px] flex flex-row items-center justify-between mb-3">
          <h1 className="text-secondary text-base font-bold">Technologies</h1>
        </div>
        <Tags />
      </li>
      <li key={2}>
        <hr className="border-gray-border mb-3" />
        <Languages />
      </li>
    </ul>
  );
};

export default SideContent;
