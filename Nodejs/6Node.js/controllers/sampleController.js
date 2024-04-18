const fs = require('fs')
const path = require('path')
const multer = require('multer');
const { log } = require('console');
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads');
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
});
const upload = multer({ storage: storage })

exports.home = (req, res, next) => {
    res.sendFile(path.join(__dirname, '../Hello.html'))
}

exports.UploadPage = (req, res, next) => {
    res.sendFile(path.join(__dirname, '../images.html'))
}

exports.ImageUpload = (req, res) => {
    if (req.file) {
        res.json({ "status": "success", "message": "file uploaded successfully", "fileName": req.file.filename })
    }
    else
        res.json({ "status": "failure", "message": "file upload failed" })
}

exports.getUploadImage = (req, res) => {
    const fileName = path.resolve("uploads", req.params.filename);
    if (fs.existsSync(fileName)) {
        res.contentType('image/jpeg')
        res.sendFile(fileName)
    }
    else
        res.status(404).send("File not found")
}