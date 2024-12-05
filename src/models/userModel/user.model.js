const mongoose = require("mongoose");
const { v4: uuid } = require("uuid");
const bcrypt = require("bcryptjs");
const validator = require("validator");
const toJSON = require("../plugins/toJSON.plugin");
const paginate = require("../plugins/paginate.plugin");

const userSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      unique: true,
    },
    firstName: {
      type: String,
      required: [true, "firstName is required"],
    },
    lastName: {
      type: String,
    },
    email: {
      type: String,
      required: [true, "email is required"],
      // unique: [true, "email Id is already present"],
      validator(value) {
        if (!validator.isEmail(value)) {
          throw new Error("Email is inValid");
        }
      },
    },
    password: {
      type: String,
      minlength: 8,
      validate(value) {
        if (
          !value.match(
            /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/
          )
        ) {
          throw new Error(
            "password must contain At least one lower case and At least one upper case English letter and 1 number"
          );
        }
      },
    },
    recentLogin: {
      type: Date,
    },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
userSchema.plugin(toJSON);
userSchema.plugin(paginate);

userSchema.methods.isPasswordMatch = async function (oldPassword) {
  const user = this;
  return bcrypt.compare(oldPassword, user.password);
};

userSchema.pre("save", async function (next) {
  const user = this;
  if (user.isModified("password")) {
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);
  }
  next();
});

userSchema.pre("save", function (next) {
  if (this.isNew) {
    const { userId } = this;
    if (!userId || typeof userId !== "string") {
      this.userId = uuid();
    }
    this._md = { ...this._md, createdBy: this.userId, createdDtm: new Date() };
  }
  next();
});

const User = mongoose.model("User", userSchema);

module.exports = User;
