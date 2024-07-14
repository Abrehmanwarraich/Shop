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
      // cb(null, Date.now() + "-" + file.originalname);
      cb(null, Date.now() + '-' + file.originalname);

    },
  }),
});

// ------------------------api post product from productsform---------------
app.post('/products', upload.single('file'), async (req, res) => {
  const { name, category, price, description } = req.body;
  const file = req.file ? req.file.filename : null;

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
// ------------------------api get product to home---------------
app.get('/products', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    const error = err as Error; // Type assertion
    res.status(500).json({ message: error.message });
  }
});
// ----------------------------api get prduct by id to productview-----------
app.get('/products/:id', getProductById);
async function getProductById(req: Request, res: Response) {
  const { id } = req.params;

  try {
    const product = await Product.findById(id);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.json(product);
  } catch (err) {
    const error = err as Error; // Type assertion
    res.status(500).json({ message: error.message });
  }
}


const startServer = async () => {
  await connectDB();
  app.listen(3001, () => {
    console.log(`Server running at http://localhost:3001`);
  });
};

startServer();
