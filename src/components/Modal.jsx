'use client'

import React, { useState } from "react";
import { useRouter } from 'next/navigation'


function Modal({ productId, closeModal }) {

    const router = useRouter();
    const [description, setDescription] = useState('');


    const makeReview = async () => {

        await fetch('/api/review/create', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ text: description, productId: productId })
        })

        window.location.reload()
        closeModal();
    }


    return <div className="absolute top-0 left-0 bg-zinc-900/20 h-[100vh] w-[100vw] flex items-center justify-center z-30">
        <div className="bg-slate-700 border-none outline-none rounded-xl w-[90%] md:max-w-lg h-fit p-4 relative">
            <div className="absolute right-2 top-2 cursor-pointer" onClick={() => closeModal()}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </div>
            <h3 className="text-2xl font-bold">Review</h3>
            <label htmlFor="title" className="font-semibold text-slate-100 mt-4 mb-2 block">Description</label>
            <textarea onChange={(e) => setDescription(e.target.value)} value={description} className="text-gray-900 font-semibold textarea textarea-warning w-full" placeholder="Your thought about product..."></textarea>
            <button className="btn btn-warning mt-6 w-full" onClick={() => makeReview()}>Review</button>
        </div>
    </div>;
}

export default Modal;
