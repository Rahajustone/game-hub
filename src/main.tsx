import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ChakraProvider, defaultSystem } from '@chakra-ui/react'
import { ColorModeProvider } from './components/ui/color-mode'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query' 
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

import './index.css'
import App from './App.tsx'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
    },
  },
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ColorModeProvider>
      <ChakraProvider value={defaultSystem}>
        <QueryClientProvider client={queryClient}>
          <App />
          <ReactQueryDevtools />
        </QueryClientProvider>
      </ChakraProvider>
    </ColorModeProvider>
  </StrictMode>,
)
