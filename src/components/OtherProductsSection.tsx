import React from 'react'
import { PrimaryButton } from './PrimaryButton'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'

interface OtherProductCardProps {
  name: string
  image: string
  url: string
  delay?: number
}

const OtherProductCard: React.FC<OtherProductCardProps> = ({ name, image, url, delay }) => {
  const { t } = useTranslation('global')

  return (
    <motion.div
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true }}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 40 }
      }}
      transition={{ duration: 0.5, delay: delay !== undefined ? delay : 0.5 }}
      className=' w-full relative lg:h-[30rem] h-[20rem] overflow-hidden rounded-[40px]'
    >
      <img src={image} alt={name} className=' h-full w-full object-cover' />

      <div className='text-center w-full flex flex-col  absolute bottom-5 lg:bottom-10  '>
        <h2 className=' text-white line-clamp-1 text-xl md:text-4xl  lg:mb-2 mb-1 font-semibold  leading-5'>
          {
            t(name).split(' ')[0]
          }
        </h2>
        <div className=' w-min mx-auto'>
          <PrimaryButton to={url} />
        </div>
      </div>
    </motion.div>
  )
}

export const OtherProductsSection: React.FC = () => {
  return (
    <>
      <section className=' grid grid-cols-2  lg:grid-cols-4 gap-6 '>
        <OtherProductCard delay={0.5} name='home.OtherProductsSection.1' image='/home/otherProductsSection/1.webp' url='/product/planchas' />
        <OtherProductCard delay={0.7} name='home.OtherProductsSection.2' image='/home/otherProductsSection/2.webp' url='/product/licuadoras' />
        <OtherProductCard delay={0.9} name='home.OtherProductsSection.3' image='/home/otherProductsSection/3.webp' url='/product/beauty' />
        <OtherProductCard delay={1.2} name='home.OtherProductsSection.4' image='/home/otherProductsSection/4.webp' url='/product/batidoras' />
      </section>

      <section className=' grid grid-cols-2 gap-6  '>
        <OtherProductCard delay={0.5} name='home.OtherProductsSection.5' image='/home/otherProductsSection/5.webp' url='/product/arroceras' />
        <OtherProductCard delay={0.7} name='home.OtherProductsSection.6' image='/home/otherProductsSection/6.webp' url='/product/bebederos' />
      </section>

    </>
  )
}
