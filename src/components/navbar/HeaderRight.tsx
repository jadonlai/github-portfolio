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
          className="w-8 h-8 rounded-full"
        />
      </button>
    </div>
  );
};

export default HeaderRight;
