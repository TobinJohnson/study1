const express = require('express')
const app = express()
const router= express.Router()
const sampleController = require('../controllers/sampleController')
const multer = require('multer')
const index = require('../index.js')

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads');
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
        // let fileName=req.file.filename 
    }
    
});
const upload=multer({storage: storage})

router.get('/',sampleController.home)
router.get('/upload',sampleController.UploadPage)
router.post('/upload',upload.single('file'),sampleController.ImageUpload)
router.get(`/uploadImage/:filename`,sampleController.getUploadImage)

module.exports = router