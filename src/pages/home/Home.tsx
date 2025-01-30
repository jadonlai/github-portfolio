import { Navbar } from "../../components/navbar";
import Content from "./Content";
import SideContent from "./sidecontent/SideContent";
import Title from "./Title";

const Home = () => {
  return (
    <div className="h-full">
      <Navbar />
      <div className="h-full px-4 sm:mx-auto sm:w-[72.5%] sm:px-0">
        <Title />
        <div className="mb-10 mt-6 flex h-full flex-col-reverse space-y-4 space-y-reverse sm:flex-row sm:space-x-5 sm:space-y-0">
          <Content />
          <SideContent />
        </div>
      </div>
    </div>
  );
};

export default Home;
