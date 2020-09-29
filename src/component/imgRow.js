import React from 'react'
import Img1 from '../img/img5.jpg'
import Img2 from '../img/img6.jpg'
import Img3 from '../img/img7.jpg'
import Img4 from '../img/img8.jpg'
import './style3.css'

export default ()=>{
    return (
        <div className="imgRow">
            <div className="product-tittle">
                <a href="#"><img src={Img1} className="img-box"/></a>
                <div className="tittle">
                    <span className="content-img">TẠO BASIC BOX</span>
                    <div className="long-arow"></div>
                </div>
            </div>
            <div className="product-tittle"> 
                <a href="#"><img src={Img2} className="img-box"/></a>
                <div className="tittle">
                    <span>ÁO THUN, ÁO BA LỖ</span>
                    <div className="long-arow"></div>
                </div>
            </div>
            <div className="product-tittle">
                <a href="#"><img src={Img3} className="img-box"/></a>
                <div className="tittle">
                    <span>QUẦN LÓT</span>
                    <div className="long-arow"></div>
                </div>
            </div>
            <div className="product-tittle">
                <a href="#"><img src={Img4} className="img-box"/></a>
                <div className="tittle">
                    <span>PHỤ KIỆN</span>
                    <div className="long-arow"></div>
                </div>
            </div>
        </div>
    )
}