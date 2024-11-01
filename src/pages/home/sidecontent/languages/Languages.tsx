import LanguageBar from "./LanguageBar";
import LanguageTags from "./LanguageTags";

const Languages = () => {
  const languages = [
    {
      name: "Python",
      color: "#3572A5",
      proficiency: 7,
      tagStyles: "ml-5",
    },
    {
      name: "C",
      color: "#555555",
      proficiency: 3,
      tagStyles: "",
    },
    { name: "Java", color: "#B07219", proficiency: 2, tagStyles: "" },
    {
      name: "JavaScript/Typescript",
      color: "#3178C6",
      proficiency: 1,
      tagStyles: "",
    },
    {
      name: "HTML/CSS",
      color: "#E34C26",
      proficiency: 1,
      tagStyles: "",
    },
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
    {
      name: "Racket",
      color: "#3C5CAA",
      proficiency: 1,
      tagStyles: "",
    },
    {
      name: "Assembly",
      color: "#6E4C13",
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
