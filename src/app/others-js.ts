const handlerSortRating = () => {
  let sortRating = sortProducts.sort(sortByRating)
  return sortRating
}

const handlerSortPrice = () => {
  const sortRating = sortProducts.sort(sortByPrice)
  return sortRating
}

export const handlerSort = (typeSort: HTMLSelectElement): void => {
  console.log(typeSort.target.value, 'value')
  let sortRating
  if (typeSort.target.value === '1') {
    sortRating = handlerSortRating()
  } else {
    sortRating = handlerSortPrice()
  }
  setSortProduct(sortRating)
}

// setSortProduct(data)

export const getCarts = async (): Promise<void> => {
  setLoader(true)
  const { data } = await axiosFetch.get<ICarts[]>(`${process.env.API_URL}/carts?limit=5`)
  setLoader(false)
  setCarts(data)
}
