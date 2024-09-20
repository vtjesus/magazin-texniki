import React, { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Children, getProductsByCategory } from '../shared/utils/data'
import { ProductInfo } from '../components/ProductInfo'
import { CarrouselCategory } from '../components/CarrouselCategory'
import { motion } from 'framer-motion'
import { PhotoViewer } from '../components/PhotoView'
import { NotFound } from '../components/NotFound'
import { ProductCard } from '../components/ProductCard'
import { useTranslation } from 'react-i18next'
import { Helmet } from 'react-helmet'
import { useMediaQuery } from '@uidotdev/usehooks'

export const ProductPage: React.FC = () => {
  const { id } = useParams<{ id: string }>()

  if (id === undefined) {
    return <NotFound />
  }

  const productSelected = getProductsByCategory({ id })

  if (productSelected === undefined) {
    return <NotFound />
  }

  interface scroll {
    scrollY: number
  }

  const [scrolling, setScrolling] = useState<scroll>({
    scrollY: 0
  })
  const [scrollY, setScrollY] = useState<number>(0)

  const [childSelected, setChildSelected] = useState<Children>(
    productSelected.children[0]
  )

  const contaiterRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setScrollY(
      prev => {
        if (contaiterRef.current != null) {
          return contaiterRef.current.scrollHeight - contaiterRef.current.clientHeight - 20
        }
        return prev
      }
    )
  }, [])

  useEffect(() => {
    setChildSelected(productSelected.children[0])
  }, [productSelected])

  const getAllPhotosOfAllVariants = (): string[] => {
    const photos: string[] = []
    childSelected.variants.forEach((variant) => {
      variant.photos.forEach((photo) => {
        photos.push(photo)
      })
    })
    return photos
  }

  const { t } = useTranslation('products')

  const name = t(productSelected.name)
  const description = t(productSelected.description)

  const isSmallDevice = useMediaQuery('only screen and (max-width : 768px)')

  return (
    <>

      <Helmet>
        <title>{name + ' - Interbras'}</title>
        <meta name='description' content={description} />
        <meta property='og:title' content={name + ' - Interbras'} />
        <meta property='og:description' content={description} />
        <meta property='og:url' content={window.location.href} />
        <meta property='og:type' content='website' />
        <meta property='og:site_name' content='Interbras' />
        <meta property='og:locale:alternate' content='en_US' />
        <meta property='og:locale:alternate' content='es_ES' />
        <meta property='og:locale:alternate' content='fr_FR' />
        <meta property='og:locale:alternate' content='it_IT' />
        <meta property='og:locale:alternate' content='de_DE' />
        <meta property='og:locale:alternate' content='nl_NL' />
        <meta property='og:locale:alternate' content='ru_RU' />
        <meta property='og:locale:alternate' content='ja_JP' />
        <meta property='og:locale:alternate' content='ko_KR' />
        <meta property='og:locale:alternate' content='zh_CN' />
        <meta property='og:locale:alternate' content='zh_TW' />
        <meta property='og:locale:alternate' content='hi_IN' />
        <meta property='og:locale:alternate' content='ar_SA' />
        <meta property='og:locale:alternate' content='he_IL' />
        <meta property='og:locale:alternate' content='id_ID' />
        <meta property='og:locale:alternate' content='th_TH' />
        <meta property='og:locale:alternate' content='tr_TR' />
        <meta property='og:locale:alternate' content='vi_VN' />
        <meta property='og:locale:alternate' content='pl_PL' />
        <meta property='og:locale:alternate' content='cs_CZ' />
        <meta property='og:locale:alternate' content='sk_SK' />
        <meta property='og:locale:alternate' content='hu_HU' />
      </Helmet>

      <motion.main
        className=' w-full flex flex-col mx-auto flex-1 py-16 '
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className=' sm:w-[60%] w-[90%] flex lg:flex-row flex-col justify-center gap-10  mx-auto '>
          <div className=' no-select '>
            <PhotoViewer
              key={childSelected.name}
              name={name}
              photos={getAllPhotosOfAllVariants()}
            />
          </div>
          <div className='  flex-1 w-full '>
            <h1 className=' text-4xl font-semibold'>{name}</h1>
            <h2 className=' text-lg  mt-1 font-light leading-5'>
              {description.split('\n').map((line, index) => (
                <span key={index}>
                  {line}
                  <br />
                </span>
              ))}
            </h2>
            <h3 className=' mt-4  text-lg font-medium text-black/3'>
              {t('whatDoYouWant')}
            </h3>

            <div className='  relative mt-3'>
              <div
                onScrollCapture={
                  (e) => {
                    setScrolling({
                      scrollY: e.currentTarget.scrollTop
                    })
                  }
                }
                style={{
                  height: isSmallDevice ? 'auto' : '23rem',
                  overflow: 'auto'
                }}
                onClick={
                  () => {
                    if (isSmallDevice) {
                      window.scrollTo(0, 0)
                    }
                  }
                }
                ref={contaiterRef}
                className='hideScrollBar transition-all w-full  flex flex-col gap-1 relative'
              >
                {productSelected.children.map((child, index) => (
                  <ProductCard
                    child={child}
                    key={index}
                    active={childSelected === child}
                    change={(child) => {
                      setChildSelected(child)
                    }}
                  />
                ))}
              </div>

              <div
                style={{
                  height: scrolling.scrollY < scrollY ? '40px' : '0px',
                  display: isSmallDevice ? 'none' : 'block'
                }}
                className=' w-full h-20 mask  bottom-0 absolute transition-all z-10 pointer-events-none bg-[#f2f2f2] '
              />
              <div
                style={{
                  height: scrolling.scrollY > 0 ? '40px' : '0px',
                  display: isSmallDevice ? 'none' : 'block'
                }}
                className=' w-full h-20 mask top-0 absolute transition-all z-10 rotate-180 pointer-events-none bg-[#f2f2f2]'
              />
            </div>
          </div>
        </div>
        <ProductInfo {...childSelected.info} />
        <CarrouselCategory />
      </motion.main>
    </>
  )
}
