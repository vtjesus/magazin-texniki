import i18next from 'i18next'
import es from './shared/translations/es/global.json'
import pt from './shared/translations/pt/global.json'
import productsEs from './shared/translations/es/products.json'
import productsPt from './shared/translations/pt/products.json'

// eslint-disable-next-line @typescript-eslint/no-floating-promises
i18next.init({
  interpolation: {
    escapeValue: false
  },
  resources: {
    es: { global: es, products: productsEs },
    pt: { global: pt, products: productsPt }
  },
  lng: 'pt'
})

export default i18next
