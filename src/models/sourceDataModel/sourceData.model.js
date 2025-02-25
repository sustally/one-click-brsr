const mongoose = require("mongoose");
const { v4: uuid } = require("uuid");
const toJSON = require("../plugins/toJSON.plugin");
const paginate = require("../plugins/paginate.plugin");

const sourceDataSchema = new mongoose.Schema(
  {
    sourceDataId: {
      type: String,
      unique: true,
    },
    userId: {
      type: String,
    },
    sourceName: {
      type: String,
    },
    sourceData: {
      type: Object,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
sourceDataSchema.plugin(toJSON);
sourceDataSchema.plugin(paginate);

sourceDataSchema.pre("save", function (next) {
  if (this.isNew) {
    const { sourceDataId } = this;
    if (!sourceDataId || typeof sourceDataId !== "string") {
      this.sourceDataId = uuid();
    }
    this._md = {
      ...this._md,
      createdBy: this.sourceDataId,
      createdDtm: new Date(),
    };
  }
  next();
});

const SourceData = mongoose.model("SourceData", sourceDataSchema);

module.exports = SourceData;
