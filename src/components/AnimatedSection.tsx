import { useTranslation } from 'react-i18next'
import { useSlides } from '../hooks/useSlide'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export const AnimatedSection: React.FC = () => {
  const { canvasRef, setSelectedProduct, productsSlide, selectedProduct, stopInterval } = useSlides()

  // haciendo stop interval
  const { t } = useTranslation('products')
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
        transition={{ duration: 0.5, delay: 0.2 }}
        onMouseLeave={
          () => {
            setSelectedProduct(null)
          }
        }
        className=' h-[23rem] lg:h-auto w-full bg-interbrasGray flex justify-center items-center rounded-[40px]  overflow-hidden relative'
      >
        <canvas
          ref={canvasRef}
          width={2458 * 1.5}
          height={1080 * 1.5}
          style={{
            backgroundImage: 'url(/home/slideSection/0.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
          className='h-full w-full object-cover  transition-all duration-1000'
        />
        <div className=' absolute z-10 left-1/2 -translate-x-1/2 bottom-4 bg-interbrasGray p-3 flex  gap-4 rounded-xl shadow-xl'>
          {
            productsSlide.map((product) => (
              <Link
                onClick={
                () => {
                  window.scrollTo(0, 0)
                }
                }
                to={product.to}
                key={product.id}
                onMouseEnter={() => {
                  setSelectedProduct(product)
                  stopInterval()
                }}
                className={`text-white p-3 rounded-xl relative  flex-col  cursor-pointer  size-10 flex justify-center items-center
                  ${
                  selectedProduct?.id !== product.id
                  ? 'bg-zinc-800 hover:bg-zinc-900 active:bg-zinc-950'
                  : 'bg-interbrasGreen-500 hover:bg-interbrasGreen-600 active:bg-interbrasGreen-700'}`}
              >
                <img
                  src={
                  product.icon
                } alt=''
                  className=' w-10 h-10'
                />
                {
                  selectedProduct?.id === product.id && (
                    <motion.div
                      initial={{ opacity: 0, y: 0 }}
                      animate={{ opacity: 1, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className=' bg-zinc-900 text-wrap absolute p-1 rounded-xl px-4 bottom-[120%] shadow-xl'
                    >
                      {t(product.name).split(' ')[0]}
                    </motion.div>
                  )
                }
              </Link>
            ))
          }
        </div>
      </motion.section>

    </>
  )
}
