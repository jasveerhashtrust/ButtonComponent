
import { FC, MouseEventHandler } from 'react'

export enum SizeEnum {
    Large = 'Large',
    Regular = 'Regular',
}

export enum TypeEnum {
    Base = 'Base',
    Question = 'Question'
}

interface ButtonProps {
    size?: SizeEnum
    disabled?: boolean
    type?: TypeEnum
    icon?: React.ReactNode | React.ReactNode[]
    onClick?: MouseEventHandler<HTMLElement>
    modifier?: string
    children?: React.ReactNode | string
}
const Button: FC<ButtonProps> = ({ size, disabled, type, icon, onClick, modifier, children, ...rest }) => {
    return (
        <>
            {type === 'Base' &&
                <button id='baseButton' onClick={onClick} disabled={disabled} className={` ${modifier ?? ``}  bg-[#747778] font-normal text-base flex flex-row active:bg-black focus:bg-black  justify-center items-center disabled:bg-[#B6BABB] ${icon && 'gap-[8px]'} ${size === "Large" && 'px-[17px] py-[10px] '} ${size === "Regular" && 'px-[16px]'}  hover:bg-black active:bg-black focus:border-[2px] focus:border-[#747778]  text-white w-full h-full rounded-[30px]`} {...rest} > {icon && <span>{icon}</span>} <div className={`${size === "Large" && 'px-[8px]'}`} >{children}</div></button>
            }
            {type === 'Question' &&
                <div id='questionButton' className={`${modifier ?? ``} w-full h-full  ${size === "Regular" && 'py-[6px] px-[16px]'} ${size === "Large" && 'py-[10px] pl-[17px] pr-[21px]'}  font-normal text-base  ${disabled && 'bg-[#B6BABB]  border-none text-white'} focus:shadow-[1px_2px_6px_rgba(0,0,0,0.24)] hover:shadow-[1px_2px_6px_rgba(0,0,0,0.24)] bg-white flex flex-row justify-center items-center border-[1px] border-black rounded-[28px]`} {...rest} >
                    <input id='radioBtn' disabled={disabled} className='w-[26px] h-[26px] disabled:hidden bg-black  checked:accent-black' type='radio' />
                    <label onClick={onClick} htmlFor='radioBtn' className='px-[8px]'>{children}</label>
                </div>
            }
        </>
    )
}

export default Button;
