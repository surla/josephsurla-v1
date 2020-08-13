import Link from "next/link";

const links = [
  { href: "#about", label: "About Me" },
  { href: "#work", label: "Projects" },
  { href: "#writings", label: "Writings" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  return (
    <header className="mt-10">
      <nav className="text-md">
        <ul className="flex justify-evenly">
          {links.map(({ href, label }) => (
            <li key={`${href}${label}`}>
              <a href={href} className="no-underline">
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
