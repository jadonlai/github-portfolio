interface TagProps {
  label: string;
  link: string;
  tagStyles?: string;
}

const Tag = ({ label, link, tagStyles }: TagProps) => {
  return (
    <button
      onClick={() => window.open(link, "_blank")}
      className={`group bg-blue-tag hover:bg-blue-taghover rounded-full w-fit py-1 px-3 ${tagStyles}`}
    >
      <h1 className="text-blue group-hover:text-secondary text-xs font-semibold">
        {label}
      </h1>
    </button>
  );
};

export default Tag;
