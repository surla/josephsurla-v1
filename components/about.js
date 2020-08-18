export default function About() {
  return (
    <div className="container mx-auto bg-blue-100 w-10/12 rounded-md p-5 mt-3 mb-3">
      <h3 className="text-gray-900 md:text-lg leading-3 tracking-widest font-bold">
        ‍👱‍♂️ A little about me
      </h3>
      <div className="tracking-tight text-gray-700">&mdash;</div>
      <div className="text-gray-800 text-sm md:text-base lg:text-lg text-justify tracking-tighter leading-7">
        <p>
          My passion for programming started when I worked as a retail employee
          at Apple. In my role as Creative Pro, I helped others learn how to
          code. My job was to teach and inspire the next generation of creatives
          and software engineers. By helping others reach there goal to become
          developers, I realized I wanted to do the same.
        </p>
        <p className="pt-3">
          I build websites using JavaScript. Lately, I've been with working
          Next.js and Tailwind CSS.{" "}
        </p>
      </div>
      <div className="rounded-md bg-orange-100 mt-3">
        <p className="p-2 text-sm text-gray-800 text-xs lg:text-sm">
          Currently... <br></br>- 📖 I'm reading{" "}
          <span className="underline hover:no-underline hover:text-orange-500">
            <a href="https://goodreads.com/surla">'Grit' by Angela Duckworth</a>
          </span>
          .<br />- 🇯🇵 I’m learning Japanese.
          <br />- 🤔 I’m looking for help with{" "}
          <span className="underline hover:no-underline hover:text-orange-500">
            <a href="https://github.com/surla/data-structures-and-algorithms">
              data structures and algorithms
            </a>
            .
          </span>
        </p>
      </div>
    </div>
  );
}
