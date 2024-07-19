export function ApplyDiscount(price: number, discount:  number): number {
  return price - (price * discount / 100);
}