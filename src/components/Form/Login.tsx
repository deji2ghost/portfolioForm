import { useState } from 'react'
import { GoogleButton } from '../Button/GoogleButton'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle } from '@fortawesome/free-brands-svg-icons'
import { FormPage } from './FormPage'
import { Link } from 'react-router-dom'



export const Login = () => {
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
    <div>
    <FormPage>
        <div className='mx-auto text-center mt-8 md:mt-0 flex flex-col gap-3 md:gap-6 md:w-[37%]'>
            <h3 className='hidden md:flex items-center justify-center italic text-[#2F2F2F] font-semibold text-[16px]'>
                <span 
                    className='inline-block cursor-pointer'
                >Blinnk</span>
                <span 
                    className='bg-[#FFB80E] h-6 w-1 inline-block'
                ></span>
            </h3>
            <h1 className='text-[#2F2F2F] text-[16px] font-semibold md:text-[24px]'>
                Login
            </h1>
            <div className='flex flex-col md:shadow-lg md:bg-[#FDFDFD] p-4 md:rounded-lg gap-4 md:gap-5'>
                <GoogleButton google>
                    <FontAwesomeIcon icon={faGoogle} />
                    <h4>Sign in with Google</h4>
                </GoogleButton>
                <p className='font-medium'>Or</p>
                <form className='flex flex-col gap-3 md:gap-[22px]'>
                    <div className='flex flex-col text-left gap-1 md:gap-[4px]'>
                        <label className='font-medium'>Email</label>
                        <input 
                            className='outline-none py-3 px-6 rounded-lg border border-[#BFBFBF]'
                            type='text'
                            placeholder='Enter your email address here' 
                            {...register('email')}
                        />
                    </div>
                    <div className='flex flex-col text-left relative gap-1 md:gap-[4px]'>
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
                    <p
                        className='text-[#FFB80E] text-left cursor-pointer text-[15px]'
                    ><Link to='/ResetPage'>Forgot Password?</Link></p>
                    <GoogleButton>
                        Login
                    </GoogleButton>
                </form>
            </div>
            <p className='text-[17px]'>
                <span 
                    className='text-[#2F2F2F]'
                >Don't have an account?</span>

                <span 
                    className='text-[#FFB80E] cursor-pointer'
                ><Link to='/SignupPage'>Create an account</Link></span>
            </p>
        </div>
    </FormPage>
    </div>

  )
}
