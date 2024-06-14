const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();
const userRoutes = require("./routes/UserRoutes");
const cookieparser = require("cookie-parser");

const DB = process.env.DB;
mongoose.connect(DB).then(() => {
  console.log("Database Connected");
});
app.use(express.json());
app.use(cookieparser());

app.use("/api/v1", userRoutes);
const port = process.env.PORT || 5001;
app.listen(port, () => {
  console.log(`Node+express running on ${port}`);
});
