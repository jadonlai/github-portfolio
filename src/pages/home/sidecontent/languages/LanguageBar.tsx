interface LanguarBarProps {
  languages: { name: string; proficiency: number; color: string }[];
}

const LanguageBar = ({ languages }: LanguarBarProps) => {
  const totalProficiency = languages.reduce(
    (acc, current) => acc + current.proficiency,
    0,
  );

  return (
    <ul key={0} className="mb-3 flex h-2 flex-row space-x-[2px]">
      {languages.map(({ proficiency, color }, index) => (
        <li
          key={index}
          style={{
            backgroundColor: color,
            width: `${(proficiency / totalProficiency) * 100}%`,
            borderTopLeftRadius: index === 0 ? "9999px" : "0px",
            borderBottomLeftRadius: index === 0 ? "9999px" : "0px",
            borderTopRightRadius:
              index === languages.length - 1 ? "9999px" : "0px",
            borderBottomRightRadius:
              index === languages.length - 1 ? "9999px" : "0px",
          }}
          className="text-secondary"
        />
      ))}
    </ul>
  );
};

export default LanguageBar;
