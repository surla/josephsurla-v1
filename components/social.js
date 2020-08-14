const links = [
  {
    logo: "",
    website: "Github",
    url: "https://github.com/surla",
  },
  {
    logo: "",
    website: "CodeSandbox",
    url: "https://codesandbox.io/u/surla",
  },
  {
    logo: "",
    website: "Twitter",
    url: "https://twitter.com/josephsurla",
  },
  {
    logo: "",
    website: "LinkedIn",
    url: "https://linkedin.com/in/josephsurla",
  },
];

export default function Social() {
  return (
    <div className="container mx-auto bg-indigo-100 w-10/12 rounded-md p-4 mt-3">
      <h3 className="text-gray-700 leading-3 tracking-wide text-md">
        Find me here
      </h3>
      &mdash;
      {links.map(({ logo, website, url }) => (
        <div className="underline text-xl text-gray-900 hover:text-orange-500 hover:no-underline">
          <a href={url}>{website}</a>
        </div>
      ))}
    </div>
  );
}
