import { useHover } from '@uidotdev/usehooks'
import { useEffect, useState } from 'react'

export const useHeader = (): {
  dondeEstamosRef: (instance: Element | null) => void
  productosRef: (instance: Element | null) => void
  quienesSomosRef: (instance: Element | null) => void
  selected: String | null
  setSelected: React.Dispatch<React.SetStateAction<String | null>>
} => {
  const [dondeEstamosRef, hoverDondeEstamos] = useHover()
  const [productosRef, hoverProductos] = useHover()
  const [quienesSomosRef, hoverQuienesSomos] = useHover()

  const [selected, setSelected] = useState<String | null>(null)

  useEffect(() => {
    const headerClient = document.getElementById('header-client')

    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    const headerMouseLeave = () => {
      setSelected(null)
    }

    headerClient?.addEventListener('mouseleave', headerMouseLeave)
    return () => {
      headerClient?.removeEventListener('mouseleave', headerMouseLeave)
    }
  }, [])

  useEffect(() => {
    if (hoverDondeEstamos) {
      setSelected('dondeEstamos')
    } else if (hoverProductos) {
      setSelected('productos')
    } else if (hoverQuienesSomos) {
      setSelected('quienesSomos')
    }
  },
  [
    hoverDondeEstamos,
    hoverProductos,
    hoverQuienesSomos
  ])

  return {
    dondeEstamosRef,
    productosRef,
    quienesSomosRef,
    selected,
    setSelected
  }
}
