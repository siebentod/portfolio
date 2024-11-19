import './_styles/globals.css';
import './_styles/fonts.css';

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body
      // className={cn('antialiased', fontHeading.variable, fontBody.variable)}
      >
        {children}
      </body>
    </html>
  );
}
