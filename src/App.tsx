import { useState } from 'react'
import { ProductList } from './modules/productList.component'

export function App() {
  const [discount, setDiscount] = useState<number>(0)

  const handleDiscountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDiscount(parseFloat(event.target.value))
  }

  return (
    <div className="mainApp flex flex-col items-center justify-center h-screen">
      <label className="text-3xl font-bold underline  text-blue-500">
        Informe a porcentagem de desconto:
      </label>
      <div className="relative inline-block">
        <input 
          type="number" 
          value={discount}
          onChange={handleDiscountChange}
          className="border border-gray-300 rounded-md px-4 py-2 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>
      <ProductList discount={discount}/>
    </div>
  )
}