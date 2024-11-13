import Link from 'next/link';
import { IoLogoGithub } from 'react-icons/io5';

function Footer() {
  return (
    <footer className="flex flex-col gap-2 sm:flex-row h-14 w-full shrink-0 items-center px-4 md:px-6 border-t bg-navcolor text-myyellow">
      <nav className="mx-auto md:mr-[initial] flex gap-1 text-sm">
        <Link
          href="https://github.com/siebentod/portfolio"
          className="inline-flex items-center gap-0.5 justify-center hover:underline underline-offset-4"
        >
          Portfolio Github <IoLogoGithub className="ml-px" />
        </Link>{' '}
        · 2024
      </nav>
    </footer>
  );
}

export default Footer;
