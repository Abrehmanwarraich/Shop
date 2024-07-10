import express from 'express';

const app = express();


app.get('/', (req, res) => {
  res.send('Hello, TypeScript with Node.js!');
});
// const connectDB = async()=>{
//     mongoose.connect('mongodb://localhost:27017/Shop');
//     const productSchema = new mongoose.Schema({});
//     const product =mongoose.model("products,productSchema");
//     const data =await product.find();
//     console.warn(data); 
// }
// connectDB();
app.listen(3001, function () {
  console.log("app is listing on 3001 port");
});