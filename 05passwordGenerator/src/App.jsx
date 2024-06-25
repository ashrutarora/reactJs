import { useState, useCallback, useEffect, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [passlength, setPassLength] = useState(8);
  const [num, setNum] = useState(false);
  const [characters, setCharacters] = useState(false);
  const [password, setPassword] = useState("");

  // useRef hook

  const passwrodRef = useRef()

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (num) str += "0123456789";
    if (characters) str += "!#$%&()*+,-./:;<=>?@[]^_`{|}~";

    for (let i = 0; i < passlength; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [passlength, num, characters]);

  const copyPasswordToClipboard = useCallback(() => {
    passwrodRef.current?.select()
    window.navigator.clipboard.writeText(password)
    
    // alert("Password Copied")
  }, [password])

  useEffect(() => {
    passwordGenerator()
  }, [passlength, num, characters, passwordGenerator])


  return (
    <>
      <h1 className='text-4xl text-center m-5 font-bold'>Password Generator</h1>

<div className="max-w-md mx-auto bg-white opacity-90 shadow-md rounded-lg p-6">

  <div className="flex items-center justify-between bg-gray-100 p-4 rounded-lg mb-4">
    <input
      type="text"
      value={password}
      placeholder="Generated Password"
      readOnly
      ref={passwrodRef}
      className="bg-transparent text-gray-700 border-none text-lg flex-grow outline-none"
    />
    <button
      className="bg-blue-500 text-white px-4 py-2 rounded-md ml-4 hover:bg-blue-600"
      onClick={copyPasswordToClipboard}
    >
      Copy
    </button>
  </div>

  <div className="mb-4">
    <label htmlFor="length" className="block text-lg font-medium text-gray-700 mb-2">Length</label>
    <div className="flex items-center space-x-4">
      <input
        type="range"
        id="length"
        min="6"
        max="32"
        value={passlength}
        className="w-full h-4 bg-gray-200 rounded-lg appearance-none cursor-pointer"
        onChange={(e) => setPassLength(e.target.value)}
      />
      <span className="text-lg font-medium text-gray-700">{passlength}</span>
    </div>
  </div>

  <div className="flex items-center mb-4">
    <input
      type="checkbox"
      id="numbers"
      defaultChecked={num}
      className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
      onChange={() => setNum(prev => !prev)}
    />
    <label htmlFor="numbers" className="ml-2 text-lg font-medium text-gray-700">Numbers</label>
  </div>

  <div className="flex items-center">
    <input
      type="checkbox"
      id="characters"
      defaultChecked={characters}
      className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
      onChange={() => setCharacters(prev => !prev)}
    />
    <label htmlFor="characters" className="ml-2 text-lg font-medium text-gray-700">Characters</label>
  </div>
  
</div>

    </>
  )
}

export default App
