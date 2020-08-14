export default function About() {
  return (
    <div className="container mx-auto bg-blue-100 w-10/12 rounded-md p-5 mt-3 mb-3">
      <h3 className="text-gray-700 leading-3 tracking-wider">
        A little about me
      </h3>
      &mdash;
      <p className="text-gray-800 text-xl text-justify tracking-tighter leading-7">
        My passion for programming started when I was a retail employee at
        Apple. In my role as Creative Pro, I helped others learn how to code. My
        job was to teach and inspire the next generation of creatives and
        software engineers. I recognize how developers positively impacted
        peoples lives through technology by building and creating software.
        <br />
        <br />I enjoy coding in JavaScript for the web and Java for desktop
        applications.
      </p>
      <br />
      <br />
      <p className="text-md text-gray-800">
        Currently... <br></br>- 📖 I'm reading{" "}
        <span className="underline hover:no-underline hover:text-orange-500">
          <a href="https://goodreads.com/surla">'Grit' by Angela Duckworth</a>
        </span>
        .<br />- 🇯🇵 I’m learning Japanese.
        <br />- 🤔 I’m looking for help with{" "}
        <span className="underline hover:no-underline hover:text-orange-500">
          <a href="https://github.com/surla/data-structures-and-algorithms">
            data structures and algorithms.
          </a>
        </span>
        .<br />- 😄 Fun fact: I am left-handed.
      </p>
    </div>
  );
}
