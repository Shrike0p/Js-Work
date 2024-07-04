import { useState, useCallback, useEffect, useRef} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length, setLength]=useState(8)
  const [numberAllowed, setNumberAllowed]=useState(false)
  const [characterAllowed, setCharacterAllowed]=useState(false)
  const [password, setPassword]=useState("")
  const [buttontext, setButtonText]=useState("copy")
  const [colors, setColors]=useState( "blue")
  const passwordRef=useRef(null)
  const passwordGenerator=useCallback(()=>{
    let pass=""
    let string="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed) string+="0123456789"
    if(characterAllowed) string+="!@#$%^&*()_+~`"
    for (let i = 1; i <= length; i++) {
      let char= Math.floor(Math.random()*string.length+1)
      pass+=string.charAt(char)
      
    }
    setPassword(pass)

  }, [length, numberAllowed, characterAllowed, setPassword])


  const copyPasswordToClipboard=useCallback(()=>{
    passwordRef.current?.select()
    // passwordRef.current?.setSelectionRange(0,3)
    window.navigator.clipboard.writeText(password)
  }, [password])
  useEffect(()=>{passwordGenerator()}, [length, numberAllowed, characterAllowed, passwordGenerator])

  function value(){
    setButtonText("copied")
    colorchanged()
    setTimeout(()=>{
      setButtonText("copy")
      setColors("blue")
    },1000)
  }
  function colorchanged(){
    setColors("grey")
  }

  return (
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-800'>
      <h1 className='text-white text-center my-3'>Password Generator</h1>
      <div className='flex  shadow rounded-lg overflow-hidden mb-4'> 
        <input type="text" value={password} className='outline-none w-full py-1 px-3' placeholder='Password' readOnly ref={passwordRef} />
        <button onClick={() => { copyPasswordToClipboard(); value(); }} className=' outline-none text-white px-3 py-0.5 shrink-0' style={{backgroundColor: colors}} >{buttontext}</button>
      </div>

      <div className='flex text-sm gap-x-2'>
         <div className='flex items-center gaps-x-1'>
          <input type="range" min={6} max={100} value={length} className='cursor-pointer' onChange={(e)=>{setLength(e.target.value)}} />
          <label > Length {length}</label>
         </div>

         <div className='flex items-center gap-x-1'>
          <input type="checkbox" defaultChecked={numberAllowed} onChange={()=>{setNumberAllowed((prev)=>!prev)}}/>
          <label>Numbers</label>
         </div>
         <div className='flex items-center gap-x-1'>
          <input type="checkbox" defaultChecked={characterAllowed} onChange={()=>{setCharacterAllowed((prev)=>!prev)}}/>
          <label>Characters</label>

        
         </div>
      </div>

      
    </div>
  )
}

export default App

