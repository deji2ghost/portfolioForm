import { faHand } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export const PortfolioPage = () => {
  return (
    <div className='bg-[#FFFFFF]'>
        <div className='w-[90%]'>
            <div>
                <p>hi <FontAwesomeIcon className='text-[#FFB80E]' icon={faHand} /></p>
            </div>
            <div>
                <h1>Im LazyDev</h1>
                <h6 className='text-[24px] font-normal'>I <span className='text-[#FFB80E] font-semibold'>DESIGN</span> solutions that not 
                    only solve problems but also help you 
                    reach your business goals...
                </h6>
                <div>
                    <button>About ME</button>
                    <button className='hover:bg-[#FFB80E] bg-[#EAEAEA] text-[#BFBFBF] hover:text-[#2F2F2F] hover:transition-transform duration-300 text-[16px] font-medium'>View My Work</button>
                </div>
            </div>

        </div>
    </div>
  )
}
