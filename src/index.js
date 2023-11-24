const express = require("express");
const PORT = process.env.ENVIRONMENT || 9001;
const app = express();

app.get("/", (req, res) => {
  res.json({
    status: "home page Ok",
  });
});
app.get("/api", (req, res) => {
  res.status(200).json({ status: "/api 200 OK" });
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  /* eslint-disable no-console */
  console.log(`Listening: http://localhost:${port}`);
  /* eslint-enable no-console */
});
