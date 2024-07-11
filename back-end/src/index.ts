import express, { Request, Response } from 'express';
import cors from 'cors';
import multer from 'multer';
import connectDB from './db';
import Product from './schema-model'; // Correctly import the Product model

const app = express();
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("imagesupload"));

// ----------use multer for image upload-----------
const upload = multer({
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "imagesupload/");
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + "-" + file.originalname);
    },
  }),
});

// API Endpoint to handle form submissions
app.post('/api/products', upload.single('file'), async (req, res) => {
  const { name, category, price, description } = req.body;
  const file = req.file ? req.file.path : null;

  try {
    const product = new Product({
      name,
      category,
      price,
      file,
      description,
    });

    await product.save();
    res.status(201).json({ message: 'Product uploaded successfully!' });
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while uploading the product.' });
  }
});

const startServer = async () => {
  await connectDB();
  app.listen(3001, () => {
    console.log(`Server running at http://localhost:3001`);
  });
};

startServer();
