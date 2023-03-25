import React from 'react'
import bg from "../assects/img/Снимок 2.png"
import next from "../assects/SVG/Vector.svg";
import preview from "../assects/SVG/Vector-1.svg";
function HeroSection()
{
    return (
        <div className='relative pt-[5rem] pl-[4rem] w-full h-3/5 flex flex-col justify-center font-Inter text-White overflow-hidden'>
            <div className='p-10 flex flex-col gap-2 z-10 pl-[6rem]'>
                <h3 className='text-Gray uppercase font-m'>пОЛУЧИТЕ НЕВЕРОЯТНО ПРИЯТНЫЙ БОНУС</h3>
                <h1 className='text-[2rem] text-White font-l w-1/2'> <span className='text-Blue '>Получи 150%</span>  бонус на первый депозит🔥</h1>

                <div className='flex items-center gap-8'>
                    <button className='btn'>Регистрация 🎰</button>

                    <button>Больше информации 🃏</button>
                </div>
            </div>

            <img src={bg} alt="bg img" className='w-auto absolute top-0 right-0 bottom-0 h-full object-cover z-0' />

            <div className='flex justify-between z-20 p-5 absolute top-1/2 w-full right-0 pr-[6rem] left-[4rem]'>
                <img src={next} alt="next icon" className=' cursor-pointer' />
                <img src={preview} alt="next icon" className=' cursor-pointer' />
            </div>


        </div>
    )
}

export default HeroSection
