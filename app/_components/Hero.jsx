import Image from 'next/image';
import Button from './Button';

function Hero() {
  return (
    <>
      {/* <section className="w-full py-12 md:py-24 lg:py-32 snap-start"> */}
      <section className="w-full py-20 snap-start">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Front-End Developer
                </h1>
                <p className="max-w-[600px] text-zinc-600 md:text-lg mt-3">
                  Меня зовут Алексей, я веб-разработчик. Ниже можно найти мои
                  проекты, компетенции и контакты.
                </p>
              </div>
              <div className="flex flex-col gap-1 min-[400px]:flex-row">
                <Button href="#projects" type="primary" className="px-8 py-5">
                  Проекты
                </Button>
                <Button href="#contact" type="secondary" className="px-8 py-5">
                  Написать мне
                </Button>
              </div>
            </div>
            <Image
              alt="Hero"
              src="/ref10.jpg"
              className="mx-auto aspect-square overflow-hidden rounded-xl object-cover lg:order-last"
              width="300"
              height="300"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
