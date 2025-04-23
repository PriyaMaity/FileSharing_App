const fileModel = require("../models/fileModel");

const fileUpload = async (req, res) => {
  console.log(req.file, "req");
  try {
    await fileModel.create({
      fileName: req.file.filename,
      originalName: req.file.originalname,
      filePath: req.file.path,
      size: req.file.size,
      userName: req.body.userName || "anonymous@example.com",
    });
    res.status(200).json({
      status: true,
      message: "File uploaded successfully",
    });
  } catch (err) {
    console.log(err, "Error in uploading the file");
    res.status(500).json({
      status: false,
      message: "Server error during upload",
    });
  }
};

const fileShare = async (req, res) => {
  try {
    const { id, sharedWith, access } = req.body;
    const update = {};
    if (access && ["private", "public", "shared"].includes(access)) {
      update.access = access;
    }
    if (Array.isArray(sharedWith)) {
      update.sharedWith = sharedWith;
    }
    const file = await fileModel.findByIdAndUpdate(id, update, { new: true });

    if (!file) {
      res.status(400).json({
        success: false,
        message: "File not Found in db",
      });
      return;
    }
    res.status(200).json({
      message: "File Found successfully",
      data: `/download/${file._id}`,
    });
  } catch (err) {
    console.log("Error in sharing the file", err);
    res.status(500).json({
      status: false,
      message: "Server error during share",
    });
  }
};

const fileDownload = async (req, res) => {
  try {
    const { id } = req.params;
    const file = await fileModel.findByIdAndUpdate(
      id,
      { $inc: { downloadCount: 1 } },
      { new: true }
    );
    if (!file) {
      res.end("Invalid ID");
      return;
    }
    console.log(file, "id");
    res.download(file.filePath, file.originalName);
  } catch (err) {
    console.log("Error in downloading the file", err);
    res.status(500).json({
      status: false,
      message: "Server error during dpwnload",
    });
  }
};

module.exports = { fileUpload, fileShare, fileDownload };
