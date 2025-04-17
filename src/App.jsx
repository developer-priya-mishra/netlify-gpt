import React from 'react'
import { createRoot } from 'react-dom/client'
import Body from './components/Body.jsx'

const App = () => {
  return (
    <>
      <Body/>
    </>
  )
}

const root = createRoot(document.getElementById('root'))

root.render(<App />)

export default App
