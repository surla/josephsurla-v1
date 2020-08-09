import Nav from "../components/nav";

export default function IndexPage() {
  return (
    <div>
      <Nav />
      <div className="py-20">
        <h1 className="text-3xl text-center text-accent-1"></h1>
        <div>
          <p className="text-2xl">
            👋Hi, I'm Joseph Surla and I enjoy building things with code.
            Currently living in beautiful Japan. 🇯🇵
          </p>
        </div>
      </div>
    </div>
  );
}
