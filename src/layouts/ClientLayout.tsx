import { Header } from '../components/HeaderClient'
import React from 'react'
import { Outlet } from 'react-router-dom'
import { Footer } from '../components/FooterClient'
import { useTranslateStore } from '../shared/stores/useTranslate'
import { Helmet } from 'react-helmet'

export const ClientLayout: React.FC = () => {
  const lang = useTranslateStore((state) => state.lang)

  return (
    <>
      <Helmet>
        <html lang={
          lang
        }
        />
        <meta
          property='og:locale' content={
          lang === 'es' ? 'es_ES' : lang === 'pt' ? 'pt_BR' : 'en_US'
        }
        />
      </Helmet>
      <div className='  font-interbras bg-[#F2F2F2] flex flex-col min-h-dvh'>
        <Header />
        <main className=' h-full flex-1  mt-20 flex flex-col'>
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  )
}
