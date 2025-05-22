
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import {ToastContainer} from "react-toastify"

// query kurulum

const queryClient = new QueryClient();
createRoot(document.getElementById('root')!).render(
  // query ckient 
  <QueryClientProvider client={queryClient}>
    <App />
    <ToastContainer />
  </QueryClientProvider>,
)
