import { Button } from "../../components/interactables";

const Title = () => {
  return (
    <>
      <div className="h-16 flex flex-row items-center justify-between">
        <div className="flex flex-row items-center">
          <div className="flex flex-row items-center space-x-2">
            <img
              src="/assets/profile.png"
              alt="profile"
              className="w-6 h-6 rounded-full border-[1px] border-gray-border"
            />
            <button
              onClick={() => {
                window.location.reload();
              }}
            >
              <h1 className="text-secondary text-xl font-bold hover:underline">
                portfolio
              </h1>
            </button>
            <div className="rounded-full border-[1px] border-gray-border">
              <h1 className="text-gray text-xs px-[5px] py-[1px]">Public</h1>
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-end space-x-2">
          <Button
            imagePath="/assets/gmail.svg"
            imageAltText="gmail"
            imageStyles="w-5 h-5"
            onClick={() => {
              window.location.href = "mailto:jadonlai.314@.com";
            }}
          />
          <Button
            imagePath="/assets/github.svg"
            imageAltText="github"
            imageStyles="w-5 h-5"
            onClick={() => {
              window.open(
                "https://github.com/jadonlai/github-portfolio",
                "_blank"
              );
            }}
          />
          <Button
            imagePath="/assets/linkedin.svg"
            imageAltText="linkedin"
            imageStyles="w-5 h-5"
            onClick={() => {
              window.open(
                "https://www.linkedin.com/in/jadon-lai-16b550242/",
                "_blank"
              );
            }}
          />
        </div>
      </div>
      <hr className="border-gray-border" />
    </>
  );
};

export default Title;
