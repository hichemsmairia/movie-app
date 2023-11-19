const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: "../movies-app/public/images",
  // ....../images/2500.jpg
  //vers le dossier movies-app de notre frontend
  filename: function (req, file, callback) {
    callback(null, Date.now() + path.extname(file.originalname));
  },
});
//selfie.jpg

const upload = multer({ storage });
//un champ de form data appelé "image"

module.exports = upload.single("image");
