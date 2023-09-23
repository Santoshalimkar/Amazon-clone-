const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const User = require("./models/user.models");
const jwt = require("jsonwebtoken");
const port = 3585;

app.use(cors());
app.use(express.json());

mongoose.set("strictQuery", true);

const mongoDB =
  "mongodb+srv://Santosh:Pavan@cluster0.n8rgyts.mongodb.net/amazon-clone";
mongoose.connect(mongoDB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  family: 4,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.post("/api/register", async (req, res) => {
  console.log(req.body);
  try {
    await User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });
    res.json({ status: "ok" });
  } catch (err) {
    res.json({ status: "error", error: "duplicate email" });
  }
});

app.post("/api/login", async (req, res) => {
  const user = await User.findOne({
    email: req.body.email,
    password: req.body.password,
  });

  if (user) {
    const token = jwt.sign(
      {
        name: user.name,
        email: user.email,
      },
      "secret2585"
    );

    return res.json({ status: "ok", user: user });
  } else {
    return res.json({ status: "ok", user: false });
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
