import React from 'react'
import img_1 from "../assects/img/banner small (1).png"
import img_2 from "../assects/img/banner small (2).png"
import img_3 from "../assects/img/banner small (3).png"
import img_4 from "../assects/img/banner small (4).png"
import img_5 from "../assects/img/banner small (5).png"
import img_6 from "../assects/img/banner small (6).png"
function Card()
{
    return (
        <div className=' font-Inter flex flex-col gap-3 w-full h-auto bg-Dark-blue-2 p-5 rounded-2xl '>
            <h3 className=' font-m'>Высокий бонус 🤑</h3>
            <div className='flex items-center justify-between w-full flex-col gap-3'>
                {/* 1 */}
                <div className='flex  items-center justify-between w-full'>

                    <img src={img_1} alt="img banner" className='w-[6rem] h-[3rem] object-cover rounded-xl drop-shadow' />

                    <h4 className=' font-m'>Stay Casino 😝</h4>
                    <button className='btn'>$1550</button>
                </div>

                {/* 2 */}
                <div className='flex  items-center justify-between w-full'>

                    <img src={img_2} alt="img banner" className='w-[6rem] h-[3rem] object-cover rounded-xl drop-shadow' />

                    <h4 className=' font-m'>Stay Casino 😝</h4>
                    <button className='btn'>$1550</button>
                </div>
                {/* 3 */}
                <div className='flex  items-center justify-between w-full'>

                    <img src={img_3} alt="img banner" className='w-[6rem] h-[3rem] object-cover rounded-xl drop-shadow' />

                    <h4 className=' font-m'>Stay Casino 😝</h4>
                    <button className='btn'>$1550</button>
                </div>
                {/* 4 */}
                <div className='flex  items-center justify-between w-full'>

                    <img src={img_4} alt="img banner" className='w-[6rem] h-[3rem] object-cover rounded-xl drop-shadow' />

                    <h4 className=' font-m'>Stay Casino 😝</h4>
                    <button className='btn'>$1550</button>
                </div>
                {/* 5 */}
                <div className='flex  items-center justify-between w-full'>

                    <img src={img_5} alt="img banner" className='w-[6rem] h-[3rem] object-cover rounded-xl drop-shadow' />

                    <h4 className=' font-m'>Stay Casino 😝</h4>
                    <button className='btn'>$1550</button>
                </div>
                {/* 6 */}
                <div className='flex  items-center justify-between w-full'>

                    <img src={img_6} alt="img banner" className='w-[6rem] h-[3rem] object-cover rounded-xl drop-shadow' />

                    <h4 className=' font-m'>Stay Casino 😝</h4>
                    <button className='btn'>$1550</button>
                </div>

            </div>
        </div>
    )
}

export default Card
