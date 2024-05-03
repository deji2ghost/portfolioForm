import { ReactNode } from 'react'
import loginPic from '/image/sidePicture1.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMessage } from '@fortawesome/free-solid-svg-icons'
import { faInstagram, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons'

type Child = {
    children: ReactNode
}

export const FormPage = ({children}: Child) => {

  return (
    <div className='flex-none md:flex items-center'>
      <div className='flex justify-between items-center w-[90%] mx-auto md:hidden'>
            <h1 className='flex items-center italic text-[#2F2F2F] font-semibold text-[24px] md:px-2 md:py-2'>
                <span 
                    className='bg-[#FFB80E] h-[50px] w-5 inline-block md:hidden'
                ></span>
                <span 
                    className='inline-block cursor-pointer'
                >Blinnk</span>
                <span 
                    className='bg-[#FFB80E] h-6 w-1 inline-block'
                ></span>
            </h1>
        </div>
      <div className='hidden md:flex flex-col' >
        <p className='bg-[#FFB80E] w-[50px] h-[50px]'></p>
        <p className='bg-[#2F2F2F] w-[50px] h-screen'></p>
      </div>
        
      <img src={loginPic} className='object-cover absolute h-[230px] w-full bottom-0 md:h-screen md:static md:w-[34%]'/>

      <div className='md:hidden bg-[#2F2F2F] flex flex-col gap-3 items-center py-[50px] px-[20px] absolute bottom-0 w-full'>
        <p className='text-[#FFFFFF] font-normal text-[16px]'>Let's Work Together</p>
        <p className='h-[7px] w-[55%] mx-auto bg-[#FFB80E]'></p>
        <div className='text-[25px] flex gap-[40px] text-[#FDFDFD]'>
          <FontAwesomeIcon icon={faMessage} />
          <FontAwesomeIcon icon={faLinkedinIn} />
          <FontAwesomeIcon icon={faTwitter} />
          <FontAwesomeIcon icon={faInstagram} />
        </div>
      </div>

      { children }
    </div>
  )
}
