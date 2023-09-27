"use client"

import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";

function Navbar() {
    const router = useRouter();

    return <nav className="h-[80px] w-full px-8 py-6 bg-transparent  backdrop-blur-[10px] fixed top-0 flex items-center justify-between border-b-[0.5px] border-b-zinc-700 z-10">
        <div className="h-5 font-bold text-zinc-200 text-lg md:text-xl">
            <h2 className="cursor-pointer" onClick={() => router.push('/')}>WeKnow</h2>
        </div>
        <ul className="flex items-center gap-6">
            <Link className="text-zinc-300 text-xs md:text-sm font-semibold cursor-pointer" href="/">Home</Link>
            <Link className="text-zinc-300 text-xs md:text-sm font-semibold cursor-pointer" href="/about">About</Link>
            <Link className="text-zinc-300 text-xs md:text-sm font-semibold cursor-pointer" href="/product/add">Add</Link>
        </ul>
    </nav>;
}

export default Navbar;
