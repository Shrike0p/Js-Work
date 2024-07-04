import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { InputBOX } from './components'
import useCurrency from './hooks/useCurrency'


function App() {
  const[amount, setAmount]=useState(0)
  const[from, setFrom]=useState("usd")
  const[to, setTo]=useState("inr")
  const[converted, setConvertedAmount]=useState(0)

  const currencyInfo=useCurrency(from)
  const options=Object.keys(currencyInfo)

  console.log(options)

  const swap=()=>{
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(converted)
  }

  const convert=()=>{
    setConvertedAmount(amount*currencyInfo[to])
  }

  return (
    <div className='w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat' 
      style={{
        backgroundImage:`url('https://media.istockphoto.com/id/1487894858/photo/candlestick-chart-and-data-of-financial-market.jpg?s=612x612&w=0&k=20&c=wZ6vVmbm4BV2JOePSnNNz-0aFVOJZ0P9nhdeOMGUg5I=)`
      }}
    >
      <div className='w-full'>
        <div className='w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30'>
        <form onSubmit={(e)=>{e.preventDefault(); convert()}}>
          <div className='w-full mb-1'>
            <InputBOX 
            label="From"
            amount={amount}
            currencyOption={options}
            onCurrencyChange={(currency)=>setAmount(amount)}
            selectCurrency={from}
            onAmountChange={(amount)=>setAmount(amount)}
            ></InputBOX>
          </div>

          <div className='relative w-full h-0.5'>

            <button type="button"
                            className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                            onClick={swap}>SWAP  </button>
          </div>

          <div className='w-full mt-1 mb-4'>
            <InputBOX 
            label="TO"
            amount={converted}
            currencyOption={options}
            onCurrencyChange={(currency)=>setTo(currency)}
            selectCurrency={from}
            amountDisable
            />
            
  
          </div>

          <button type='submit' className='w-full bg-blue-600 text-white px-4 py-4 rounded-lg '> Conver {from.toUpperCase()} to {to.toUpperCase}
          </button>
        </form>
        </div>
      </div>

    </div>
  )
}

export default App
