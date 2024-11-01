import Tag from "./Tag";

import { technologies } from "../../../../constants";

const Tags = () => {
  return (
    <div className="-ml-1 space-x-1 space-y-1">
      {technologies.map(({ label, link, tagStyles }, index) => (
        <Tag key={index} label={label} link={link} tagStyles={tagStyles} />
      ))}
    </div>
  );
};

export default Tags;
