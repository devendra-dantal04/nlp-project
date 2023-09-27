import { db } from "@/config/db";
import Product from "@/models/product";

db();

export async function GET(req) {
    try {

        const url = new URL(req.url);
        const productId = url.searchParams.get('id');

        if (productId) {
            const products = await Product.findById(productId);
            return new Response(JSON.stringify(products), { status: 200 })
        } else {
            const products = await Product.find();
            return new Response(JSON.stringify(products), { status: 200 })
        }

    } catch (error) {
        console.log(error)
        return new Response(JSON.stringify(error), { status: 500 })
    }
}