import { useEffect, useState } from "react"

export const useFetchProductAndReview = (id) => {
    const [product, setProduct] = useState({});
    const [reviews, setReviews] = useState([]);
    const [reviewCount, setReviewCount] = useState({ Positive: 0, Neutral: 0, Negative: 0 })

    useEffect(() => {
        async function fetchData() {
            const data = await fetch(`/api/product?id=${id}`);
            setProduct(await data.json())

            const reviews = await fetch(`/api/review?id=${id}`)
            const reviewResult = await reviews.json()
            setReviews(reviewResult.reviews)
            setReviewCount(reviewResult.reviewCounts)
        }

        fetchData();
    }, [id]);


    return [product, reviews, reviewCount]
}