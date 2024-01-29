import express from "express";
import mongoose from "mongoose";
import config from "./config/config.js";

const app = express();

// middleware
app.use(express.static("public"));

// view engine
app.set("view engine", "ejs");

// database connection
const dbURI = config.MONGODB_URI;

async function connectToDB() {
  try {
    await mongoose.connect(dbURI).then(() => {
      console.log("connected to db");
      startServer();
    });
  } catch (error) {
    console.log(error);
  }
}

connectToDB();

// server
const PORT = config.PORT;
function startServer() {
  app.listen(PORT, () => console.log(`server started on port ${PORT}`));
}

// routes
app.get("/", (req, res) => res.render("home"));
app.get("/smoothies", (req, res) => res.render("smoothies"));
