/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    API_URL: process.env.API_URL,
    API_URL_PRODUCTS: process.env.API_URL_PRODUCTS,
    URL_HOME: process.env.URL_HOME,
    URL_CATALOG_PRODUCTS_CLOVES: process.env.URL_CATALOG_PRODUCTS_CLOVES,
    URL_INFINITY_SCROLL: process.env.URL_INFINITY_SCROLL,
    URL_AUTH: process.env.URL_AUTH,
  },
}

export default nextConfig
