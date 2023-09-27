'use client'

import Card from '@/components/Card'
import { useEffect, useState } from 'react'

export default function Home() {

  const [products, setProducts] = useState([])

  useEffect(() => {

    const fetchProduct = async () => {
      const res = await fetch('/api/product/');
      const data = await res.json();
      setProducts(data);
    }

    if (products.length == 0) {
      fetchProduct();
    }

  }, [products])

  return (
    <div className='px-6 md:px-0 grid grid-cols-1 place-items-center md:grid-cols-2 lg:grid-cols-3 gap-y-8 md:gap-x-8 mx-auto'>
      {products.map((product) => <Card key={product._id} product={product} />)}
    </div>
  )
}
