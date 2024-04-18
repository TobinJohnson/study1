const express = require('express')
const app = express()
const multi = require('multer')
const fs = require('fs')
const path = require('path')
const multer = require('multer')

// const port = 3001
require('dotenv').config()
const PORT=process.env.PORT
const NodeEnv=process.env.NODE_ENV

const storage=multi.diskStorage({
    destination:(req,file,cb)=>{
        cb(null, 'uploads')
    },
    filename:(req,file,cb)=>{
        cb(null,file.originalname)
    }})



const upload = multer({storage:storage})
app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'/Hello.html'))
}
    )
app.post('/image', upload.single('file'),(req,res)=>{
    if(req.file)
    res.json({"status":"success","message":"file uploaded successfully","fileName":req.file.filename})
    else
    res.json({"status":"failure","message":"file upload failed"})
})
app.get('/image', (req, res) => {res.sendFile(path.join(__dirname,'./ImageUpload.html'))})


app.get('/image/:filename',(req,res)=>{
    const filePath=path.join(__dirname,'uploads',req.params.filename)
    if(fs.existsSync(filePath)){
        res.contentType('image/jpeg')
        res.sendFile(filePath)}
        else
        res.status(404).send("File not found")
    })
app.listen(`${PORT}`,()=>{
    console.log(`server is running on ${PORT}`);
})


