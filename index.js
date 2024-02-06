import express from "express";
const app = express();
const port = 6300;

app.get("/", (req, res) => {
  res.send("This is Home page");
});

app.listen(port, () => {
  console.log("Server is Running on port http://localhost:" + port);
});
