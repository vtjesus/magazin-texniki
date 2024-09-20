import { useTranslation } from 'react-i18next'
import { VelocityScroll } from './VelocityScroll'

export const DownloadSeparate = (): JSX.Element => {
  const { t } = useTranslation('global')

  return (
    <div className=' text-5xl lg:my-32 my-10 relative'>
      <VelocityScroll
        text={t('downloads.scroll')}
      />
      <div className=' flex rotate-180 justify-center items-center absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 size-20 bg-interbrasGreen-500 rounded-[2rem] shadow-custom'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          id='Bold'
          viewBox='0 0 24 24'
          className=' size-12  animate-jumpinfinite'
          fill='#fff'
        >
          <path d='M18.061,9.525,14.475,5.939a3.585,3.585,0,0,0-4.95,0L5.939,9.525a1.5,1.5,0,0,0,2.122,2.121L10.5,9.207V19a1.5,1.5,0,0,0,3,0V9.207l2.439,2.439a1.5,1.5,0,0,0,2.122-2.121Z' />
        </svg>
      </div>
    </div>
  )
}
