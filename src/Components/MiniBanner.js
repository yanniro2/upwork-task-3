import React from 'react'
import Features from "../assects/SVG/Features Icons.svg"
import img_1 from "../assects/img/image.png"
import img_2 from "../assects/img/image-1.png"
import img_3 from "../assects/img/image-2.png"
import img_4 from "../assects/img/image-3.png"
import img_5 from "../assects/img/image-4.png"
import img_6 from "../assects/img/image-5.png"
function MiniBanner()
{
    return (
        <div className='text-White pl-[5rem] pr-3 rounded drop-shadow-md font-Inter text-[11px]'>
            <div className=' bg-Dark-blue-4 h-[6rem] flex justify-between w-full gap-5 p-3'>
                {/* 1 */}
                <div className='flex item-center justify-between p-1 w-[16%] h-full'>
                    <img src={Features} alt="img" className='p-2' />
                    <h3 className='w-1/2 text-center uppercase flex items-center justify-center  '>ОНИ ПОБЕДИТЕЛИ!</h3>
                </div>

                {/* 2 */}
                <div className='flex item-center justify-between p-1 gap-3 w-[14%] h-full'>
                    <img src={img_2} alt="img" className='rounded drop-shadow object-cover  h-full w-1/2' />
                    <div className='flex flex-col justify-between w-1/2 h-full'>
                        <h4 className='uppercase '>book of amon</h4>
                        <div className='flex justify-between items-center capitalize gap-3'>nai**
                            <span className=' bg-Gray-2 rounded p-1 text-yellow'>4000$</span>
                        </div>
                    </div>
                </div>

                {/* 3 */}
                <div className='flex item-center justify-between p-1 gap-3 w-[14%] h-full'>
                    <img src={img_3} alt="img" className='rounded drop-shadow object-cover w-1/2 h-full' />
                    <div className='flex flex-col justify-between w-1/2 '>
                        <h4 className='uppercase '>Space walk II</h4>
                        <div className='flex justify-between items-center capitalize gap-3'>nai**
                            <span className=' bg-Gray-2 rounded p-1 text-yellow'>4000$</span>
                        </div>
                    </div>
                </div>

                {/* 4 */}
                <div className='flex item-center justify-between p-1 gap-3 w-[14%] h-full'>
                    <img src={img_4} alt="img" className='rounded drop-shadow object-cover w-1/2 h-full' />
                    <div className='flex flex-col justify-between w-1/2 '>
                        <h4 className='uppercase '> Stardust - ep </h4>
                        <div className='flex justify-between items-center capitalize gap-3'>nai**
                            <span className=' bg-Gray-2 rounded p-1 text-yellow'>4000$</span>
                        </div>
                    </div>
                </div>

                {/* 5 */}
                <div className='flex item-center justify-between p-1 gap-3 w-[14%] h-full'>
                    <img src={img_5} alt="img" className='rounded drop-shadow object-cover w-1/2 h-full' />
                    <div className='flex flex-col justify-between w-1/2 '>
                        <h4 className='uppercase '>ARMS</h4>
                        <div className='flex justify-between items-center capitalize gap-3'>nai**
                            <span className=' bg-Gray-2 rounded p-1 text-yellow'>4000$</span>
                        </div>
                    </div>
                </div>

                {/* 6 */}
                <div className='flex item-center justify-between p-1 gap-3 w-[14%] h-full'>
                    <img src={img_6} alt="img" className='rounded drop-shadow object-cover w-1/2 h-full' />
                    <div className='flex flex-col justify-between w-1/2 '>
                        <h4 className='uppercase '>Dark skies</h4>
                        <div className='flex justify-between items-center capitalize gap-3'>nai**
                            <span className=' bg-Gray-2 rounded p-1 text-yellow'>4000$</span>
                        </div>
                    </div>
                </div>

                {/* 7 */}
                <div className='flex item-center justify-between p-1 gap-3 w-[14%] h-full'>
                    <img src={img_1} alt="img" className='rounded drop-shadow object-cover w-1/2 h-full ' />
                    <div className='flex flex-col justify-between w-1/2 '>
                        <h4 className='uppercase '>Living our loud</h4>
                        <div className='flex justify-between items-center capitalize gap-3'>nai**
                            <span className=' bg-Gray-2 rounded p-1 text-yellow'>4000$</span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default MiniBanner
