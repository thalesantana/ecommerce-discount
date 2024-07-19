import { ProductItemProps } from './product.d';

export function ProductItem(productItem: ProductItemProps) {
  return (
    <div className="flex items-center border border-gray-200 rounded-lg p-4 mb-4 shadow-sm">
      <img
        src="ecommerce-svgrepo-com.svg"
        alt={productItem.product.name}
        className="w-16 h-16 object-cover rounded-md mr-4"
      />
      <div className="flex flex-col">
        <h2 className="font-bold">{productItem.product.name}</h2>
        <p>Valor: ${productItem.product.price.toFixed(2)}</p>
        <p>Valor com desconto: ${productItem.discountedPrice.toFixed(2)}</p>
      </div>
    </div>
  );
}