import Tag from "./Tag";

const Tags = () => {
  const tags = [
    {
      label: "deep learning",
      link: "https://www.ibm.com/topics/deep-learning",
      tagStyles: "ml-1",
    },
    {
      label: "tensorflow",
      link: "https://tensorflow.org/",
    },
    {
      label: "pytorch",
      link: "https://pytorch.org/",
    },
    {
      label: "data science",
      link: "https://www.ibm.com/topics/data-science",
    },
    {
      label: "appwrite",
      link: "https://appwrite.io/",
    },
    { label: "react", link: "https://react.dev/" },
    { label: "unity", link: "https://unity.com/" },
  ];

  return (
    <div className="space-x-1 space-y-1 -ml-1">
      {tags.map(({ label, link, tagStyles }, index) => (
        <Tag key={index} label={label} link={link} tagStyles={tagStyles} />
      ))}
    </div>
  );
};

export default Tags;
