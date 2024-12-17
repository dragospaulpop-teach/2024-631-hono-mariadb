import { FC } from "hono/jsx";

const Layout: FC = ({ children }) => {
  return (
    <html>
      <head>
        <title>Bookstore</title>
      </head>
      <body>{children}</body>
    </html>
  );
};

export default Layout;
