require("dotenv").config();

const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");

const ContactRoutes = require("./routes/ContactRoutes");

const connectDB = require("./config/db");
connectDB();

const app = express();

app.use(cors());
app.use(helmet());
app.use(morgan("dev"));

app.use(express.json());

app.use("/api/contacts", ContactRoutes);

app.get("/", (req, res) => {
  res.json({
    message: "Hello World!",
  });
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}`));
