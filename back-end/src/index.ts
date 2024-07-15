import express, { Request, Response } from 'express';
import cors from 'cors';
import multer from 'multer';
import connectDB from './db';
import { Product, User } from './schema-model'; // Correctly import Product and User models

const app = express();
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("imagesupload"));

// Use multer for image upload
const upload = multer({
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "imagesupload/");
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + '-' + file.originalname);
    },
  }),
});

// API endpoint to post product from products form
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

// API endpoint to get products for home
app.get('/products', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err: any) { // Explicitly specify the type of 'err' as 'any'
    res.status(500).json({ message: err.message });
  }
});

// API endpoint to get product by id for product view
app.get('/products/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const product = await Product.findById(id);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.json(product);
  } catch (err: any) { // Explicitly specify the type of 'err' as 'any'
    res.status(500).json({ message: err.message });
  }
});

// API endpoint for user registration (signup)
app.post('/api/signup', async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Create a new user
    const newUser = new User({ email, password });
    await newUser.save();

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while registering the user' });
  }
});

// API endpoint for user login
app.post('/api/login', async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    // Check if the user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Validate password
    if (user.password !== password) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Login successful
    res.status(200).json({ message: 'Login successful' });
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while logging in' });
  }
});

const startServer = async () => {
  await connectDB();
  app.listen(3001, () => {
    console.log(`Server running at http://localhost:3001`);
  });
};

startServer();
