export interface Product {
  id: number
  name: string
  price: number
}

export interface ProductItemProps {
  product: Product
  discountedPrice: number
}

export interface DiscountProps {
  discount: number
}