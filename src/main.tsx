import { createRoot } from 'react-dom/client'
import { RecoilRoot } from 'recoil'
import { StrictMode } from 'react'

import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RecoilRoot>
      <App />
    </RecoilRoot>
  </StrictMode>
)
