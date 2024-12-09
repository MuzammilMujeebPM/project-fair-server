const multer = require('multer')

const storage = multer.diskStorage({
    destination : (req,file,callback)=>{
        callback(null,'./upload')
    },
    filename: (req,file,callback)=>{
        callback(null,`image-${Date.now()}-${file.originalname}`)
    }
})

const multerMiddleware = multer({
    storage
})

module.exports = multerMiddleware