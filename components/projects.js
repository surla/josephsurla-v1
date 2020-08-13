const projects = [
  {
    title: "Title of project",
    description: "Description of project",
    technology: "Javascript, Reactjs",
  },
  {
    title: "Codelabs",
    description:
      "A collection of small projects. The focus of this project is to create as many coding projects.",
    technology: "Built with Nextjs and styled with Tailwind CSS",
  },
];

export default function Projects() {
  return (
    <div className="container mx-auto bg-green-100 w-10/12 rounded-md p-4">
      <h3 className="text-gray-600 pb-3">Projects</h3>

      <div className="">
        {projects.map(({ title, description, technology }) => (
          <div className=" pb-5">
            <div className="text-2xl font-bold text-gray-800">{title}</div>
            <p className="text-gray-600">{description}</p>
            <p className="text-sm">{technology}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
