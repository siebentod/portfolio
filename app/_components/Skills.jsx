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
                <div className="flex flex-col md:min-w-[250px] sm:border-r border-zinc-200 md:mb-0 mb-3">
                  <div className="md:py-2.5 px-10 font-bold text-2xl">
                    Good 🎓
                  </div>
                  <div className="flex flex-col flex-1 py-1 md:py-2 px-10 justify-between content-center mx-auto">
                    <div className="flex content-center gap-1">
                      <div className="inline">
                        <img
                          src="/react.svg"
                          alt="Next.js Icon"
                          className="w-7 h-7 p-[4px]"
                        />
                      </div>
                      React
                    </div>
                    <div className="flex content-center gap-1">
                      <div className="inline">
                        <img
                          src="/tailwindcss.svg"
                          alt="Next.js Icon"
                          className="w-7 h-7 p-[4px]"
                        />
                      </div>
                      Tailwind
                    </div>
                    <div className="flex content-center gap-1">
                      <div className="inline">
                        <img
                          src="/sass.svg"
                          alt="Next.js Icon"
                          className="w-7 h-7 p-[4px]"
                        />
                      </div>
                      Sass
                    </div>
                    <div className="flex content-center gap-1">
                      <div className="inline">
                        <img
                          src="/zustand.svg"
                          alt="Next.js Icon"
                          className="w-7 h-7 p-[4px]"
                        />
                      </div>
                      Zustand
                    </div>
                    <div className="flex content-center gap-1">
                      <div className="inline">
                        <img
                          src="/javascript.svg"
                          alt="Next.js Icon"
                          className="w-7 h-7 p-[3px]"
                        />
                      </div>
                      Javascript
                    </div>
                    <div className="flex content-center gap-1">
                      <div className="inline">
                        <img
                          src="/html.svg"
                          alt="Next.js Icon"
                          className="w-7 h-7 p-[4px]"
                        />
                      </div>
                      HTML + CSS
                    </div>
                  </div>
                </div>
                <div className="flex flex-col md:min-w-[250px] lg:border-r border-zinc-200 md:mb-0 mb-3">
                  <div className="md:py-2.5 px-10 font-bold text-2xl">
                    Medium 👍
                  </div>
                  <div className="flex flex-col flex-1 py-1 md:py-2 px-10 justify-between content-center mx-auto">
                    <div className="flex content-center gap-1">
                      <div className="inline">
                        <img
                          src="/next.svg"
                          alt="Next.js Icon"
                          className="w-7 h-7 p-[4px]"
                        />
                      </div>
                      Next.js
                    </div>
                    <div className="flex content-center gap-1">
                      <div className="inline">
                        <img
                          src="/vike.svg"
                          alt="Next.js Icon"
                          className="w-7 h-7 p-[2px]"
                        />
                      </div>
                      Vike
                    </div>
                    <div className="flex content-center gap-1">
                      <div className="inline">
                        <img
                          src="/redux.svg"
                          alt="Next.js Icon"
                          className="w-7 h-7 p-[4px]"
                        />
                      </div>
                      Redux
                    </div>
                    <div className="flex content-center gap-1">
                      <div className="inline">
                        <img
                          src="/jotai.svg"
                          alt="Next.js Icon"
                          className="w-7 h-7 p-[3px]"
                        />
                      </div>
                      Jotai
                    </div>
                  </div>
                </div>
                <div className="flex flex-col md:min-w-[250px]">
                  <div className="md:py-2.5 px-10 text-nowrap font-bold text-2xl">
                    Worked with ✍🏻
                  </div>
                  <div className="flex flex-col flex-1 py-1 md:py-2 px-10 justify-between content-center mx-auto">
                    <div className="flex content-center gap-1">
                      <div className="inline">
                        <img
                          src="/styled-components.svg"
                          alt="Next.js Icon"
                          className="w-7 h-7 p-[4px]"
                        />
                      </div>
                      Styled Components
                    </div>
                    <div className="flex content-center gap-1">
                      <div className="inline">
                        <img
                          src="/react-query.svg"
                          alt="Next.js Icon"
                          className="w-7 h-7 p-[3px]"
                        />
                      </div>
                      React Query
                    </div>
                    <div className="flex content-center gap-1">
                      <div className="inline">
                        <img
                          src="/typescript.svg"
                          alt="Next.js Icon"
                          className="w-7 h-7 p-[4px]"
                        />
                      </div>
                      Typescript
                    </div>
                    <div className="flex content-center gap-1">
                      <div className="inline">
                        <img
                          src="/nodejs.svg"
                          alt="Next.js Icon"
                          className="w-7 h-7 p-[4px]"
                        />
                      </div>
                      Node.js
                    </div>
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
