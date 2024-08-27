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