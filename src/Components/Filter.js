import React, { useState } from 'react'

import MiniComponent from './MiniComponent.js'

function Filter({ handleBtn, product })
{



    return (
        <div className='text-White pl-[5rem] pr-3 rounded drop-shadow-md font-Inter w-4/5'>
            <div >
                <div className='flex gap-3'>
                    <button className='btn uppercase' value='All' onClick={handleBtn}>all</button>
                    <button className='btn uppercase bg-Gray' value='Action' onClick={handleBtn}>Type 1</button>
                    <button className='btn uppercase bg-Gray' value='Animation' onClick={handleBtn}>Type 2</button>
                </div>
            </div>

            <div className='flex gap-5 flex-wrap p-5'>
                {product.map((items) => (
                    <MiniComponent key={items.id} {...items} />
                ))}
            </div>
        </div>
    )
}

export default Filter
