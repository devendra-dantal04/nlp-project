import { db } from "@/config/db";
import Review from "@/models/review";

db();

export async function POST(req) {
    try {
        const { text, productId } = await req.json();

        const response = await fetch(process.env.BACKEND_API, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': process.env.BACKEND_API
            },
            body: JSON.stringify({ text }),
        });

        const result = await response.json();

        if (result) {
            const review = await Review.create({
                productId,
                text,
                reviewTag: result.result
            })
        }

        return new Response(JSON.stringify("OK"), { status: 200 })
    } catch (err) {
        console.log(err)
        return new Response(JSON.stringify(err), { status: 500 })
    }
}