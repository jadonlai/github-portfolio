const About = () => {
  const details = [
    {
      title: "profession",
      description: "Software Developer",
    },
    { title: "location_pin", description: "San Luis Obispo, CA" },
    {
      title: "star",
      description:
        "Specializing in AI/ML, computational neuroscience, and full stack development",
    },
  ];

  return (
    <>
      <div className="h-[32px] flex flex-row items-center justify-between">
        <h1 className="text-secondary text-base font-bold">About</h1>
      </div>
      <div className="mt-3">
        <ul>
          {details.map(({ title, description }) => (
            <li key={title} className="flex flex-row space-x-2">
              <img
                src={`assets/${title}.svg`}
                alt={title}
                className="h-4 w-4 mt-1"
              />{" "}
              <p className="text-secondary text-base">{description}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default About;
