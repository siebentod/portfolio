import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'react-feather';

const Carousel = ({ children: slides }) => {
  const [curr, setCurr] = useState(0);

  const prev = () =>
    setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));

  const next = () =>
    setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));

  return (
    <div className="overflow-hidden relative">
      <div
        className="flex transition-transform ease-out duration-500"
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        {slides}
      </div>
      {/* <div className="absolute inset-0 flex items-center justify-between p-4"> */}
      <button
        onClick={prev}
        className="absolute top-1/2 left-3 translate-y-[-50%] p-1 rounded-full shadow bg-zinc-100/80 text-gray-800 hover:bg-zinc-100"
      >
        <ChevronLeft />
      </button>
      <button
        onClick={next}
        className="absolute top-1/2 right-3 translate-y-[-50%] p-1 rounded-full shadow bg-zinc-100/80 text-gray-800 hover:bg-zinc-100"
      >
        <ChevronRight />
      </button>
      {/* </div> */}
    </div>
  );
};

export default Carousel;
