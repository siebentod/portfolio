function Skills() {
  return (
    <>
      <section
        // className="w-full py-12 md:py-24 lg:py-32 bg-muted snap-start"
        className="w-full py-14 snap-start bg-white"
        id="skills"
      >
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="pb-6 text-3xl font-bold tracking-tighter sm:text-5xl text-black">
                Skills (Stack)
              </h2>
              <div className="flex flex-wrap max-w-2xl m-auto sm:border border-black justify-center">
                <div className="flex flex-col bg-[hsl(137,30%,95%)] md:min-w-[200px] sm:border-r border-black shadow">
                  <div className="bg-[hsl(137,30%,90%)] py-2.5 px-10 font-bold text-lg sm:border-b border-black">
                    Good
                  </div>
                  <div className="flex flex-col flex-1 py-3 px-10 justify-between">
                    <p className="m-auto">React</p>
                    <p className="m-auto">Tailwind</p>
                    <p className="m-auto">Sass</p>
                    <p className="m-auto">Zustand</p>
                    <p className="m-auto">Javascript</p>
                    <p className="m-auto">HTML + CSS</p>
                  </div>
                </div>
                <div className="flex flex-col bg-[hsl(79,40%,95%)] md:min-w-[200px] sm:border-r border-black shadow">
                  <div className="bg-[hsl(79,50%,90%)] py-2.5 px-10 font-bold text-lg sm:border-b border-black">
                    Medium
                  </div>
                  <div className="flex flex-col flex-1 py-3 px-10 justify-between">
                    <p className="m-auto">Next.js</p>
                    <p className="m-auto">Vike</p>
                    <p className="m-auto">Redux</p>
                    <p className="m-auto">Jotai</p>
                    <p className="m-auto">React Query</p>
                  </div>
                </div>
                <div className="flex flex-col bg-[hsl(65,40%,95%)] md:min-w-[200px] border-black shadow">
                  <div className="bg-[hsl(65,60%,90%)] py-2.5 px-10 text-nowrap font-bold text-lg sm:border-b border-black">
                    Worked with
                  </div>
                  <div className="flex flex-col flex-1 py-3 px-10 justify-between">
                    <p className="m-auto">Styled Components</p>
                    <p className="m-auto">Typescript</p>
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
