'use client'

import Image from "next/image";
import React from "react";
import { useRouter, useParams } from "next/navigation"


function Card({ product }) {

    const router = useRouter();

    return <div className="w-full max-w-[22rem] bg-[#2a2626] h-[400px] rounded-xl overflow-hidden">
        <div className="w-full h-[220px] object-cover overflow-hidden">
            <Image src={product.imageUrl} className="w-full h-full object-cover" width={100} height={100} alt="product image" />
        </div>
        <div className="w-full p-4 flex flex-col h-full">
            <h2 className="card-title">{product.title}</h2>
            <p className="block line-clamp-2 mb-6">{product.description.length > 50 ? product.description.slice(0, 50) + "..." : product.description}</p>
            <div className="card-actions justify-end">
                <button className="btn btn-primary" onClick={() => router.push(`/product/${product._id}`)}>Review Now</button>
            </div>
        </div>
    </div>
}

export default Card;
