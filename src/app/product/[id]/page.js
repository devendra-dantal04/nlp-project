/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import ChartComponent from "@/components/Chart";
import Modal from "@/components/Modal";
import { useFetchProductAndReview } from "@/hooks/useFetchProductAndReview";



const page = () => {

    const { id } = useParams();
    const [isModal, setIsModal] = useState(false);

    const [product, reviews, reviewCount] = useFetchProductAndReview(id);

    const closeModal = () => {
        setIsModal(false);
    }

    const openModal = () => {
        setIsModal(true);
    }


    return <>
        <div className="w-[90%] md:max-w-full lg:max-w-7xl mx-auto flex flex-col">
            <div className=" w-full grid grid-cols-1 lg:grid-cols-2 bg-[#1D232A] p-6 rounded-xl mx-auto">
                <div className=" w-full lg:w-3/4 mx-auto ">
                    <Image width={100} height={100} className="w-full h-32 lg:h-48 object-fit rounded-lg border-2 border-slate-400 shadow-md shadow-slate-800 object-fill" src={product.imageUrl} alt={product.title} />
                    <div className="py-4 px-2">
                        <h2 className="text-lg lg:text-xl font-bold mb-2">{product && product.title}</h2>
                        <p className="text-sm lg:text-lmd text-slate-200">{product && (product.description?.length > 150 ? product.description.slice(0, 150) + "..." : product.description)}</p>
                    </div>
                </div>
                <div className="w-full flex justify-center items-center border-t-2 border-t-slate-700 md:border-t-0 md:border-l-2 md:border-l-slate-700">
                    <ChartComponent reviewCount={reviewCount} />
                </div>
            </div>

            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 bg-[#1D232A] p-6 rounded-xl mt-2 gap-4 h-fit max-h-[450px] overflow-y-auto">
                {reviews.length > 0 && (
                    reviews.map(review => (
                        <div key={review._id} className="p-4 bg-gray-700 rounded-lg hover:bg-gray-800/90 transition-all duration-150 h-28">
                            <h3 className="mb-2 line-clamp-2">{review.text}</h3>
                            <p className="text-sm">Review: <span className="font-semibold">{review.reviewTag}</span></p>
                        </div>
                    ))
                )}

                <div className="p-6 bg-green-800/70 rounded-lg hover:bg-green-800/90 transition-all duration-150 flex items-center justify-center h-28" onClick={() => setIsModal(true)}>
                    + Add Review
                </div>
            </div>
        </div>

        {isModal &&
            (
                <div className="absolute top-0 left-0 w-full h-[100vh]">
                    <Modal productId={id} closeModal={closeModal}
                    />
                </div>
            )
        }

    </>
}

export default page;
