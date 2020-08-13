import Nav from "../components/nav";

export default function IndexPage() {
  return (
    <div>
      <Nav />
      <div className="container mx-auton pl-10 py-20">
        <div className="text-left">
          <p className=" text-gray-800 sm:text-lg lg:text-4xl">
            Hello, I'm Joseph Surla.
          </p>
          <p className="text-gray-600 sm:text-lg lg:text-lg ">
            A software developer who currently lives in Japan. 🇯🇵
          </p>
        </div>
      </div>

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
