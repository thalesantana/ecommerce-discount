import { calcTotal } from '../../utils/calcTotal'
import { productsMock } from '../../mocks/productsListMock'
import { DiscountProps } from './product'

export function ProductTotals(value: DiscountProps) {
  const totalValue = calcTotal(productsMock, value.discount)
  return (
    <div>
      <label className="block mb-4">Valor à  pagar: ${totalValue.toFixed(2)}</label>
    </div>
  )
}