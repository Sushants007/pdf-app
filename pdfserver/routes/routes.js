const express = require('express');
const Model = require('../datamodel/schema');
const router = express.Router();
const fs=require('fs');

const multer = require('multer');
const storage = multer.memoryStorage();
const upload = multer({ storage });

router.post('/upload', upload.single('pdf'), (req, res) => {
    const file = new Model({ pdfData: req.file.buffer });
  
    file.save((error) => {
        if (error) {
          res.status(500).send(error);
        } else {
          res.send({ message: 'File uploaded successfully' });
        }
      });
  });
  router.get("/pdf/:id", async (req, res) => {
    try {
      const pdf = await Model.findById(req.params.id);
      res.send(pdf);
    } catch (err) {
      res.status(500).send(err);
    }
  });
  router.get("/pdfs", async (req, res) => {
    try {
      const pdfs = await Model.find();
      res.send(pdfs);
    } catch (err) {
      res.status(500).send(err);
    }
  });




module.exports = router;