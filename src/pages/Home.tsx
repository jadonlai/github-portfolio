import { Content, SideContent, Title } from "../components/home";
import Navbar from "../components/navbar/Navbar";

const Home = () => {
  return (
    <div className="h-full">
      <Navbar />
      <div className="h-full w-[72.5%] mx-auto">
        <Title />
        <div className="flex flex-row h-full mt-6 space-x-5">
          <Content />
          <SideContent />
        </div>
      </div>
    </div>
  );
};

export default Home;
