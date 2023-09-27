import mongoose from "mongoose";

export const db = async () => {
    try {
        mongoose.set("strictQuery", true);
        const conn = await mongoose.connect(process.env.MONGO_URI);
    } catch (err) {
        console.log(`Error ${err.message}`)
    }
}