import React from 'react'
import { createRoot } from 'react-dom/client'
import Body from './components/Body.jsx'
import { Provider } from 'react-redux'
import appStore from './utils/appStore.js'

const App = () => {
  return (
    <Provider store={appStore}>
      <Body/>
    </Provider>
  )
}

const root = createRoot(document.getElementById('root'))

root.render(<App />)

export default App
