import { products } from '../mocks/productsListMock';
import {  ProductListProps } from '../types/product.d';
import { ApplyDiscount } from '../utils/applyDiscount';
import { ProductItem } from './productItem.component';

export function ProductList(productList: ProductListProps) {
  return (
    <div>
      {products.map((product) => (
        <ProductItem 
          key={product.id}
          product={product}
          discountedPrice={ApplyDiscount(product.price, productList.discount)}
        />
      ))}
    </div>
  )
}