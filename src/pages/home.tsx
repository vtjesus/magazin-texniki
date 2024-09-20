import React from 'react'
import 'atropos/css'
import { ProductsAnimated } from '../components/ProductsAnimated'
import { AirFryersSection } from '../components/AirFryersSection'
import { AnimatedSection } from '../components/AnimatedSection'
import { MixSection } from '../components/MixSection'
import { CocinasSection } from '../components/CocinasSection'
import { HervidorasAndCafeterasSection } from '../components/HervidorasAndCafeterasSection'
import { OtherProductsSection } from '../components/OtherProductsSection.tsx'
import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet'

export const Home: React.FC = () => {
  return (
    <>

      <Helmet>
        <title>Interbras</title>
      </Helmet>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className=' mb-16 '
      >
        <ProductsAnimated />
        <main className='  sm:w-[80%] w-[90%] flex flex-col gap-6 mx-auto'>

          <AnimatedSection />

          <AirFryersSection />

          <MixSection />

          <CocinasSection />

          <HervidorasAndCafeterasSection />

          <OtherProductsSection />

        </main>
      </motion.div>
    </>
  )
}
