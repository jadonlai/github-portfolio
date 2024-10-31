import { Button } from "../interactables";

const Title = () => {
  return (
    <>
      <div className="h-16 flex flex-row items-center justify-between">
        <div className="flex flex-row items-center">
          <div className="flex flex-row items-center space-x-2">
            <img
              src="/assets/profile.png"
              alt="profile"
              className="w-6 h-6 rounded-full"
            />
            <h1 className="text-secondary text-xl font-bold hover:underline">
              portfolio
            </h1>
            <div className="rounded-full border-[1px] border-gray-border">
              <h1 className="text-gray text-xs px-[5px] py-[1px]">Public</h1>
            </div>
          </div>
        </div>
        <div>
          <Button
            imagePath="/assets/github.svg"
            imageAltText="github"
            imageStyles="w-5 h-5"
            onClick={() => {
              window.open("https://github.com/jadonlai", "_blank");
            }}
          />
        </div>
      </div>
      <hr className="border-gray-border" />
    </>
  );
};

export default Title;
