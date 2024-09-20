import { motion } from 'framer-motion'
import { PrimaryButton } from './PrimaryButton'
import { useTranslation } from 'react-i18next'

export const AirFryersSection: React.FC = () => {
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
      transition={{ duration: 0.5, delay: 0.2 }}
      className=' bg-interbrasGray h-[25rem] md:h-[30rem] gap-8 pt-6 sm:pt-0 sm:gap-0 flex flex-col-reverse md:flex-row justify-center items-center  rounded-[40px]  text-white'
    >
      <div className=' w-full scale-75 xl:scale-100 lg:block hidden  h-full relative'>

        <div className='size-64 absolute left-[40%]  -translate-x-1/2 top-[60%] -translate-y-1/2'>
          <motion.div
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
            variants={{
              visible: { x: 0, y: 0, opacity: 1 },
              hidden: { x: -40, y: 40, opacity: 0 }
            }}
            transition={{ duration: 0.5, delay: 1.2 }}
            className=' size-64 '
          >
            <img className=' shadow-2xl size-full rounded-[40px] object-cover' src='/home/air2.webp' alt='' />
          </motion.div>
        </div>

        <div className='size-64 absolute left-1/2 -translate-x-1/2 top-[40%] -translate-y-1/2 '>
          <motion.div
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
            variants={{
              visible: { x: 0, y: 0, opacity: 1 },
              hidden: { x: -40, y: 40, opacity: 0 }
            }}
            transition={{ duration: 0.5, delay: 1 }}
            className=' size-64 '
          >
            <img className=' shadow-2xl size-full rounded-[40px] object-cover' src='/home/air1.webp' alt='' />
          </motion.div>
        </div>

      </div>

      <div className=' flex gap-2 sm:gap-4 flex-col justify-center items-center '>
        <h2 className='  text-2xl md:text-4xl font-semibold relative  '>
          <p className=' relative '>Air fryers</p>
        </h2>
        <p
          className=' w-72  text-center text-lg sm:text-xl   font-extralight leading-6'
        >
          {t('home.airFryersSection.text')}
        </p>
        <PrimaryButton to='/product/airfryer' />
      </div>

      <div className=' w-full scale-75 xl:scale-100 lg:block hidden  h-full  relative'>

        <div className='size-64 absolute left-[60%]  -translate-x-1/2 top-[60%] -translate-y-1/2'>
          <motion.div
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
            variants={{
              visible: { x: 0, y: 0, opacity: 1 },
              hidden: { x: 40, y: 40, opacity: 0 }
            }}
            transition={{ duration: 0.5, delay: 1.2 }}
            className=' size-64 '
          >
            <img className='  shadow-2xl size-full rounded-[40px] object-cover' src='/home/air3.webp' alt='' />
          </motion.div>
        </div>

        <div className='size-64 absolute left-1/2  -translate-x-1/2 top-[40%] -translate-y-1/2 '>
          <motion.div
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
            variants={{
              visible: { x: 0, y: 0, opacity: 1 },
              hidden: { x: 40, y: 40, opacity: 0 }
            }}
            transition={{ duration: 0.5, delay: 1 }}
            className=' size-64 '
          >
            <img className=' shadow-2xl size-full rounded-[40px] object-cover' src='/home/air4.webp' alt='' />
          </motion.div>
        </div>

      </div>

      <div className=' sm:hidden  flex gap-2 h-24'>
        <motion.img
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          variants={{
            visible: { y: 0, opacity: 1 },
            hidden: { y: 40, opacity: 0 }
          }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className='w-full shadow-2xl h-full object-cover' src='/home/air1.webp' alt=''
        />
        <motion.img
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          variants={{
            visible: { y: -40, opacity: 1 },
            hidden: { y: 0, opacity: 0 }
          }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className='w-full shadow-2xl h-full object-cover -translate-y-10' src='/home/air2.webp' alt=''
        />
        <motion.img
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          variants={{
            visible: { y: 0, opacity: 1 },
            hidden: { y: 40, opacity: 0 }
          }}
          transition={{ duration: 0.5, delay: 0.9 }}
          className='w-full shadow-2xl h-full object-cover' src='/home/air3.webp' alt=''
        />

      </div>
    </motion.section>
  )
}
