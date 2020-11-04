import React from 'react'
import "./style8.css"

export default function Carts({carts}){
    return (
        <div className="wrap-carts">
            {carts.length === 0 && <div className="empty-cart" >Chưa có sản phẩm được chọn</div>}
            <button className="finish-carts">
                <span className="title-finish-carts">Hoàn Thành Đặt Mua</span>
            </button>
            {carts.length !== 0 && (carts.map((item,index)=>{
                return (
                <div className="card-carts">
                    <div className="wrap-img-carts" >
                        <img className="img-carts" src={item.src}></img>
                    </div>
                    <div className="note-carts">
                        <span className="title-carts" >Mô Tả</span>
                        <span className="content-carts" >{item.tittle}</span>
                    </div>
                    <div className="price-carts">
                        <span className="title-price-carts">Giá</span>
                        <span className="content-price-carts">{item.price}.000đ</span>
                    </div>
                    <div className="delete-carts">
                        <div className="title-delete-carts">Huỷ Đặt Hàng</div>
                        <button className="content-delete-carts">Xoá</button>
                    </div>
                </div>
            )}))}
        </div>
    )
}