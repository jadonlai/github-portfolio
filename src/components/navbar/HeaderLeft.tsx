import { Button } from "../interactables";

const HeaderLeft = () => {
  return (
    <div className="flex flex-row">
      <Button
        onClick={() => {}}
        imagePath=""
        imageAltText=""
        buttonStyles="bg-primary-100"
      />
      <img src="/assets/logo.png" alt="logo" className="w-8 h-8" />
      <div className="ml-4 flex flex-row items-center space-x-2">
        <h1 className="text-secondary text-sm">jadonlai</h1>
        <h1 className="text-gray text-sm">/</h1>
        <h1 className="text-secondary text-sm font-bold">portfolio</h1>
      </div>
    </div>
  );
};

export default HeaderLeft;
