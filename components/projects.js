const projects = [
  {
    title: "Stoic Quotes",
    url: "https://github.com/surla/stoic-quotes",
    description:
      "This project is a simple quote-serving JSON API using Express",
    tags: ["Javascript", "Express.js"],
  },
  {
    title: "Class Roster App",
    url: "https://github.com/surla/ClassRosterApp",
    description: "CLI application that parsed student data.",
    tags: ["C++"],
  },
];

export default function Projects() {
  return (
    <div className="container w-10/12 p-4 mx-auto bg-green-100 rounded-md">
      <h3 className="font-bold leading-3 tracking-widest text-gray-900 md:text-lg">
        👨‍💻 Things I've worked on
      </h3>
      <div className="tracking-tight text-gray-700">&mdash;</div>
      <div className="flex flex-col content-between text-sm lg:text-base">
        {projects.map(({ title, url, description, tags }) => (
          <a href={url}>
            <div className="p-4 m-1 border-2 border-gray-300 border-solid rounded-md hover:border-blue-300 hover:bg-blue-200">
              <div className="text-lg font-bold tracking-wide text-gray-900 lg:text-2xl">
                {title}
              </div>
              <p className="text-gray-800">{description}</p>
              {tags.map((value) => (
                <span className="pl-2 pr-2 mr-2 text-xs text-black bg-orange-200 rounded-md">
                  {value}
                </span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
