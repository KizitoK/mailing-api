const express = require("express");
const cors = require("cors");
const app = express();
const dozieRoutes = require("./routes/dozieRoutes.js");

require("dotenv").config();

const PORT = process.env.PORT || 8000;

app.use(express.json());
app.use(cors());

//setup routes
app.use("/v1/dozie", dozieRoutes);

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});
