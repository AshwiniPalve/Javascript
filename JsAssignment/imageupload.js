const express=require('express');
const app=express();
const multer=require('multer')
const path=require('path');
//set storage engine
const storage=multer.diskStorage({
    destination:"",
    filename:(req,file,cb)=>{
        return cb(
            null,
            `${file,filename}_${Date.now()}${path.extname(file.originalname)}`
        );

    }
});
const upload=multer({
    
})