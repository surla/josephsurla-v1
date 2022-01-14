const links = [
  {
    logo: "",
    website: "Github",
    url: "https://github.com/surla",
  },
  {
    logo: "",
    website: "Frontend Mentor",
    url: "https://www.frontendmentor.io/profile/surla",
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
    <div className="container w-10/12 p-4 mx-auto mt-3 bg-indigo-100 rounded-md">
      <h3 className="font-bold leading-3 tracking-widest text-gray-900 md:text-lg">
        📍 Find me here
      </h3>
      <div className="tracking-tight text-gray-700">&mdash;</div>
      {links.map(({ logo, website, url }) => (
        <div className="text-xl text-gray-900 underline hover:text-orange-500 hover:no-underline">
          <a href={url}>{website}</a>
        </div>
      ))}
    </div>
  );
}
