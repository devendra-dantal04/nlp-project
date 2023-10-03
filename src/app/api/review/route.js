import { db } from "@/config/db";
import Review from "@/models/review";

db();

export async function GET(req) {
    try {

        const url = new URL(req.url);
        const productId = url.searchParams.get('id');


        let reviews = []
        const reviewCounts = {
            Positive: 0,
            Neutral: 0,
            Negative: 0
        };

        if (productId) {
            reviews = await Review.find({ productId });
        } else {
            return new Response("Pls provide product id", { status: 400 })
        }

        if (reviews.length > 0) {
            const result = await Review.aggregate([
                {
                    $match: {
                        productId: productId
                    }
                },
                {
                    $group: {
                        _id: "$reviewTag",
                        count: { $sum: 1 }
                    }
                }
            ]).exec();


            // Process the aggregation result and populate the reviewCounts object
            result.forEach(item => {
                reviewCounts[item._id] = item.count;
            });

        }

        return new Response(JSON.stringify({ reviews, reviewCounts }), { status: 200 })

    } catch (error) {
        console.log(error)
        return new Response(JSON.stringify(error), { status: 500 })
    }
}