import LanguageBar from "./LanguageBar";
import LanguageTags from "./LanguageTags";

const Languages = () => {
  const languages = [
    {
      name: "Python",
      color: "#3572A5",
      proficiency: new Date().getFullYear() - 2018,
      tagStyles: "ml-5",
    },
    {
      name: "JavaScript/Typescript",
      color: "#555555",
      proficiency: new Date().getFullYear() - 2024,
      tagStyles: "",
    },
    {
      name: "HTML/CSS",
      color: "#B07219",
      proficiency: new Date().getFullYear() - 2024,
      tagStyles: "",
    },
    {
      name: "C",
      color: "#3178C6",
      proficiency: 3,
      tagStyles: "",
    },
    { name: "Java", color: "#E34C26", proficiency: 2, tagStyles: "" },
    {
      name: "C++",
      color: "#F34B7D",
      proficiency: 1,
      tagStyles: "",
    },
    {
      name: "C#",
      color: "#178600",
      proficiency: 1,
      tagStyles: "",
    },
  ];

  return (
    <>
      <div className="mb-3 flex h-[32px] flex-row items-center justify-between">
        <h1 className="text-base font-bold text-secondary">Languages</h1>
      </div>
      <LanguageBar languages={languages} />
      <LanguageTags languages={languages} />
    </>
  );
};

export default Languages;
