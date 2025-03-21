import { IMenuList } from '@/widgets/Header/header.interface'

export const menuList: IMenuList[] = [
  {
    name: 'Home',
    path: `${process.env.HOME}`,
  },
  {
    name: 'Catalog',
    path: `${process.env.URL_CATALOG_PRODUCTS_CLOVES}`,
  },
  {
    name: 'Infinity Scroll',
    path: `${process.env.URL_INFINITY_SCROLL}`,
  },
  {
    name: 'Auth',
    path: `${process.env.URL_AUTH}`,
  },
]
