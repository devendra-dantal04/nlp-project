/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { uploadFiles } from "@/lib/uploadthing";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

function page() {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [selectedFile, setSelectedFile] = useState(null)
    const router = useRouter();

    const addProduct = async () => {
        if (!title || !description) {
            alert("Please fill all the details");
        }

        if (!selectedFile) {
            alert("Please upload the image");
        }

        const imageRes = await uploadFiles({ files: [selectedFile], endpoint: 'imageUploader' });

        const data = {
            title,
            description,
            imageUrl: imageRes[0].fileUrl
        }

        const res = await fetch('/api/product/create', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })

        const result = await res.json();

        if (!result) {
            toast('Product not added.', {
                type: 'error'
            })
            return
        } else {
            toast('Product added successfully.', {
                type: 'success'
            })

            router.push('/')

            return
        }
    }


    return <div className="w-[100%] flex items-center justify-center">
        <div className="bg-slate-700 border-none outline-none rounded-xl w-[90%] md:max-w-lg h-fit p-4">
            <h3 className="text-2xl font-bold">Add Prodcut</h3>
            <label htmlFor="title" className="font-semibold text-slate-100 mt-4 mb-2 block">Product Title</label>
            <input id="title" type="text" placeholder="Product title" className="input input-bordered input-warning w-full text-gray-800" onChange={(e) => setTitle(e.target.value)} value={title} />
            <label htmlFor="title" className="font-semibold text-slate-100 mt-4 mb-2 block">Description</label>
            <input id="title" type="text" placeholder="Description" className="input input-bordered input-warning w-full text-gray-800" onChange={(e) => setDescription(e.target.value)} value={description} />
            <input type="file" className="file-input file-input-bordered file-input-warning w-full mt-6 text-gray-800" id="file-input" onChange={(e) => setSelectedFile(e.target.files[0])} />
            <button className="btn btn-warning mt-6 w-full" onClick={() => addProduct()}>Add Product</button>
        </div>
    </div>;
}

export default page;
