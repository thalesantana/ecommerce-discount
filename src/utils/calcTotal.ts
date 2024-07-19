import { Product } from '../components/product/product';
import { applyDiscount } from './applyDiscount';

export function calcTotal(products: Product[],  discount:  number): number {
  const sumTotal = products.reduce((sum, product) => sum + product.price, 0);
  return applyDiscount(sumTotal, discount)
}
