import { about } from "../../../constants";

const About = () => {
  return (
    <>
      <div className="h-[32px] flex flex-row items-center justify-between">
        <h1 className="text-secondary text-base font-bold">About</h1>
      </div>
      <div className="mt-3">{about}</div>
    </>
  );
};

export default About;
