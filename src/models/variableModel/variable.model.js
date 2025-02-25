const mongoose = require("mongoose");
const { v4: uuid } = require("uuid");
const toJSON = require("../plugins/toJSON.plugin");
const paginate = require("../plugins/paginate.plugin");

const variableSchema = new mongoose.Schema(
  {
    variablesId: {
      type: String,
      unique: true,
    },
    userId: {
      type: String,
    },
    variables: [
      {
        type: {
          type: String,
        },
        variableId: {
          type: String,
        },
        variableName: {
          type: String,
        },
        value: {
          type: String,
        },
        sourceOfVariable: {
          type: String,
        },
        variableNameInSource: {
          type: String,
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
variableSchema.plugin(toJSON);
variableSchema.plugin(paginate);

variableSchema.pre("save", function (next) {
  if (this.isNew) {
    const { variablesId } = this;
    if (!variablesId || typeof variablesId !== "string") {
      this.variablesId = uuid();
    }
    this._md = {
      ...this._md,
      createdBy: this.variablesId,
      createdDtm: new Date(),
    };
  }
  next();
});

const Variable = mongoose.model("Variable", variableSchema);

module.exports = Variable;
