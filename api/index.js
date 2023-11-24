const express = require("express");
const PORT = process.env.ENVIRONMENT || 9001;
const server = express();

server.get("/api", (req, res) => {
  res.status(200).json({ status: "200 OK" });
});

server.listen(PORT, (err) => {
  if (err) throw err;
  console.log(`> READY FOR LIFOTFF http://localhost:${PORT}`);
});
