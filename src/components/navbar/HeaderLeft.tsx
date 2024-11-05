const HeaderLeft = () => {
  // const [mode, setMode] = useState(
  //   document.body.classList.contains("dark") ? "dark" : "light",
  // );

  return (
    <div className="flex flex-row space-x-2">
      {/* <Button
        onClick={async () => {
          const newMode = mode === "dark" ? "light" : "dark";
          setMode(newMode);
          document.body.classList.replace(mode, newMode);
        }}
        imagePath={`/github-portfolio/assets/${mode}.svg`}
        imageAltText={mode}
        imageStyles="size-4"
        buttonStyles="px-1.5 bg-primary-100 mr-2"
      /> */}
      <img
        src="/github-portfolio/assets/logo.png"
        alt="logo"
        className="size-8"
      />
      <div className="ml-4 flex flex-row items-center">
        <button
          onClick={() => {
            window.open("https://github.com/jadonlai", "_blank");
          }}
          className="rounded-md px-2 py-1.5 hover:bg-primary-300"
        >
          <h1 className="text-sm text-secondary">jadonlai</h1>
        </button>
        <h1 className="text-sm text-gray">/</h1>
        <button
          onClick={() => {
            window.location.reload();
          }}
          className="rounded-md px-2 py-1.5 hover:bg-primary-300"
        >
          <h1 className="text-sm font-bold text-secondary">portfolio</h1>
        </button>
      </div>
    </div>
  );
};

export default HeaderLeft;
