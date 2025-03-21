export interface IProductCart {
  productId: number
  quantity: number
}

export interface ICartsDate {
  id: number
  userId: number
  date: string
  product: IProductCart[]
  __v: number
}
