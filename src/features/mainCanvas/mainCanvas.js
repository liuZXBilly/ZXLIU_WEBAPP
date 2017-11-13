import React from 'react'
import './mainCanvas.css'

const MainCanvas = (props)=> {
    return (
        <div>
            <div className='contentCanvas'>
                <div className='adCanvas'>
                    <img src='./imgs/pics/Zhanxiang_photo.png' className='selfie' />
                    <div className='selfIntro'>
                        <span> Zhanxiang Liu </span>
                    </div>
                </div>
                <div className='blogCanvas'>
                    123
                </div>
            </div>
        </div>
    )
}

export default MainCanvas