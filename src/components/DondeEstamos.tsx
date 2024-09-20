import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'

export const DondeEstamos: React.FC = () => {
  const { t } = useTranslation('global')

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className=' h-full w-full flex justify-center lg:justify-between '
    >
      <div className=' lg:flex hidden items-end h-full'>
        <img src='/arrowDondeEstamos.svg' className=' h-52 pointer-events-none' alt='Arrow' />
      </div>
      <div className='  text-white  justify-center text-center  text-3xl flex items-center h-full'>
        <p>
          {t('header.whereWeAre.line1')}
          <br />
          {t('header.whereWeAre.line2')} <strong>{t('header.whereWeAre.line3')}</strong> <img src='/paraguayFLAG.png' className=' -translate-y-1 w-auto h-8 inline' alt='Emoji' />
        </p>
      </div>
      <div className=' lg:flex hidden relative items-end h-full'>
        <img src='/edificiosDondeEstamos.svg' className=' h-60 mr-6 pointer-events-none' alt='Arrow' />
      </div>
    </motion.div>
  )
}
