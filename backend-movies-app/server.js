const express = require("express");
const mongoose = require("mongoose");
const moviesRoutes = require("./routes/movieRoutesMulter");

const cors = require("cors");
const app = express();
app.use(cors());
mongoose
  .connect("mongodb+srv://hichem:hichem@cluster0.ygb57bf.mongodb.net/movies", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("database connecté");
  })
  .catch((err) => {
    console.log(err);
  });

app.use(express.json());

app.use("/api/movies", moviesRoutes);
app.listen(5000, () => {
  console.log(`Server is running on port 5000`);
});
