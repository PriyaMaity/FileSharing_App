const express = require("express");
const router = express.Router();
const upload = require("../middleware");
const fileController = require("../controllers/fileController");

router.post(
  "/api/file/upload",
  upload.single("profilePicture"),
  fileController.fileUpload
);

router.post("/api/file/share", fileController.fileShare);

router.get("/download/:id", fileController.fileDownload);

module.exports = router;
