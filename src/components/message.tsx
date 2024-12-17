import type { FC } from "hono/jsx";

const Message: FC<{ content: { user: string; content: string } }> = ({
  content: { user, content },
}) => {
  return (
    <li
      style={{ marginBottom: "10px", display: "flex", flexDirection: "column" }}
    >
      <span style={{ fontWeight: "bold" }}>{user}</span>
      <span style={{ fontStyle: "italic" }}>{content}</span>
    </li>
  );
};

export default Message;
