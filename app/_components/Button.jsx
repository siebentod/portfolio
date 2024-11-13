import Link from 'next/link';

function Button({ href, type, children, onClick, className }) {
  return (
    <>
      {href ? (
        <Link
          href={href}
          className={
            type === 'secondary'
              ? `btn-secondary ${className}`
              : `btn-primary ${className}`
          }
          prefetch={false}
        >
          {children}
        </Link>
      ) : (
        <button
          onClick={onClick}
          className={
            type === 'secondary'
              ? `btn-secondary ${className}`
              : `btn-primary ${className}`
          }
        >
          {children}
        </button>
      )}
    </>
  );
}

export default Button;
