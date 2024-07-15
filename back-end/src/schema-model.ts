import mongoose, { Schema, Document } from 'mongoose';

// Product schema
interface ProductDoc extends Document {
    name: string;
    category: string;
    price: number;
    file: string;
    description: string;
}

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    category: { type: String, required: true },
    price: { type: Number, required: true },
    file: { type: String, required: true }, // Store the file path
    description: { type: String, required: true },
});

const Product = mongoose.model<ProductDoc>('Product', productSchema);

// User schema
interface User extends Document {
    email: string;
    password: string;
}

const userSchema: Schema = new Schema({
    email: { type: String, required: true },
    password: { type: String, required: true },
});

const User = mongoose.model<User>('User', userSchema);

export { Product, User };
