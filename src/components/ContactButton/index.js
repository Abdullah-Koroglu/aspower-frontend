import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ContactButton = () => {
  return (
    <Link href={'https://api.whatsapp.com/send?phone=1234567890'}>
      <Image className="fixed right-4 bottom-4 w-20 h-20" src="/wp.png" alt="Contact Button" width={200} height={200} />
    </Link>
  )
}

export default ContactButton