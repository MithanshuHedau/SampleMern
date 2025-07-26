const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
const dataUser = mongoose.model("User", UserSchema);
module.exports = dataUser;
