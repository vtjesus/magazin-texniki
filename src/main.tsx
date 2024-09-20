import React, { useEffect } from 'react'
import ReactDOM from 'react-dom/client'

import { Route, BrowserRouter as Router, Routes, useLocation } from 'react-router-dom'
import { ClientLayout } from './layouts/ClientLayout'

import './index.css'
import { Home } from './pages/home'
import { Downloads } from './pages/downloads'

import { I18nextProvider, useTranslation } from 'react-i18next'
import i18next from './i18n.ts'
import { useTranslateStore } from './shared/stores/useTranslate.ts'
import { ProductPage } from './pages/product.tsx'
import { AnimatePresence } from 'framer-motion'
import { NotFound } from './components/NotFound.tsx'

const AllRoutes: React.FC = () => {
  const location = useLocation()
  const lang = useTranslateStore(state => state.lang)
  const { i18n } = useTranslation('global')

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    i18n.changeLanguage(
      typeof lang === 'string' ? lang : 'es'
    )
  }, [lang])

  return (
    <AnimatePresence mode='wait'>
      <Routes location={location}>
        <Route element={<ClientLayout />}>
          <Route element={<ProductPage />} path='/product/:id' />
          <Route element={<Home />} path='/' />
          <Route element={<Downloads />} path='/downloads' />
          <Route
            path='*'
            element={<NotFound />}
          />
        </Route>
      </Routes>
    </AnimatePresence>
  )
}

document.addEventListener('DOMContentLoaded', function () {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  ReactDOM.createRoot(document.getElementById('root')!).render(
    <Router>
      <I18nextProvider i18n={i18next}>
        <AllRoutes />
      </I18nextProvider>
    </Router>
  )
} as EventListener)
