const projects = [
  {
    title: "Quote List",
    url: "https://github.com/surla/quote-list",
    description: "Web application that creates and saves your favorite quotes.",
    tags: ["Ruby", "Sinatra"],
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
    <div className="container mx-auto bg-green-100 w-10/12 rounded-md p-4">
      <h3 className="text-gray-900 md:text-lg leading-3 tracking-widest font-bold">
        👨‍💻 Things I've worked on
      </h3>
      <div className="tracking-tight text-gray-700">&mdash;</div>
      <div className="flex flex-col content-between text-sm lg:text-base">
        {projects.map(({ title, url, description, tags }) => (
          <a href={url}>
            <div className="p-4 m-1 border-solid border-2 border-gray-300 rounded-md hover:border-blue-300 hover:bg-blue-200">
              <div className="text-lg lg:text-2xl font-bold text-gray-900 tracking-wide">
                {title}
              </div>
              <p className="text-gray-800">{description}</p>
              {tags.map((value) => (
                <span className="text-xs pl-2 pr-2 mr-2 bg-orange-200 rounded-md text-black">
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
