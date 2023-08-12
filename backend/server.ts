import express from 'express';
import { Category } from './seed.ts';
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import Multer from 'multer';
import multer from 'multer';

mongoose.connect('mongodb://localhost:27017/categories');

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(bodyParser.json({ limit: '50mb' }));
app.use(
  bodyParser.urlencoded({
    limit: '50mb',
    extended: true,
    parameterLimit: 50000,
  })
);
app.use(cookieParser());
app.use(express.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

//boyuk hecimli resimleri endire bilmek ücündür
const storage: Multer.StorageEngine = multer.memoryStorage();
const upload = Multer({
  storage,
});

app.get('/categories/category', async (req, res) => {
  try {
    const categories = await Category.find();
    res.send(categories);
  } catch (error) {
    console.log(error);
  }
});

app.post('/categories/category', async (req, res) => {
  try {
    const newCategory = await Category.create(req.body);
    res.status(200).json(newCategory);
  } catch (error) {
    console.log(error);
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
