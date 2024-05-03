import { ReactNode } from 'react'

type Name = {
    google?: boolean,
    name?: string,
    children: ReactNode
}

export const GoogleButton = ({children, google}: Name) => {
  return (
    <button className={ `${google ? 'bg-[#2F2F2F] text-[#FDFDFD] flex items-center justify-center gap-3' : 'bg-[#FFB80E] text-[#2F2F2F]'} mx-auto cursor-pointer w-[100%] font-medium py-3 px-6 rounded-lg text-[16px]`}>
      {children}
    </button>
  )
}
