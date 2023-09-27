import mongoose from "mongoose";
import { Schema } from "mongoose";

const reviewShcema = Schema({
    productId: {
        type: mongoose.Schema.ObjectId,
        required: true
    },
    text: {
        type: String,
        required: true,
    },
    reviewTag: {
        type: String,
        enum: ["Negative", "Neutral", "Positive"]
    }
}, {
    timestamps: true
})


const Review = mongoose.models['Review'] || mongoose.model('Review', reviewShcema);

module.exports = Review;