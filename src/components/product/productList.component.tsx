
import { productsMock } from '../../mocks/productsListMock';
import { applyDiscount } from '../../utils/applyDiscount';
import {  DiscountProps } from './product.d';
import { ProductItem } from './productItem.component';

export function ProductList(productList: DiscountProps) {
  return (
    <div>
      {productsMock.map((product) => (
        <ProductItem 
          key={product.id}
          product={product}
          discountedPrice={applyDiscount(product.price, productList.discount)}
        />
      ))}
    </div>
  )
}