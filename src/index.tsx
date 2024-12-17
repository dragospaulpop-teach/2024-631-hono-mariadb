import { Hono } from "hono";
import { createConnection } from "mariadb";
import ErrorPage from "./components/error-page";
import MessagesPage from "./components/messages-page";

const app = new Hono();

const query = async (sql: string) => {
  let connection;
  try {
    connection = await createConnection({
      host: "localhost",
      port: 3306,
      user: "user",
      password: "password",
      database: "bookstore",
    });
    const result = await connection.query(sql);
    return result;
  } catch (error) {
    throw error;
  } finally {
    if (connection) {
      connection.end();
    }
  }
};

app.get("/", async (c) => {
  try {
    const messages = await query("SELECT * from messages");
    return c.html(<MessagesPage messages={messages} />);
  } catch (error) {
    console.error(error);
    return c.html(<ErrorPage error={error} />);
  }
});

export default app;
