const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./connectionDB/connection");
const cors = require("cors");

dotenv.config();
connectDB();
const app = express();
app.use(express.json());
app.use(cors());

app.use("/", require("./routes/user"));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
