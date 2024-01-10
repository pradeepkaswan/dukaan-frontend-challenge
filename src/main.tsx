import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/index.css'
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'
import RootLayout from './components/layouts/root-layout.tsx'
import Dashboard from './pages/dashboard.tsx'
import Payments from './pages/payments.tsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Dashboard />} />
      <Route path="payments" element={<Payments />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
