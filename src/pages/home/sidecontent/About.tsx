import { about } from "../../../constants";

const About = () => {
  return (
    <>
      <div className="flex h-[32px] flex-row items-center justify-between">
        <h1 className="text-base font-bold text-secondary">About</h1>
      </div>
      <div className="mt-3">{about}</div>
    </>
  );
};

export default About;
