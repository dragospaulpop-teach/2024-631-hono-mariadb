import type { FC } from "hono/jsx";

const Messages: FC = ({ children }) => {
  return <ol>{children}</ol>;
};

export default Messages;
