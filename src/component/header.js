import React, { useState } from 'react';
import './style1.css'
import Icon2 from "../icon/icon2.png"
import Icon3 from "../icon/icon3.png"
import classNames from 'classnames'

import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";


export default () => {
    const [state, setState] = useState({active: false})

    function dropDown(){
        return(
            setState({active: !state.active})
        )
    }

    return(    
            <div className="header">          
                <div className="narbar">
                    <Link to="/new-project-cv/">
                        <a className="wrap-icon"> 
                            <img className="icon" src="https://coolmate.cdn.vccloud.vn/images/logo-coolmate.svg"/>
                        </a>
                    </Link>
                    <div className={classNames("wrap-narbar", {'active-wrap-narbar': state.active })} onClick={dropDown}>
                        <div className={classNames('menu-dropdown',{'active-display' : !state.active})}></div>
                        <div className={classNames('wrap',{'active-display' : state.active})}> 
                            <Link to="/product">
                                <a className={classNames('a', 'tag-a', {'active-display' : state.active})} > 
                                        SALES
                                </a>
                            </Link>
                            <ul className={classNames('ul',{'active-display' : state.active})}>
                                <Link to="/product">
                                    <li className="li"> 
                                        <a href="#">Coolmate Outlet, chỉ từ 39k</a>
                                        <span className="span">NEW</span>
                                    </li>
                                </Link>
                            </ul>
                        </div>
                        <div className={classNames('wrap',{'active-display' : state.active})}> 
                            <Link to="/product">
                                <a className={classNames('a',{'active-display' : state.active})} >
                                    TỦ ĐỒ COOLMATE
                                </a>
                            </Link>
                            <span className="tag-span">Mới</span>
                            <ul className={classNames('ul', 'tag-ul', {'active-display' : state.active})}>
                                <Link to="/product">
                                    <li className="li"> 
                                        <a href="#" >TỦ ĐỒ COOLMATE</a>
                                    </li>
                                </Link>
                                <Link to="/create-basic-box">
                                    <li className="li"> 
                                        <a href="#">TỰ TẠO TỦ ĐỒ CHO RIÊNG BẠN</a>
                                    </li>
                                </Link>
                            </ul>
                        </div>
                        <div className={classNames('wrap',{'active-display' : state.active})}>
                            <Link to="/create-basic-box">
                                <a href="#" className={classNames('a',{'active-display' : state.active})} >
                                    ÁO THUN
                                </a>
                            </Link>
                            <div className="arow"></div>
                            <ul className={classNames('ul',{'active-display' : state.active})}>
                                <Link to="/create-basic-box">
                                    <li className="li"> 
                                        <a href="#" >ÁO POLO</a>
                                        <span className="span">NEW</span>
                                    </li>
                                </Link>
                                <Link to="/create-basic-box">
                                    <li className="li"> 
                                        <a href="#">ÁO THỂ THAO NAM MAXCOOL</a>
                                    </li>
                                </Link>
                                <Link to="/create-basic-box">
                                    <li className="li"> 
                                        <a href="#">ÁO COTTON COMPACT PHIÊN BẢN PREMIUM</a>
                                        <span className="span span-hot">HOT</span>
                                    </li>
                                </Link>
                                <Link to="/create-basic-box">
                                    <li className="li"> 
                                        <a href="#">ÁO THUN</a>
                                    </li>
                                </Link>
                            </ul>
                        </div>
                        <div className={classNames('wrap',{'active-display' : state.active})}>
                            <Link to="/create-basic-box">
                                <a href="#" className={classNames('a',{'active-display' : state.active})} >
                                    QUẦN
                                </a>
                            </Link>
                            <div className="arow"></div>
                            <ul className={classNames('ul', 'tag-ul', {'active-display' : state.active})}>
                                <Link to="/create-basic-box">
                                    <li className="li"> 
                                        <a href="#" >QUẦN LÓT NAM</a>
                                    </li>
                                </Link>
                                <Link to="/create-basic-box">
                                    <li className="li"> 
                                        <a href="#">QUẦN SHORT, QUẦN ĐÙI</a>
                                    </li>
                                </Link>
                            </ul>
                        </div>
                        <div className={classNames('wrap',{'active-display' : state.active})}>
                            <Link to="/create-basic-box">
                                <a href="#" className={classNames('a',{'active-display' : state.active})} >
                                    TẤT VỚ
                                </a>
                            </Link>
                        </div>
                        <div className={classNames('wrap',{'active-display' : state.active})}>
                            <Link to="/product">
                                <a href="#" className={classNames('a',{'active-display' : state.active})}>
                                    CHỌN SIZE
                                </a>
                            </Link>
                        </div>
                        <div className={classNames('wrap',{'active-display' : state.active})}>
                            <Link to="/product">
                                <a href="#" className={classNames('a',{'active-display' : state.active})}>
                                    MẶC ĐẸP SỐNG CHẤT
                                </a>
                                <span className="tag-span">Mới</span>
                            </Link>
                        </div>
                    </div>
                    <div className="flex-grow"></div>
                    <Link to="/cart">
                        <div className="wrap-icon-1">
                            <img src={Icon3} className="icon-1-1"/>
                            <span>Giỏ Hàng</span>
                        </div>
                    </Link>
                </div>
            </div>
    )
}