import { db } from "@/config/db";
import Product from "@/models/product"

db();

export async function POST(req) {
    try {

        const body = await req.json();

        const product = await Product.create({
            title: body.title,
            description: body.description,
            imageUrl: body.imageUrl
        })

        return new Response(JSON.stringify(product), { status: 200 })
    } catch (err) {
        console.log(err)
        return new Response(JSON.stringify(err), { status: 500 })
    }
}