import React from 'react'
function MiniComponent(props)
{
    return (
        <div className=' shadow-md drop-shadow-md font-Inter'>

            {props.type}
            <img src={props.img} alt="img" className='rounded' />
        </div>
    )
}

export default MiniComponent
