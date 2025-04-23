const mongoose = require("mongoose");

const fileSchema = new mongoose.Schema(
  {
    fileName: {
      type: String,
    },
    originalName: {
      type: String,
    },
    filePath: {
      type: String,
    },
    size: {
      type: Number,
    },
    userName: {
      type: String,
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
    },
    access: {
      type: String,
      enum: ["private", "public", "shared"],
    },

    description: {
      type: String,
    },
    version: {
      type: Number,
      default: 1,
    },

    encryptionKey: {
      type: String,
    },
    downloadCount: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

const fileModel = mongoose.model("fileModel", fileSchema);
module.exports = fileModel;
