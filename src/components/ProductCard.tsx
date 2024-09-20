import { useTranslation } from 'react-i18next'
import { Children } from '../shared/utils/data'

export const ProductCard: React.FC<{ child: Children, active: boolean, change: (child: Children) => void }> = ({ child, active, change }) => {
  const { t } = useTranslation('products')
  return (

    <button
      className={
        `
          w-full text-lg flex p-2 py-2 rounded-3xl transition-colors border-2 
        ${active ? '  bg-interbrasGreen-500' : 'bg-neutral-200 hover:bg-neutral-300 '}
        `
      }
      onClick={() => change(child)}
    >
      <img
        src={child.variants[0].photos[0]}
        className=' size-20 p-3 object-contain rounded-3xl ' alt=''
      />

      <div className={
        `
        flex-1 ml-3 text-left my-auto
        ${active ? 'text-white ' : 'text-black'}
        `
      }
      >
        <p className={
          `
           text-xl font-medium
          `
        }
        >
          {t(child.name)}
        </p>
        <div className=' flex '>
          {
            child.variants.length > 1 ? t('colors.text.colors') + ':' : t('colors.text.color') + ':'
          }
          <div className=' flex gap-1 items-center ml-1'>
            {
            child.variants.map((variant) => (
              <p key={variant.color.toString() + variant.id.toString()}>
                {
                  t(variant.color)
                }{child.variants.length > 1 && variant !== child.variants[child.variants.length - 1] ? ',' : ''}
              </p>
            ))
            }
          </div>
        </div>
      </div>
    </button>

  )
}
