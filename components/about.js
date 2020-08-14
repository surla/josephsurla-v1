export default function About() {
  return (
    <div className="container mx-auto bg-blue-100 w-10/12 rounded-md p-5 mt-3 mb-3">
      <h3 className="text-gray-700 text-xs md:text-base leading-3 tracking-wider">
        A little about me
      </h3>
      &mdash;
      <p className="text-gray-800 text-sm md:text-base lg:text-lg text-justify tracking-tighter leading-7">
        My passion for programming started when I worked as retail employee at
        Apple. In my role as Creative Pro, I helped others learn how to code. My
        job was to teach and inspire the next generation of creatives and
        software engineers which in turn, helped me realize my desire to
        becoming a software developer. Seeing firsthand how developers
        positively impacted peoples lives through technology, I wanted do the
        same.
      </p>
      <p className="pt-3 text-gray-800 text-sm md:text-base lg:text-lg text-justify tracking-tighter leading-7">
        I build websites using JavaScript. Lately, I've been with working
        Next.js and Tailwind CSS.{" "}
      </p>
      <div className="pt-3">
        <p className="text-md text-gray-800 text-xs lg:text-sm">
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
          </span>
          .<br />- 😄 Fun fact: I am left-handed.
        </p>
      </div>
    </div>
  );
}
