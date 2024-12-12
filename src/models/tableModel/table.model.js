const mongoose = require("mongoose");
const { v4: uuid } = require("uuid");
const toJSON = require("../plugins/toJSON.plugin");
const paginate = require("../plugins/paginate.plugin");

const tableSchema = new mongoose.Schema({
  tableId: {
    type: String,
    unique: true,
  },
  userId: {
    type: String,
  },
  tableName: {
    type: String,
  },
  columns: [
    {
      name: {
        type: String,
      },
      columnId: {
        type: String,
      },
    },
  ],
  rows: [
    {
      name: {
        type: String,
      },
      rowId: {
        type: String,
      },
    },
  ],
  variables: [
    {
      value: {
        type: String,
      },
      columnId: {
        type: String,
      },
      columnName: {
        type: String,
      },
      rowId: {
        type: String,
      },
      rowName: {
        type: String,
      },
      position: {
        type: String,
      },
    },
  ],
});

// add plugin that converts mongoose to json
tableSchema.plugin(toJSON);
tableSchema.plugin(paginate);

tableSchema.pre("save", function (next) {
  if (this.isNew) {
    const { tableId } = this;
    if (!tableId || typeof tableId !== "string") {
      this.tableId = uuid();
    }
    this._md = {
      ...this._md,
      createdBy: this.tableId,
      createdDtm: new Date(),
    };
  }
  next();
});

const Table = mongoose.model("Table", tableSchema);

module.exports = Table;
