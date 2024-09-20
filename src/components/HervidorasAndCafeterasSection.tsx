import { motion } from 'framer-motion'
import { PrimaryButton } from './PrimaryButton'
import { useTranslation } from 'react-i18next'

export const HervidorasAndCafeterasSection: React.FC = () => {
  const { t } = useTranslation('global')

  return (
    <section className=' lg:h-[30rem] sm:h-auto flex-col lg:flex-row flex  gap-6 '>
      <motion.div
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true }}
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 40 }
        }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className=' w-full h-[20rem] lg:h-full relative bg-interbrasGray rounded-[40px] overflow-hidden'
      >
        <img src='/home/KettleAndCafeterasSection/1.webp' className='  h-[115%] top-1/2 -translate-y-[55%] absolute right-0' alt='hervidoras interbras' />
        <div className=' absolute lg:bottom-10 lg:left-10 left-5 bottom-5'>
          <h2 className='text-3xl md:text-4xl mb-3 font-bold text-white'>
            {t('home.HervidorasAndCafeterasSection.1.title')}
          </h2>
          <PrimaryButton
            className=' w-min'
            to='/product/hervidoras'
          />
        </div>
      </motion.div>
      <motion.div
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true }}
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 40 }
        }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className=' w-full h-[20rem] lg:h-full relative bg-interbrasGray rounded-[40px] overflow-hidden'
      >        <img src='/home/KettleAndCafeterasSection/2.webp' className='  h-[110%] top-1/2 -translate-y-[52%] absolute left-0' alt='hervidoras interbras' />

        <div className=' absolute lg:bottom-10 bottom-5 lg:right-10 right-5 '>
          <h2 className='text-3xl md:text-4xl  mb-3 font-bold text-white'>
            {t('home.HervidorasAndCafeterasSection.2.title')}
          </h2>
          <PrimaryButton
            className=' ml-auto w-min'
            to='/product/cafeteras'
          />
        </div>
      </motion.div>
    </section>
  )
}
