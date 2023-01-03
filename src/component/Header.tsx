import React from 'react'
import icons from '../icons/icons'
import SearchHome from './SearchHome'
const{HiArrowNarrowLeft,
    HiArrowNarrowRight} =icons
const Header:React.FC = () => {
  return (
    <div className='  w-full overflow-y-auto flex justify-between items-center'> 
        <div className='flex gap-6 items-center w-full' >
            <div className='flex text-gray-400 gap-6'>
                <span className='cursor-pointer' >
                <HiArrowNarrowLeft size={24}/>
                </span>
                <span className='cursor-pointer'>
                <HiArrowNarrowRight size={24}/>
                </span>
            </div>
            <div className='w-1/2'>
                <SearchHome/>
            </div>
        </div>
        <div>
            login
        </div>
    
    </div>
  )
}

export default Header