import { GoogleButton } from '../Button/GoogleButton'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { FormPage } from './FormPage'



export const ResetPassword = () => {
    
    const schema = yup.object().shape({
        email: yup.string().email().required(),
        password: yup.string().min(4).max(20).required()
    })

    const { register } = useForm({
        resolver: yupResolver(schema)
    })

  return (
    <FormPage>
        <div className='mx-auto flex text-[#2F2F2F] flex-col gap-[30px] text-center mt-8 md:gap-6 md:mt-0 md:w-[37%]'>
            <h3 className='hidden md:flex items-center justify-center italic text-[#2F2F2F] font-semibold text-[16px]'>
                <span 
                    className='inline-block cursor-pointer'
                >Blinnk</span>
                <span 
                    className='bg-[#FFB80E] h-6 w-1 inline-block'
                ></span>
            </h3>
            <h1 className='text-[#2F2F2F] font-semibold text-[16px] md:text-[24px]'>
                Reset Password
            </h1>
            <p className='text-center md:hidden'>
                Enter the registered email address used for <br /> your account
            </p>
            <form className='flex flex-col gap-3 md:shadow-lg md:bg-[#FDFDFD] p-4 rounded-lg md:gap-5'>
                <div className='flex flex-col text-left gap-[6px]'>
                    <label className='font-medium'>Email</label>
                    <input 
                        className='outline-none py-3 px-6 rounded-lg border border-[#BFBFBF]'
                        type='text'
                        placeholder='Enter your email address here' 
                        {...register('email')}
                    />
                </div>
                <GoogleButton>
                    Reset
                </GoogleButton>
            </form>
        </div>
    </FormPage>
  )
}
