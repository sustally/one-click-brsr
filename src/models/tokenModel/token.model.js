const mongoose = require("mongoose");
const toJSON = require("../plugins/toJSON.plugin");
const paginate = require("../plugins/paginate.plugin");

const tokenSchema = mongoose.Schema(
  {
    userId: {
      type: String,
    },
    token: {
      type: String,
      required: true,
      index: true,
    },
    email: {
      type: String,
    },
    createdAt: {
      type: Date,
      expires: "24h",
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
tokenSchema.plugin(toJSON);
tokenSchema.plugin(paginate);

const Token = mongoose.model("Token", tokenSchema);

module.exports = Token;
