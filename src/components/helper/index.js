import Image from "next/image";
import Link from "next/link";

export const capitalize = (str) => {
  let result = str.charAt(0).toUpperCase() + str.slice(1);
  return result;
}

export function convertAndCapitalize(str) {
  return str
    .split('-') // Split the string by hyphens
    .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize the first letter of each word
    .join(' '); // Join the words with spaces
}

export const splitPeople = (string) => {
  if (string) {
    return string.split(',')
  } else {
    return null
  }
}

export const findBlog = (blogs, id) => {
  return blogs.find(blog => blog.id === id)
}
export const findProduct = (products, id) => {
  let productsList = []
  products.map(product => {
    product.items.map((item) => {
      productsList.push(item)
    })
  })

  
  return productsList.find(product => product.id === id)
}


export const handleBody = (body) => {
  return body?.map((item, index) => (
    <>
      {item.text && <p key={index} className="text-xl font-base mb-4 text-[#005770]">{item.text}</p>}
      {item.linkText && <Link target="_blank" key={index} href={item.href} className="text-xl font-base mb-4 pb-4 text-[#238aa7]">{item.linkText}</Link>}
      {item.subtitle && <h3 key={index} className="text-xl font-semibold mb-4 text-[#005770]">{item.subtitle}</h3>}
      {item.image && <Image key={index} width={3000} height={800} src={item.image} alt={'urun resmi'} className="w-full h-auto mt-10" />}
      {item.bulletpoints && <div key={index} className="text-xl font-base mb-4 text-[#005770]">{
        item.bulletpoints.map((bullet, index) => (
          <li key={index} className="list-disc list-inside">{bullet}</li>
        ))
      }</div>}
    </>
  ))
}