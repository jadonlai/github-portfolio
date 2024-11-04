import { Navbar } from "../../components/navbar";
import Content from "./Content";
import SideContent from "./sidecontent/SideContent";
import Title from "./Title";

const Home = () => {
  return (
    <div className="h-full">
      <Navbar />
      <div className="mx-auto h-full w-[72.5%]">
        <Title />
        <div className="mb-10 mt-6 flex h-full flex-row space-x-5">
          <Content />
          <SideContent />
        </div>
      </div>
    </div>
  );
};

export default Home;
