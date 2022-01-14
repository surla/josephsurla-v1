export default function About() {
  return (
    <div className="container w-10/12 p-5 mx-auto mt-3 mb-3 bg-blue-100 rounded-md">
      <h3 className="font-bold leading-3 tracking-widest text-gray-900 md:text-lg">
        ‍👱‍♂️ A little about me
      </h3>
      <div className="tracking-tight text-gray-700">&mdash;</div>
      <div className="text-sm leading-7 tracking-tighter text-justify text-gray-800 md:text-base lg:text-lg">
        <p>
          My passion for programming started when I worked as a retail employee
          at Apple. In my role as Creative Pro, I helped others learn how to
          code. My job was to teach and inspire the next generation of creatives
          and software engineers. By helping others reach their goal to become
          developers, I realized I wanted to do the same.
        </p>
        <br />
        <p>
          I am a web developer looking for a new role in an exciting company. I
          focus on creative projects using Next.js, modern CSS practices and
          writing clean Javascript. When writing JavaScript code, I mostly use
          React but I can adapt to whatever tools are required. I currently
          reside in beautiful San Diego, CA but I am happy to relocate to a
          different city. I am also open to remote work and have experience
          working with a remote team. When I am not coding, you'll find me
          outdoors. I love being outside whether that's going got a walk, run,
          or relaxing at park. I'd love you to check out my work and hope that I
          can be part of your team.
        </p>
        <p className="pt-3">
          I build websites using JavaScript. Lately, I've been with working
          Next.js and Tailwind CSS.{" "}
        </p>
      </div>
      <div className="mt-3 bg-orange-100 rounded-md">
        <p className="p-2 text-xs text-gray-800 lg:text-sm">
          Currently... <br></br>- 📖 I'm reading{" "}
          <span className="underline hover:no-underline hover:text-orange-500">
            <a href="https://goodreads.com/surla">
              'Sapiens: A Brief History of Humankind' by Yuval Noah Harari
            </a>
          </span>
          .<br />- 🇯🇵 I’m learning Japanese.
          <br />- 🤔 I’m looking for help with{" "}
          <span className="underline hover:no-underline hover:text-orange-500">
            <a href="https://www.frontendmentor.io/profile/surla">
              perfecting my front-end CSS skills
            </a>
            .
          </span>
        </p>
      </div>
    </div>
  );
}
