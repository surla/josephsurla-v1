import Nav from "../components/nav";

export default function IndexPage() {
  return (
    <div>
      <Nav />
      <div className="container mx-auto py-20">
        <h1 className="text-3xl text-center text-accent-1"></h1>
        <div className="">
          <p className="text-5xl font-bold">👋Hi, I'm Joseph Surla</p>
          <p className="text-3xl">
            I enjoy building things with code. Currently living in beautiful
            Japan. 🇯🇵
          </p>
        </div>
      </div>

      {/*social media links*/}
      <ul>
        <li>
          <a href="https://github.com/surla">Github</a>
        </li>
        <li>
          <a href="https://twitter.com/josephsurla">Twitter</a>
        </li>
        <li>
          <a href="https://codesandbox.io/u/surla/">CodeSandbox</a>
        </li>
      </ul>
    </div>
  );
}
