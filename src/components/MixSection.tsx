import { motion } from 'framer-motion'
import { PrimaryButton } from './PrimaryButton'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

const mixers = [
  {
    id: 'mixteraSection1',
    tittle: 'Code',
    image: '/home/mixteraSection/1.webp',
    url: '/product/mixteras',
    hover: ' hover:scale-105 hover:translate-x-[-70%] ',
    className: 'translate-x-[-50%] left-[30%] top-[55%] -translate-y-1/2  -rotate-12'
  },
  {
    id: 'mixteraSection2',
    tittle: 'Code',
    image: '/home/mixteraSection/2.webp',
    url: '/product/mixteras',
    hover: ' hover:scale-105 hover:translate-y-[-60%] ',
    className: ' translate-x-[-50%] left-[50%] z-10 top-[40%] -translate-y-1/2 '
  },
  {
    id: 'mixteraSection3',
    tittle: 'Code',
    image: '/home/mixteraSection/3.webp',
    url: '/product/mixteras',
    hover: 'hover:scale-105 hover:translate-x-[-30%] ',
    className: 'translate-x-[-50%] left-[70%] top-[55%] -translate-y-1/2  rotate-12'

  }
]

export const MixSection: React.FC = () => {
  const { t } = useTranslation('global')
  return (
    <>
      <motion.section
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true }}
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 40 }
        }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className=' bg-interbrasGray  p-12 rounded-[40px] md:h-[30rem] h-[27rem] flex flex-col-reverse xl:flex-row items-center md:pl-24 '
      >
        <div className=' text-white flex flex-col gap-3 text-center lg:w-[50%] w-auto '>
          <h2 className='text-3xl md:text-4xl w-72 mx-auto text-center font-semibold '>
            {t('home.MixSection.title')}
          </h2>
          <p className=' text-xl font-light leading-5 mx-auto w-72 '>
            {t('home.MixSection.description')}
          </p>
          <div className=' w-min mx-auto'>
            <PrimaryButton to='/product/mixteras' />
          </div>
        </div>
        <div className=' scale-50 xl:scale-100 relative  w-[200%]  xl:w-full -translate-y-5   h-full'>
          {mixers.map((mixer) => (
            <Link
              to={mixer.url}
              key={mixer.id} className={
              `
              absolute transition-all rounded-[40px]  shadow-xl  flex justify-center items-center size-64 bg-white hover:bg-interbrasGreen-500 
              ${mixer.className}
              ${mixer.hover}
              `
            }
            >
              <img
                src={mixer.image}
                alt={mixer.tittle}
                className=' rounded-[40px] '
              />
            </Link>
          ))}
        </div>
      </motion.section>
    </>
  )
}
