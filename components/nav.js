import Link from "next/link";

const links = [
  { href: "#about", label: "About" },
  { href: "#work", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  return (
    <header className="flex justify-between">
      <h4 className="px-5 py-5 text-3xl font-bold ">Joseph Surla</h4>
      <nav className="text-lg ">
        <ul className="flex justify-between items-center p-8">
          <ul className="flex justify-between items-center space-x-4 uppercase">
            {links.map(({ href, label }) => (
              <li key={`${href}${label}`}>
                <a href={href} className="no-underline">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </ul>
      </nav>
    </header>
  );
}
