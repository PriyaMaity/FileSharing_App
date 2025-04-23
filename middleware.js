const multer = require("multer");
const { v4: uuidv4 } = require("uuid");
const fs = require("fs");
const path = require("node:path");

const filePath = process.env.UPLOADS_DIR
  ? process.env.UPLOADS_DIR
  : path.join(__dirname, "uploadedFiles");

if (!process.env.UPLOADS_DIR && !fs.existsSync(filePath)) {
  fs.mkdirSync(filePath, { recursive: true });
}

const storage = multer.diskStorage({
  destination: filePath,
  filename: function (req, file, cb) {
    // console.log(file, "file");
    const fileExtension = path.extname(file.originalname);
    const fileName = uuidv4() + fileExtension;
    cb(null, fileName);
  },
});
const upload = multer({
  storage: storage,
});

module.exports = upload;
