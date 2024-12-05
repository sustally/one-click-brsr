const mongoose = require("mongoose");
const { v4: uuid } = require("uuid");
const bcrypt = require("bcryptjs");
const validator = require("validator");
const toJSON = require("../plugins/toJSON.plugin");
const paginate = require("../plugins/paginate.plugin");

const superAdminSchema = new mongoose.Schema(
  {
    superAdminId: {
      type: String,
      unique: true,
    },
    userType: {
      type: String,
      enum: ["SUPER-ADMIN"],
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
superAdminSchema.plugin(toJSON);
superAdminSchema.plugin(paginate);

superAdminSchema.methods.isPasswordMatch = async function (oldPassword) {
  const superAdmin = this;
  return bcrypt.compare(oldPassword, superAdmin.password);
};

superAdminSchema.pre("save", async function (next) {
  const superAdmin = this;
  if (superAdmin.isModified("password")) {
    const salt = await bcrypt.genSalt(10);
    superAdmin.password = await bcrypt.hash(superAdmin.password, salt);
  }
  next();
});

superAdminSchema.pre("save", function (next) {
  if (this.isNew) {
    const { superAdminId } = this;
    if (!superAdminId || typeof superAdminId !== "string") {
      this.superAdminId = uuid();
    }
    this._md = {
      ...this._md,
      createdBy: this.superAdminId,
      createdDtm: new Date(),
    };
  }
  next();
});

const SuperAdmin = mongoose.model("SuperAdmin", superAdminSchema);

module.exports = SuperAdmin;
