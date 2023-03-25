import React from 'react'
import search from "../assects/SVG/search.svg"
function TopNavbar({ handlePop })
{
    return (
        <nav className='fixed top-0 left-[4rem] right-0 w-screen z-[1000] bg-Dark-blue-3 h-[5rem] drop-shadow-md shadow-md flex items-center justify-between px-5 font-Inter text-White py-3 pr-[6rem] backdrop-blur'>

            <div className='flex items-center gap-5 bg-Dark-blue-3'>
                <button className=''>
                    <img src={search} alt="search icon" className='btn' />
                </button>

                <input type="search" name="" id="" className='px-6 py-4 outline-none  placeholder:text-Gray bg-Dark-blue-3  rounded bg-trans' placeholder='Поиск казино, игр и многого другого...' />
            </div>

            <div className='flex flex-row gap-5'>



                <select name="" id="" className='uppercase  bg-Dark-blue-3  bg-trans'>
                    <option value="">Ru </option>
                    <option value="">En </option>
                </select>

                <button className='btn ' onClick={handlePop}>Войти 🎉</button>
                <button className='btn ' onClick={handlePop}>Регистрация 🚀</button>
            </div>

        </nav>
    )
}

export default TopNavbar
