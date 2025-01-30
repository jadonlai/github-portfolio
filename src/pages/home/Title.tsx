import { Button } from "../../components/interactables";

const Title = () => {
  return (
    <>
      <div className="my-2 items-center space-y-2 sm:my-0 sm:flex sm:h-16 sm:flex-row sm:justify-between sm:space-y-0">
        <div className="flex flex-row items-center">
          <div className="flex flex-row items-center space-x-2">
            <img
              src="/github-portfolio/assets/profile.png"
              alt="profile"
              className="size-6 rounded-full border-[1px] border-gray-border"
            />
            <button
              onClick={() => {
                window.location.reload();
              }}
            >
              <h1 className="text-xl font-bold text-secondary hover:underline">
                portfolio
              </h1>
            </button>
            <div className="rounded-full border-[1px] border-gray-border">
              <h1 className="px-[5px] py-[1px] text-xs text-gray">Public</h1>
            </div>
          </div>
        </div>
        <div className="flex flex-row space-x-2 sm:justify-end">
          <Button
            imagePath="/github-portfolio/assets/gmail.svg"
            imageAltText="gmail"
            imageStyles="size-5"
            onClick={() => {
              window.location.href = "mailto:jadonlai.314@.com";
            }}
          />
          <Button
            imagePath="/github-portfolio/assets/github.svg"
            imageAltText="github"
            imageStyles="size-5"
            onClick={() => {
              window.open(
                "https://github.com/jadonlai/github-portfolio",
                "_blank",
              );
            }}
          />
          <Button
            imagePath="/github-portfolio/assets/linkedin.svg"
            imageAltText="linkedin"
            imageStyles="size-5"
            onClick={() => {
              window.open(
                "https://www.linkedin.com/in/jadon-lai-16b550242/",
                "_blank",
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
