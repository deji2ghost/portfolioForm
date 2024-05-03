import { GoogleButton } from '../Button/GoogleButton'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { faGoogle } from '@fortawesome/free-brands-svg-icons'
import { FormPage } from './FormPage'
import { Link } from 'react-router-dom'
import { useState } from 'react'


export const SignUp = () => {
    const [visible, setVisible] = useState(false)
    const handleVisible = () => {
        setVisible(!visible)
    }

   

    const schema = yup.object().shape({
        email: yup.string().email().required(),
        password: yup.string().min(4).max(20).required()
    })

    const { register } = useForm({
        resolver: yupResolver(schema)
    })
  return (
    <FormPage>
        <div className='mx-auto text-center flex flex-col gap-3 mt-8 md:mt-0 md:gap-6 md:w-[37%]'>
            <h3 className='hidden md:flex items-center justify-center italic text-[#2F2F2F] font-semibold text-[16px]'>
                <span 
                    className='inline-block cursor-pointer'
                >Blinnk</span>
                <span 
                    className='bg-[#FFB80E] h-6 w-1 inline-block'
                ></span>
            </h3>
            <h1 className='text-[#2F2F2F] font-semibold text-[16px] md:text-[24px]'>
                Create Account
            </h1>
            <div className='flex flex-col md:shadow-lg md:bg-[#FDFDFD] gap-4 p-4 rounded-lg md:gap-5'>
                <GoogleButton google>
                    {/* <div className=' flex items-center gap-3'>
                    </div> */}
                        <FontAwesomeIcon icon={faGoogle} />
                        <h4>Sign up with Google</h4>
                </GoogleButton>
                <p className='font-medium'>Or</p>
                <form className='flex flex-col gap-3 md:gap-[22px]'>
                    <div className='grid grid-cols-2 gap-4'>
                        <div className='flex flex-col text-left gap-[6px]'>
                            <label className='font-medium'>Firstname</label>
                            <input 
                                className='outline-none py-3 px-6 rounded-lg border border-[#BFBFBF]'
                                type='text'
                                placeholder='Enter your Firstname' 
                                {...register('email')}
                            />
                        </div>
                        <div className='flex flex-col text-left gap-[6px]'>
                            <label className='font-medium'>Lastname</label>
                            <input 
                                className='outline-none py-3 px-6 rounded-lg border border-[#BFBFBF]'
                                type='text'
                                placeholder='Enter your Lastname' 
                                {...register('email')}
                            />
                        </div>
                    </div>
                    <div className='flex flex-col text-left gap-[6px]'>
                        <label className='font-medium'>Email</label>
                        <input 
                            className='outline-none py-3 px-6 rounded-lg border border-[#BFBFBF]'
                            type='text'
                            placeholder='Enter your email address' 
                            {...register('email')}
                        />
                    </div>
                    <div className='flex flex-col text-left relative gap-[6px]'>
                        <label className='font-medium'>Password</label>
                        <input 
                            className='outline-none py-3 px-6 rounded-lg border border-[#BFBFBF]'
                            type={visible ? 'text' : 'password'}
                            placeholder='***********' 
                            {...register('password')}
                        />
                        <div 
                            className='text-[#2F2F2F] absolute right-3 bottom-3 cursor-pointer'
                            onClick={handleVisible}
                        >
                            { visible ? <FontAwesomeIcon icon={faEyeSlash} /> : <FontAwesomeIcon icon={faEye} />}
                        </div>
                    </div>
                    <GoogleButton>
                        <h4>Signup</h4>
                    </GoogleButton>
                </form>
            </div>
            <p className='text-[17px]'>
                <span 
                    className='text-[#2F2F2F]'
                >Already have an account?</span>
                <span 
                    className='text-[#FFB80E] cursor-pointer'
                ><Link to='/LoginPage'>Login</Link></span>
            </p>
        </div>
    </FormPage>
  )
}
