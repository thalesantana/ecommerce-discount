import { useState } from 'react'
import { ProductList } from '../../components/product/productList.component'
import { ProductTotals } from '../../components/product/productTotals.component'

export function Home() {
  // Inicialize o valor como uma string vazia
  const [discountValue, setDiscountValue] = useState<string>('')
  const [inputError, setInputError] = useState<boolean>(false)

  // Lida com a mudança no valor do input
  const handleDiscountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value

    // Converte o valor para número
    const numberValue = parseFloat(value)

    // Verifica se o valor está dentro do intervalo permitido
    if (value === '' || (numberValue >= 0 && numberValue <= 100)) {
      setInputError(false)
      setDiscountValue(value)
    } else {
      setInputError(true)
    }
  }

  // Converte o valor do desconto para número, tratando o campo vazio como 0
  const discountNumber = parseFloat(discountValue) || 0

  return (
    <div className="bg-default-hex flex items-center justify-center min-h-screen">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-4xl">
        <div className="relative align-center p-4 pl-0">
          <label className="font-bold text-blue-500">
            Cálculo de Desconto:
          </label>
        </div>
        <div className="flex justify-between items-start">
          <div className="w-2/3">
            <ProductList discount={discountNumber} />
          </div>
          <div className="w-1/3">
            <div className="flex flex-col items-start pl-[10%] pt-[88%]">
              <label className="block text-lg font-semibold mb-2">Valor de Desconto:</label>
              <div className="relative flex mb-4">
                <input
                  type="number"
                  value={discountValue}
                  onChange={handleDiscountChange}
                  min={0}
                  max={100}
                  className={`border rounded-md px-4 py-2 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2w-full ${inputError ? 'border-red-500' : 'border-gray-300'}`}
                />
                <span className="absolute inset-y-0 right-4 flex items-center text-gray-500">%</span>
              </div>
              {inputError && <span className="text-red-500">Permitido apenas valores de 0-100</span>}
              <ProductTotals discount={discountNumber} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
