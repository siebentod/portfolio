import Link from 'next/link';

function Header() {
  return (
    <>
      <header className="px-4 lg:px-6 h-14 flex items-center bg-navcolor text-myyellow shadow-md">
        {/* <Link
          href="#"
          className="flex items-center justify-center"
          prefetch={false}
        >
          ?<span className="sr-only">John Doe's Portfolio</span>
        </Link> */}
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            href="#projects"
            className="text-sm font-semibold hover:underline underline-offset-4"
            prefetch={false}
          >
            Projects
          </Link>
          <Link
            href="#skills"
            className="text-sm font-semibold hover:underline underline-offset-4"
            prefetch={false}
          >
            Skills
          </Link>
          <Link
            href="#contact"
            className="text-sm font-semibold hover:underline underline-offset-4"
            prefetch={false}
          >
            About Me
          </Link>
        </nav>
      </header>
    </>
  );
}

export default Header;
