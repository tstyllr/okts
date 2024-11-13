import Express from "express";
import config from "config";

const app = Express();
const port = config.get<number>("port");

app.get("/", (req, res) => {
  res.send("hello world");
});

app.listen(port, () => {
  console.log("listening " + port);
});
