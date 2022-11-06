import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import carritoCard from '../public/imgs/carritoCard.svg'
import Link from 'next/link'
import { useRouter } from 'next/router'


function Card({ name, price, img, id }) {
  const router = useRouter()
  const [pathLink, setPathLink] = useState(`/products/${id}`)

  useEffect(()=>{
    if (!router.query) {
      setPathLink(`/${id}`)
    }
  },[])

  return (
    <div key={id} className='flex flex-col max-w-[320px]  hover:border-2 m-6' >
      <div className='relative'>
        <Image src={ img } alt={'imagen del producto'} />
      </div>
      <div>
        <h3 className='text-bold text-xl'><Link href={pathLink}>{name}</Link></h3>
      </div>
      <div className='flex justify-between relative'>
        <p className='text-[#7B7B7B]' >$ {price}</p>
        <Image src={ carritoCard }/>
      </div>
    </div>
  )
}

export default Card
