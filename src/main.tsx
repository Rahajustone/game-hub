import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ChakraProvider, defaultSystem } from '@chakra-ui/react'
import { ColorModeProvider } from './components/ui/color-mode'

import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ColorModeProvider>
      <ChakraProvider value={defaultSystem}>
        <App />
      </ChakraProvider>
    </ColorModeProvider>
  </StrictMode>,
)
