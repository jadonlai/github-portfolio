interface TagProps {
  label: string;
  link: string;
  tagStyles?: string;
}

const Tag = ({ label, link, tagStyles }: TagProps) => {
  return (
    <button
      onClick={() => window.open(link, "_blank")}
      className={`group w-fit rounded-full bg-blue-tag px-3 py-1 hover:bg-blue-taghover ${tagStyles}`}
    >
      <h1
        className={`text-blue ${
          document.body.classList[0] === "dark"
            ? "group-hover:text-secondary"
            : "group-hover:text-primary"
        } text-xs font-semibold`}
      >
        {label}
      </h1>
    </button>
  );
};

export default Tag;
