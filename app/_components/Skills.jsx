function Skills() {
  return (
    <>
      <section
        // className="w-full py-12 md:py-24 lg:py-32 bg-muted snap-start"
        className="w-full py-14 snap-start bg-white"
        id="skills"
      >
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="sm:pb-3 md:pb-6 text-3xl font-bold tracking-tighter sm:text-5xl text-black">
                Skills (Stack)
              </h2>
              <div className="flex flex-wrap max-w-5xl m-auto justify-center text-lg pt-2 pb-1">
                <div className="flex flex-col md:min-w-[250px] sm:border-r border-zinc-200">
                  <div className="md:py-2.5 px-10 font-bold text-2xl">
                    Good 🎓
                  </div>
                  <div className="flex flex-col flex-1 py-1 md:py-2 px-10 justify-between">
                    <p className="m-auto">React</p>
                    <p className="m-auto">Tailwind</p>
                    <p className="m-auto">Sass</p>
                    <p className="m-auto">Zustand</p>
                    <p className="m-auto">Javascript</p>
                    <p className="m-auto">HTML + CSS</p>
                  </div>
                </div>
                <div className="flex flex-col md:min-w-[250px] sm:border-r border-zinc-200">
                  <div className="md:py-2.5 px-10 font-bold text-2xl">
                    Medium 👍
                  </div>
                  <div className="flex flex-col flex-1 py-1 md:py-2 px-10 justify-between">
                    <p className="m-auto">Next.js</p>
                    <p className="m-auto">Vike</p>
                    <p className="m-auto">Redux</p>
                    <p className="m-auto">Jotai</p>
                    <p className="m-auto">React Query</p>
                  </div>
                </div>
                <div className="flex flex-col md:min-w-[250px]">
                  <div className="md:py-2.5 px-10 text-nowrap font-bold text-2xl">
                    Worked with ✍🏻
                  </div>
                  <div className="flex flex-col flex-1 py-1 md:py-2 px-10 justify-between">
                    <p className="m-auto">Styled Components</p>
                    <p className="m-auto">Typescript</p>
                    <p className="m-auto">Node.js</p>
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
