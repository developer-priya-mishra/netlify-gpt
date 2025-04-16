import React from 'react'
import { createRoot } from 'react-dom/client'

const App = () => {
  return (
    <>
      <h1 className='text-3xl font-bold text-green-800'>Namste everyone! Let's build Netflix GPT</h1>
    </>
  )
}

const root = createRoot(document.getElementById('root'))

root.render(<App />)

export default App
