import React from 'react'
import './style5.css'

export default () => {
    return (
        <div className="last-line">
            <img className="end-icon" src="https://coolmate.cdn.vccloud.vn/images/logo-coolmate.svg"/>
            <div className="end-wrap-text">
                <span className="end-text">GỌI MUA HÀNG, HỖ TRỢ (08:00 - 21:00)</span>
                <div className="end-wrap-icon">
                    <img className="end-icon-1 end-icon-1-1" src={require('../icon/icon4.png')}/>
                    <span className="end-text">1900.272737</span>
                </div>
            </div>
            <div className="end-wrap-text">
                <span className="end-text">LIKE COOLMATE NHẬN ƯU ĐÃI MỖI NGÀY</span>
                <div className="end-wrap-icon">
                    <img className="end-icon-1" src={require('../icon/icon5.png')}/>
                    <img className="end-icon-1" src={require('../icon/icon6.png')}/>
                    <img className="end-icon-1"src={require('../icon/icon7.png')}/>
                </div>
            </div>
        </div>
    )
}