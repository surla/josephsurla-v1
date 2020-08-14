const projects = [
  {
    title: "Codelabs",
    description:
      "A collection of small projects. The focus of this project is to create as many coding projects.",
    technology: "Built with Nextjs and styled with Tailwind CSS",
  },
  {
    title: "Quote List",
    description: "Web application that creates and saves your favorite quotes.",
    technology: "Built with Sinatra",
  },
];

export default function Projects() {
  return (
    <div className="container mx-auto bg-green-100 w-10/12 rounded-md p-4">
      <h3 className="text-gray-700 leading-3 tracking-wide">
        Things I've worked on
      </h3>
      &mdash;
      <div className="">
        {projects.map(({ title, description, technology }) => (
          <div>
            <div className="text-2xl font-bold text-gray-900 tracking-wide">
              {title}
            </div>
            <p className="text-gray-800">{description}</p>
            <p className="text-md text-gray-500">{technology}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
