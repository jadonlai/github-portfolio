import About from "./About";
import Tags from "./tags/Tags";
import Languages from "./languages/Languages";

const SideContent = () => {
  return (
    <ul className="w-full space-y-5 sm:max-w-[275px]">
      <About key={0} />
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
