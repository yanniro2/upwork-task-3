import React from 'react'

function Popup({ handlePop })
{
    return (
        <div className='fixed w-screen h-screen p-[5rem] backdrop-blur-2xl z-[2000] font-Inter flex items-center justify-center overflow-hidden '>
            <div className='flex w-full h-full items-center justify-center text-center'>
                <h3 className=' text-White text-[1.5rem] capitalize font-l'>Popup Page if you need give me some content</h3>

                <div className='top-[1rem] right-[2rem] fixed'>
                    <button className='btn text-White capitalize font-m drop-shadow-md' onClick={handlePop}>close</button>
                </div>
            </div>

        </div>
    )
}

export default Popup
