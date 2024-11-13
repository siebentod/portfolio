import Image from 'next/image';

function Screenshot({ src, alt }) {
  return (
    <>
      <Image
        src={src}
        alt={alt}
        className="mx-auto aspect-video overflow-hidden rounded-xl object-contain object-center sm:w-full lg:order-last"
        width="550"
        height="310"
      />
    </>
  );
}

export default Screenshot;
