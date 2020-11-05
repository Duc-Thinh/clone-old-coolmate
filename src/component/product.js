import React, { useState } from 'react'
import './style6.css'
import classNames from 'classnames'

export default function Product({carts, addcart}){  
    const [products] = useState(
        {products : [
            { 
                src: require('../img-product/img1.jpg'),
                tittle: "Style Box - kiến tạo phong cách",
                point: 4.5,
                price: 599,
                oldPrice: 796,
                discount: 25,
                new: false
            },
            { 
                src: require('../img-product/img2.jpg'),
                tittle: "Chạm là mát box - love at first touch",
                point: 4.5,
                price: 359,
                oldPrice: 478,
                discount: 25,
                new: false
            },
            { 
                src: require('../img-product/img3.jpg'),
                tittle: "Cool Inside Out Box - chất từ trong ra ngoài",
                point: 4.5,
                price: 499,
                oldPrice: 647,
                discount: 23,
                new: false
            },
            { 
                src: require('../img-product/img4.jpg'),
                tittle: "Mini box - chuẩn chỉ đẹp trai",
                point: 5,
                price: 319,
                oldPrice: 419,
                discount: 24,
                new: false
            },
            { 
                src: require('../img-product/img5.jpg'),
                tittle: "Ultra Box - Bứt phá mọi giới hạn",
                point: 5,
                price: 369,
                oldPrice: 451,
                discount: 19,
                new: false
            },
            { 
                src: require('../img-product/img8.jpg'),
                tittle: "Must Have Item Box",
                point: 4.5,
                price: 499,
                oldPrice: 938,
                discount: 22,
                new: false
            },
            { 
                src: require('../img-product/img8.jpg'),
                tittle: "Max Ultra Box - Thể thao mỗi ngày",
                point: 5,
                price: 399,
                oldPrice: 501,
                discount: 21,
                new: false
            },
            { 
                src: require('../img-product/img8.jpg'),
                tittle: "Gentle Box 1 - Lịch lãm không cần nghĩ",
                point: 4.5,
                price: 439,
                oldPrice: 508,
                discount: 27,
                new: false
            },
            { 
                src: require('../img-product/img9.jpg'),
                tittle: "Gentle Box 1 - Lịch lãm không cần nghĩ",
                point: 4.5,
                price: 439,
                oldPrice: 508,
                discount: 27,
                new: true
            },
            { 
                src: require('../img-product/img10.jpg'),
                tittle: "Scenery Box 1 - Đi rồi sẽ đến",
                point: 4.5,
                price: 399,
                oldPrice: 558,
                discount: 29,
                new: true
            },
            { 
                src: require('../img-product/img11.jpg'),
                tittle: "Gentle Box 2 - Lịch lãm không cần nghĩ",
                point: 4.5,
                price: 439,
                oldPrice: 598,
                discount: 27,
                new: true
            },
            { 
                src: require('../img-product/img12.jpg'),
                tittle: "Scenery Box 2 - Đi rồi sẽ đến",
                point: 4.5,
                price: 399,
                oldPrice: 558,
                discount: 29,
                new: true
            }
        ]
        }
    )

    const [imgActive, setImgActive] = useState({
        activeImg : true,
        imgDrop: false
    })

    const [items, setItems] = useState({
        Items : products.products
    })

    function active(){
        return setImgActive({
            activeImg : !imgActive.activeImg,
            imgDrop: imgActive.imgDrop})
    }

    function dropImg(){
        return setImgActive({
            activeImg : imgActive.activeImg,
            imgDrop: !imgActive.imgDrop
        })
    }

    function sortProduct(key){
        switch(key){
            case "New":
                setItems({Items: products.products.reverse()}) 
                break
            case "topPrice":
                setItems({Items: products.products.slice(8)}) 
                break
            case "lowToHigh":
                setItems({Items : products.products.sort(function(a,b){
                    return(a.price - b.price)
                })})
                break
            case "highToLow":
                setItems({Items : products.products.sort(function(a,b){
                    return(b.price - a.price)
                })})
                break
            default :
                setItems({Items : products.products.sort(function(a,b){
                    return(b.discount - a.discount)
                })})
                break
        }
    }

    const values = items.Items 

    const product = values.map((item,index)=>{
        return (
                <div className={classNames("wrap-product", {"changeImg": !imgActive.activeImg})}>
                    <div className="wrap-product-img">
                        <img className="product-img" src={item.src}/>
                        <span className={classNames({disNone: !item.new})}>NEW</span>
                    </div>
                    <div className="name-product">
                        {item.tittle}
                    </div>
                    <div className="wrap-product-point">
                        <span className="product-point">{item.point}/5</span>
                        <div className="star-product"></div>
                    </div>
                    <div className="wrap-price-product">
                        <span className="price-product-1">{item.price}.000đ</span>
                        <span className="price-product-2">{item.oldPrice}.000đ</span>
                        <span className="discount-product">-{item.discount}%</span>
                    </div>
                    <div className="chose-product" onClick={()=>addcart(item)}>chọn mua</div>               
                </div>
        )
    })

    

    return (
        <div className="wrap-cart">
            <div className="header-cart">
                <span className="cart-text-1">
                    TẤT CẢ 12 READY-TO-USE BOXES
                </span>
                <div className="wrap-cart-text-2"> 
                    <span className="cart-text-2">Xếp theo:</span>
                    <div className="cart-text-3" onClick={dropImg}>
                        Bán chạy
                        <div className="drop-arow-1"></div>
                    </div>  
                    <ul className={classNames("drop-ul-1", {"disNone": !imgActive.imgDrop})} >
                        <div className="wrap-drop">
                            <li className="drop-li" onClick={()=>{sortProduct("New")}}>Mới nhất</li>
                            <li className="drop-li" onClick={()=>{sortProduct("topPrice")}}>Bán chạy nhất</li>
                            <li className="drop-li" onClick={()=>{sortProduct("lowToHigh")}}>Giá thấp đến cao</li>
                            <li className="drop-li" onClick={()=>{sortProduct("highToLow")}}>Giá cao đến thấp</li>
                            <li className="drop-li" onClick={()=>{sortProduct("discount")}}>% giảm giá nhiều</li>
                        </div>
                    </ul>
                </div>
                <div className="box-plus">
                    <span className="cart-text-4">Ảnh</span>
                    <div className="box-img" onClick={active}>
                        <div className={classNames("box-plus-1", {"activeImg": imgActive.activeImg})} ></div>
                        <span className={classNames("cart-text-5", {"activeImg-1": imgActive.activeImg})}>Nhỏ</span>
                    </div>
                    <div className="box-img" onClick={active}>
                        <div className={classNames("box-plus-2", {"activeImg": !imgActive.activeImg})} ></div>
                        <span className={classNames("cart-text-6", {"activeImg-1": !imgActive.activeImg})}>Lớn</span>
                    </div>
                </div>      
            </div>
            <div className="wrap-cartItem">
                        <img src={require('../icon/cart.png')} className="img-wrap-content-select"/>
                        <div className="item-picked">{carts.length}</div>
                    </div>
            <div className="products">
                {product}
            </div>
        </div>
    )
}