import { useTranslation } from 'react-i18next'
import { Ripple } from './Ripple'

export const DownloadHero = (): JSX.Element => {
  const { t } = useTranslation('global')
  return (
    <main className=' w-full h-full flex-1 lg:flex-row flex-col-reverse flex  items-center lg:mt-16'>

      <div className=' lg:min-w-[400px] text-center lg:text-left lg:px-5 px-7 flex h-[30rem] w-full lg:w-auto flex-col justify-end flex-1 mt-12 lg:mt-0'>

        <div className='mx-auto lg:mx-0  relative mb-6  flex'>
          <img src='/home/slideSection/3.svg' className=' size-24 p-4 bg-interbrasGreen-500 rounded-3xl shadow-2xl rotate-[-15deg] z-10' alt='' />
          <img src='/home/slideSection/1.svg' className=' size-24 p-4 bg-interbrasGreen-800 rounded-3xl shadow-2xl rotate-[5deg] -translate-y-3 -translate-x-5' alt='' />
        </div>

        <h1 className='text-5xl font-bold mt-0 lg:mt-5'>
          {
            t('downloads.title').split('\n').map((line, index) => (
              <span key={index} className='block'>
                {line}
              </span>
            ))
          }
        </h1>
        <p className=' text-balance leading-5 text-black/65 mt-3'>
          {t('downloads.p1').split('\n').map((line, index) => (
            <span key={index} className='block'>
              {line}
            </span>
          ))}
        </p>

        <a
          href='#apps'
          className=' mx-auto lg:mx-0 w-min  mt-10 bg-interbrasGreen-500 text-white inline-flex items-center justify-center whitespace-nowrap text-base font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary shadow hover:bg-primary/90 h-9 px-12 py-2 translate-y-[-1rem] animate-fade-in gap-1 rounded-lg  ease-in-out [--animation-delay:600ms]'
        >
          <span>
            {t('downloads.callToAction')}
          </span>
          <svg
            width={15}
            height={15}
            viewBox='0 0 15 15'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            className='ml-1 size-4 transition-transform duration-300 ease-in-out group-hover:translate-x-1 rotate-90'
          >
            <path
              d='M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z'
              fill='currentColor'
              fillRule='evenodd'
              clipRule='evenodd'
            />
          </svg>
        </a>

      </div>
      <div className={` 
              2xl::max-w-3xl 
              xl:max-w-2xl
              lg:rounded-[3rem] lg:h-[30rem] lg:max-w-xl
              
              rounded-b-[3rem] h-[20rem]  w-full bg-interbrasGreen-500 relative overflow-hidden flex flex-col justify-end 
               
              `}
      >
        <Ripple />
        <img src='/downloads/phone.png' alt='phone' className='  object-cover h-full w-auto z-10 mx-auto relative ' />
      </div>
    </main>
  )
}
