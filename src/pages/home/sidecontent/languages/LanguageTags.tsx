interface LanguageTagProps {
  languages: {
    name: string;
    color: string;
    proficiency: number;
    tagStyles: string;
  }[];
}

const LanguageTags = ({ languages }: LanguageTagProps) => {
  return (
    <ul className="-ml-5 flex flex-wrap space-x-5 space-y-1">
      {languages.map(({ name, color, proficiency, tagStyles }) => (
        <li
          key={name}
          className={`flex flex-row items-center space-x-2 ${tagStyles}`}
        >
          <div
            style={{ backgroundColor: color }}
            className="size-2 rounded-full"
          />
          <p className="text-xs font-bold text-secondary">{name}</p>
          <p className="text-xs text-gray">
            {proficiency} yr
            {proficiency !== 1 && "s"}
          </p>
        </li>
      ))}
    </ul>
  );
};

export default LanguageTags;
