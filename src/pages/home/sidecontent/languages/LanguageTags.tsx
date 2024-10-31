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
    <ul className="flex flex-wrap space-x-5 -ml-5 space-y-1">
      {languages.map(({ name, color, proficiency, tagStyles }) => (
        <li
          key={name}
          className={`flex flex-row space-x-2 items-center ${tagStyles}`}
        >
          <div
            style={{ backgroundColor: color }}
            className="w-2 h-2 rounded-full"
          />
          <p className="text-secondary text-xs font-bold">{name}</p>
          <p className="text-gray text-xs">
            {proficiency} yr
            {proficiency !== 1 && "s"}
          </p>
        </li>
      ))}
    </ul>
  );
};

export default LanguageTags;
