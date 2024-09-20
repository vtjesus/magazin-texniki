import { motion } from 'framer-motion'
import React from 'react'
import { Link } from 'react-router-dom'
import { useDataStore } from '../shared/stores/useData'
import { useTranslation } from 'react-i18next'

interface ProductosHeaderProps {
  clicked?: () => void
}

interface LinkItemProps {
  to: string
  children: React.ReactNode

  clicked?: () => void
}

const LinkItem: React.FC<LinkItemProps> = ({ to, children, clicked }) => {
  return (
    <Link
      className=' opacity-55 hover:opacity-100 transition-colors'
      to={to}
      onClick={
        () => {
          if (clicked !== undefined) {
            clicked()
          }
        }
      }
    >
      {children}
    </Link>
  )
}

export const ProductosHeader: React.FC<ProductosHeaderProps> = ({
  clicked
}) => {
  const { urls } = useDataStore()

  const { t } = useTranslation('global')
  const { t: t2 } = useTranslation('products')

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className=' h-full w-full flex justify-center'
    >
      <div className=' mt-5 lg:mt-auto mx-3  lg:mx-0 text-white flex lg:my-auto lg:flex-row flex-col gap-6 '>
        <img src='/productosHeader.webp' className='  h-64 ' alt='Arrow' />
        <div className=' flex flex-col items-left'>
          <h3 className='text-lg  font-bold'>
            {t('header.products.text')}
          </h3>
          <div className=' flex gap-16 mt-2'>
            <div className=' flex-col flex'>
              {
                urls.slice(0, 8).map(url => (
                  <LinkItem
                    clicked={clicked} to={url.url}
                    key={'id-header-' + t2(url.name)}
                  >
                    {t2(url.name)}
                  </LinkItem>
                ))
              }
            </div>
            <div className=' flex-col flex'>
              {
                urls.slice(8, urls.length).map(url => (
                  <LinkItem
                    clicked={clicked} to={url.url}
                    key={'id-header-' + url.name}
                  >
                    {t2(url.name)}
                  </LinkItem>
                ))
              }
            </div>
          </div>
        </div>
      </div>

    </motion.div>
  )
}
