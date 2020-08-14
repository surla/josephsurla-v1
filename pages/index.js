import Nav from "../components/nav";
import About from "../components/about";
import Projects from "../components/projects";
import Social from "../components/social";
import Footer from "../components/footer";
import Contact from "../components/contact";

export default function IndexPage() {
  return (
    <div className="bg-gray-100">
      <div className="container mx-auto w-4/5 py-20">
        <div className="text-left">
          <p className=" text-gray-900 font-bold tracking-wide sm:text-xl md:text-3xl lg:text-5xl">
            Hello, I'm Joseph Surla.
          </p>
          <p className="text-gray-700 sm:text-xl lg:text-2xl">
            A software developer who lives in Japan. 🇯🇵
          </p>
          <p className="text-gray-600">I love building things with code.</p>
        </div>
      </div>

      <About />
      <Projects />
      <Social />
      <Contact />
      <Footer />

      {/*social media links*/}
      {/* <ul>
        <li>
          <a href="https://github.com/surla">Github</a>
        </li>
        <li>
          <a href="https://twitter.com/josephsurla">Twitter</a>
        </li>
        <li>
          <a href="https://codesandbox.io/u/surla/">CodeSandbox</a>
        </li>
      </ul> */}
    </div>
  );
}
