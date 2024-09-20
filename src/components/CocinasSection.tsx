import { motion } from 'framer-motion'
import { PrimaryButton } from './PrimaryButton'
import { useTranslation } from 'react-i18next'

export const CocinasSection: React.FC = () => {
  const { t } = useTranslation('global')

  return (
    <motion.section
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true }}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 40 }
      }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className=' bg-interbrasGray relative rounded-[40px] lg:h-[30rem] flex flex-col lg:flex-row items-center p-10  gap-5'
    >
      <img src='/home/cocinaSection/1.webp' alt='Cocinas interbras' className=' rounded-[40px] h-[15rem]  lg:h-full object-cover' />
      <div className='text-center text-white w-full flex flex-col gap-3  '>
        <h2 className=' text-3xl md:text-4xl  font-semibold  w-72  mx-auto'>
          {t('home.CocinasSection.title')}
        </h2>
        <p className=' text-xl font-light leading-5 w-72 mx-auto '>
          {t('home.CocinasSection.description')}
        </p>
        <div className=' w-min mx-auto'>
          <PrimaryButton to='/product/cocinas' />
        </div>
      </div>
    </motion.section>
  )
}
