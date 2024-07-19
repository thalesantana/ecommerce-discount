import { ProductItemProps } from '../types/product.d';

export function ProductItem(productItem: ProductItemProps) {
  return (
    <div>
      <h2>{productItem.product.name}</h2>
      <p>Valor: ${productItem.product.price}</p>
      <p>Valor com desconto: ${productItem.discountedPrice}</p>
    </div>
  )
}