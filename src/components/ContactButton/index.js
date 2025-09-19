import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ContactButton = () => {
  return (
    <Link href={'tel:08504743562'}>
      <Image className="transtion-all drop-shadow-xl hover:opacity-85 hidden md:block fixed right-4 bottom-4 w-16 h-16 rounded-full bg-white" src="/wp.png" alt="Contact Button" width={200} height={200} />
    </Link>
  )
}

export default ContactButton