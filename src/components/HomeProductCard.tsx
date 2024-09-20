import Atropos from 'atropos/react'
import { ProductItemHome } from '../types'
import { Link } from 'react-router-dom'

export const HomeProductCard = ({ name, photo, isMagic, url }: ProductItemHome): JSX.Element => {
  return (
    <Atropos
      shadow={false}
      className={
          `
          ${
          isMagic ? ' sm:mt-4  mt-0 ' : ' mt-0'
          }
          cursor-pointer
          
          `
      }
    >

      <Link
        onClick={
          () => {
            window.scrollTo(0, 0)
          }
        }
        className={
          `
          mx-auto  sm:size-16 md:size-20 lg:size-28 xl:size-32  md:p-4 p-2  flex justify-center items-center rounded-3xl bg-interbrasGreen-500
          `
        }
        to={
            typeof url === 'string' ? url : '/'
          }
      >
        <img
          data-atropos-offset='-5'
          className=' '
          src={
              photo
          } alt={
            typeof name === 'string' ? name : ''
          }
        />
      </Link>
      {
          isMagic && (
            <div className=' text-center mt-3 leading-5 text-lg hidden sm:block'>
              {name}
            </div>
          )
        }
    </Atropos>
  )
}
