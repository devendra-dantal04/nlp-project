import mongoose from "mongoose";
import { Schema } from "mongoose";

const productShcema = Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    imageUrl: {
        type: String,
        required: true
    },
}, {
    timestamps: true
})


const Product = mongoose.models['Product'] || mongoose.model('Product', productShcema);

module.exports = Product;