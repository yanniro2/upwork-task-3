import React from 'react'
import logo from "../assects/SVG/logo Main .svg"
import dice from "../assects/SVG/dice.svg"
import gift from "../assects/SVG/gift.svg"
import extention from "../assects/SVG/extension.svg"
import filter from "../assects/SVG/filters.svg"
import boy from "../assects/SVG/boy.svg"
import readme from "../assects/SVG/readme.svg"
import star from "../assects/SVG/Star 1.svg"
import game_1 from "../assects/SVG/game 1.svg"
import game_2 from "../assects/SVG/game 2.svg"
import game_3 from "../assects/SVG/game 3.svg"
import plus from "../assects/SVG/plus.svg"
import layout from "../assects/SVG/layout.svg"
import log_off from "../assects/SVG/log-off.svg"
function SideNavBar()
{
    return (
        <nav className='fixed w-[4rem] top-0 bottom-0 left-0 h-screen bg-Dark-blue-2 drop-shadow-md z-[1000] shadow-md flex flex-col justify-between items-center py-5 cursor-pointer hover:w-[15rem] transition-all hover:items-start  hover:pl-8  group text-Gray'>
            <div className="top bg-Blue p-2 rounded-xl group-hover:-ml-1">
                <img src={logo} alt="logo img" className='w-[1.5rem]' />
            </div>
            <div className=' flex flex-col justify-between item-center h-2/5 group-hover:pl-1'>
                <a href="#" className='flex items-center gap-5 capitalize hover:text-Blue transition-all '>
                    <img src={layout} alt="icon img" className='w-[1.2rem] h-[1.2rem]' />
                    <span className='hidden w-0  group-hover:flex group-hover:w-full  transition-all '>Online Casinos</span>
                </a>
                <a href="#" className='flex items-center gap-5 capitalize hover:text-Blue transition-all'>
                    <img src={dice} alt="icon img" className='w-[1.2rem] h-[1.2rem]' />
                    <span className='hidden w-0  group-hover:block group-hover:w-full transition-all'>Games</span>
                </a>
                <a href="#" className='flex items-center gap-5 capitalize hover:text-Blue transition-all'>
                    <img src={gift} alt="icon img" className='w-[1.2rem] h-[1.2rem]' />
                    <span className='hidden w-0  group-hover:block group-hover:w-full transition-all'>Bonus</span>
                </a>
                <a href="#" className='flex items-center gap-5 capitalize hover:text-Blue transition-all'>
                    <img src={extention} alt="icon img" className='w-[1.2rem] h-[1.2rem]' />
                    <span className='hidden w-0  group-hover:block group-hover:w-full transition-all'>Guide</span>
                </a>
                <a href="#" className='flex items-center gap-5 capitalize hover:text-Blue transition-all'>
                    <img src={filter} alt="icon img" className='w-[1.2rem] h-[1.2rem]' />
                    <span className='hidden w-0  group-hover:block group-hover:w-full transition-all'>Complaints</span>
                </a>
                <a href="#" className='flex items-center gap-5 capitalize hover:text-Blue transition-all'>
                    <img src={boy} alt="icon img" className='w-[1.2rem] h-[1.2rem]' />
                    <span className='hidden w-0  group-hover:block group-hover:w-full transition-all'>User Reviews</span>
                </a>
                <a href="#" className='flex items-center gap-5 capitalize hover:text-Blue transition-all'>
                    <img src={readme} alt="icon img" className='w-[1.2rem] h-[1.2rem]' />
                    <span className='hidden w-0  group-hover:block group-hover:w-full transition-all'>News</span>
                </a>
            </div>
            <div className='flex h-2/5 flex-col items-center justify-evenly group-hover:pl-1 group-hover:items-start'>
                <a href="#" className='flex items-center gap-5 uppercase hover:text-Blue transition-all'>
                    <img src={star} alt="icon img" />
                    <span className='hidden w-0  group-hover:block group-hover:w-full transition-all'>Favorite casinos</span>
                </a>
                <a href="#" className='flex items-center gap-5 capitalize hover:text-Blue transition-all'>
                    <img src={game_1} alt="icon img" className=' border-[1px] rounded-full p-1 border-Blue ' />
                    <span className='hidden w-0  group-hover:block group-hover:w-full transition-all'>name 1</span>
                </a>
                <a href="#" className='flex items-center gap-5 capitalize hover:text-Blue transition-all'>
                    <img src={game_2} alt="icon img" className=' border-[1px] rounded-full p-1 border-Blue ' />
                    <span className='hidden w-0  group-hover:block group-hover:w-full transition-all'>name 2</span>
                </a>
                <a href="#" className='flex items-center gap-5 capitalize hover:text-Blue transition-all'>
                    <img src={game_3} alt="icon img" className=' border-[1px] rounded-full p-1 border-Blue ' />
                    <span className='hidden w-0  group-hover:block group-hover:w-full transition-all'>name 3</span>
                </a>
                <a href="#" className='flex items-center gap-5 capitalize hover:text-Blue transition-all'>
                    <img src={plus} alt="icon img" className=' border-[1px] rounded-full p-[5px] border-Blue border-dashed' />
                    <span className='hidden w-0  group-hover:block group-hover:w-full transition-all'>name 4</span>
                </a>

            </div>
            <div className="bottom group-hover:pl-2 flex gap-5 capitalize hover:text-Blue transition-all">
                <img src={log_off} alt="img logo" />
                <span className='hidden w-0  group-hover:block group-hover:w-full transition-all'>Logout</span>
            </div>
        </nav>
    )
}

export default SideNavBar
