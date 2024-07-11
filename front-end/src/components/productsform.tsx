import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { uploadProduct } from '../redux/productSlice';
import { RootState } from '../redux/store';

const ProductForm = () => {
    const dispatch = useDispatch();
    const { loading, error, success } = useSelector((state: RootState) => state.product);
    const [file, setFile] = useState<File | null>(null);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const target = e.target as typeof e.target & {
            name: { value: string };
            category: { value: string };
            price: { value: string };
            file: { files: FileList };
            description: { value: string };
        };

        const formData = new FormData();
        formData.append('name', target.name.value);
        formData.append('category', target.category.value);
        formData.append('price', target.price.value);
        formData.append('description', target.description.value);

        if (file) {
            formData.append('file', file);
        }

        try {
            await axios.post('http://localhost:3001/products', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            dispatch(uploadProduct(formData) as any); // Optional: Update your Redux state if necessary
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <section className="py-2 text-gray-800 mx-auto flex justify-center border px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full bg-white p-6 rounded-lg shadow-lg sm:max-w-lg lg:max-w-2xl">
                <h2 className="text-2xl font-bold mb-4">Upload Product</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                        <input type="text" id="name" name="name" className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required />
                    </div>
                    <div>
                        <label htmlFor="category" className="block text-sm font-medium text-gray-700">Category</label>
                        <input type="text" id="category" name="category" className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required />
                    </div>
                    <div>
                        <label htmlFor="price" className="block text-sm font-medium text-gray-700">Price</label>
                        <input type="number" id="price" name="price" className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required />
                    </div>
                    <div>
                        <label htmlFor="file" className="block text-sm font-medium text-gray-700">File</label>
                        <input type="file" id="file" name="file" className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" onChange={(e) => setFile(e.target.files?.[0] || null)} required />
                    </div>
                    <div>
                        <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
                        <textarea id="description" name="description" className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required></textarea>
                    </div>
                    <button type="submit" disabled={loading} className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        Submit
                    </button>
                    {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
                    {success && <p className="mt-2 text-sm text-green-600">Product uploaded successfully!</p>}
                </form>
            </div>
        </section>
    );
};

export default ProductForm;
