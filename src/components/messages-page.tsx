import { FC } from "hono/jsx";
import Layout from "./layout";
import Message from "./message";
import Messages from "./messages";

const MessagesPage: FC<{ messages: any[] }> = ({ messages }) => {
  return (
    <Layout>
      <h1>Messages</h1>
      <Messages>
        {messages.map((message) => (
          <Message content={message} />
        ))}
      </Messages>
    </Layout>
  );
};

export default MessagesPage;
