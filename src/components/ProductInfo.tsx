import { useTranslation } from 'react-i18next'
import { Info } from '../shared/utils/data'

export const ProductInfo: React.FC<Info> = ({ review, included, specs }) => {
  const { t } = useTranslation('products')
  const { t: t2 } = useTranslation('global')
  const reviewText = t(review)
  const includedText = included !== null ? t(included) : null
  const specsText = t(specs)

  return (
    <div className='flex flex-col gap-6  mt-16   mx-auto sm:w-[60%] w-[100%]'>
      <hr className='  border-black/25' />
      <h4 className=' px-4 lg:px-0 text-3xl font-semibold'>
        {t('productInfo')}
      </h4>
      <div className='flex px-4 lg:px-0 flex-col lg:flex-row mt-5  gap-2 my-3'>
        <h4 className=' lg:w-96  text-2xl '>
          {t2('productPage.review')}
        </h4>
        <p className=' flex-1 leading-5'>{
            reviewText.split('\n').map((item, i) => (
              <span key={i.toString() + '-review'}>
                {item}
                <span className=' block my-4' />
              </span>
            ))
        }
        </p>
      </div>
      {
        included !== null && (
          <>
            <hr className='  border-black/25' />
            <div className='flex flex-col lg:flex-row gap-2 my-3'>
              <h4 className=' lg:w-96 px-4 lg:px-0 text-2xl'>
                {t2('productPage.whatAreIncluded')}
              </h4>
              <p className=' px-4 lg:px-0 flex-1'>{
                includedText?.split('\n').map((item, i) => (
                  <span key={i.toString() + '-included'}>
                    {item}
                    <br />
                  </span>
                ))
            }
              </p>
            </div>
          </>
        )
      }
      <hr className='  border-black/25' />
      <div className='flex flex-col lg:flex-row gap-2 my-3'>
        <h4 className=' lg:w-96 px-4 lg:px-0 text-2xl'>
          {t2('productPage.specs')}
        </h4>
        <p className=' px-4 lg:px-0 flex-1'>{
                    specsText.split('\n').map((item, i) => (
                      <span key={i.toString() + '-specs'}>
                        {item}
                        <br />
                      </span>
                    ))
                }
        </p>
      </div>
      <hr
        className='  border-black/25'
      />
    </div>
  )
}
