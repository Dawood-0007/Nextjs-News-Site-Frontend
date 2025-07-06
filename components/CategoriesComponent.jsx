"use client"
import React from 'react'
import "../assets/BlogList.css"
import SubComponents from "./SubComponents"

const src1 = "https://www.imf.org/external/pubs/ft/fandd/2020/06/images/frieden-1600.jpg"
const src2 = "https://img.etimg.com/thumb/width-420,height-315,imgsize-601066,resizemode-75,msid-72658400/markets/stocks/news/world-economy-haunted-by-risk-just-got-a-double-shot-in-the-arm/world-economy-shutter-1200.jpg"
const src3 = "https://media.istockphoto.com/id/1130538466/photo/arrows-with-star-on-chalkboard-background-3d-rendering.jpg?s=612x612&w=0&k=20&c=UpR51mdm0VI0Yti0FBs5ZpwCpY31Ls7FVZaf9Vz1194="
const src4 = "https://thumbs.dreamstime.com/b/hand-pressing-social-media-icon-27275844.jpg"

const CategoriesComponent = () => {
  return (
    <div className='podcast-section'>
        <h1 className='section-h1'>See According to Categories! </h1>
        <div className="podcast-container">
            <SubComponents title="Politics" src={src1}/>
            <SubComponents title="Economics" src={src2}/>
            <SubComponents title="Statistics" src={src3}/>
            <SubComponents title="Social" src={src4}/>
            </div>
    </div>
  )
}

export default CategoriesComponent