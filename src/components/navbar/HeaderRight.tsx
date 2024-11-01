const HeaderRight = () => {
  return (
    <div>
      <button
        onClick={() => {
          window.open("https://github.com/jadonlai", "_blank");
        }}
      >
        <img
          src="/assets/profile.png"
          alt="profile"
          className="size-8 rounded-full border-[1px] border-gray-border"
        />
      </button>
    </div>
  );
};

export default HeaderRight;
