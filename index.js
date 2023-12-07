const express = require("express");
const { connection } = require("./db");
const { userRouter } = require("./Routes/auth.routes");
const { auth } = require("./middleware/auth.middleware");
const { blogRouter } = require("./Routes/blog.route");
const app = express();
require("dotenv").config();

//Middleware
app.use(express.json());

//Routes
app.use("/user", userRouter);
app.use("/blog",blogRouter);

app.get("/blog", auth, (req, res) => {
  res.send({msg:"Blog page"});
});

app.listen(process.env.PORT, async () => {
  try {
    await connection;
    console.log("Connected to database");
  } catch (err) {
    console.log(err);
    console.log("Not able to connect database");
  }
  console.log(`Server is running on port ${process.env.PORT}`);
});
