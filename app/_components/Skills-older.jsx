import Link from 'next/link';

function Skills() {
  return (
    <>
      <section
        // className="w-full py-12 md:py-24 lg:py-32 bg-muted snap-start"
        className="w-full py-12 snap-start"
        id="skills"
      >
        <div className="container px-4 md:px-6 font-semibold">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Skills (Stack)
              </h2>
              <div className="flex flex-wrap max-w-2xl m-auto border border-zinc-300">
                <div className="flex flex-col bg-[#ecffdc] md:min-w-[150px] border-r border-zinc-300">
                  <div className="bg-[#e3ffcc] py-3 px-10">Good</div>
                  <div className="flex flex-col flex-1 py-3 px-10 justify-between">
                    <p className="m-auto">React</p>
                    <p className="m-auto">Tailwind</p>
                    <p className="m-auto">Sass</p>
                    <p className="m-auto">Zustand</p>
                    <p className="m-auto">Javascript</p>
                    <p className="m-auto">HTML + CSS</p>
                  </div>
                </div>
                <div className="flex flex-col bg-[#f0ffd7] md:min-w-[150px] border-r border-zinc-300">
                  <div className="bg-[#ebffca] py-3 px-10">Medium</div>
                  <div className="flex flex-col flex-1 py-3 px-10 justify-between">
                    <p className="m-auto">Next.js</p>
                    <p className="m-auto">Vike</p>
                    <p className="m-auto">React Query</p>
                  </div>
                </div>
                <div className="flex flex-col bg-[#f8ffd0] md:min-w-[150px]">
                  <div className="bg-[#f7ffba] py-3 px-10 text-nowrap">
                    Worked with
                  </div>
                  <div className="flex flex-col flex-1 py-3 px-10 justify-between">
                    <p className="m-auto">Styled Components</p>
                    <p className="m-auto">Typescript</p>
                    <p className="m-auto">Redux</p>
                    <p className="m-auto">Jotai</p>
                    <p className="m-auto">Node.js</p>
                    <p className="m-auto">Python</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Skills;
