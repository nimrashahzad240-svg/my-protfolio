import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react'
import { Provider } from 'react-redux'
import { store } from './redux/store'
import App from './App'
import theme from './theme'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  // Strict mode - Only active in development mode.
  <React.StrictMode>

    {/* Allows any component to access or update global state without passing props manually */}
    <Provider store={store}> 
      {/* Wraps your app with Chakra UI. */}
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
    </Provider>
  </React.StrictMode>
)
