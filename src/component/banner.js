import React, { useState, useEffect } from 'react'
import './style2.css'
import classNames from 'classnames'

export default () => {

    const [slide, setSlide] = useState([
        {url: require('../img/img22.jpg'), active:true},
        {url: require('../img/img1.jpg'), active: false},
        {url: require('../img/img3.jpg'), active: false}
    ])

    function click(item,index){
        return (setSlide(slide.map((items,indexs)=>{
            if(indexs === index){
                return({url: items.url, active: true})
            } else {
                return({url: items.url, active: false})
            }
        })))
    }

    const slideBanner = slide.map((item,index)=>{
        return <img className={classNames('img-banner', {'img-active': item.active})} src={item.url}/>
    })

    const button = slide.map((item,index)=>{
        return <div onClick={()=>{click(item,index)}} className={classNames('button', {'button-active': item.active})}></div>
    })

    return (
        <div className="banner">
        {slideBanner}
            <div className="wrap-button">
                {button}
            </div>
        </div>
    )
}