export interface IRating {
  count?: number
  rate?: number
}

export interface IProduct {
  category?: string
  description?: string
  id?: number
  image?: string
  price?: string
  rating?: IRating
  title?: string
}

export type SelectChangeEvent = React.ChangeEvent<HTMLSelectElement>
