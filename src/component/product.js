import React, { useState } from 'react'
import './style6.css'
import classNames from 'classnames'

export default function Product(){  
    const [products, setProducts] = useState({products : [
        { 
            src: require('../img-product/img1.jpg'),
            tittle: "Style Box - kiến tạo phong cách",
            point: 4.5,
            newPrice: "599.000",
            oldPrice: "796.000",
            discount: 25,
            new: false
        },
        { 
            src: require('../img-product/img2.jpg'),
            tittle: "Chạm là mát box - love at first touch",
            point: 4.5,
            newPrice: "359.000",
            oldPrice: "478.000",
            discount: 25,
            new: false
        },
        { 
            src: require('../img-product/img3.jpg'),
            tittle: "Cool Inside Out Box - chất từ trong ra ngoài",
            point: 4.5,
            newPrice: "499.000",
            oldPrice: "647.000",
            discount: 23,
            new: false
        },
        { 
            src: require('../img-product/img4.jpg'),
            tittle: "Mini box - chuẩn chỉ đẹp trai",
            point: 5,
            newPrice: "319.000",
            oldPrice: "419.000",
            discount: 24,
            new: false
        },
        { 
            src: require('../img-product/img5.jpg'),
            tittle: "Ultra Box - Bứt phá mọi giới hạn",
            point: 5,
            newPrice: "369.000",
            oldPrice: "451.000",
            discount: 19,
            new: false
        },
        { 
            src: require('../img-product/img8.jpg'),
            tittle: "Must Have Item Box",
            point: 4.5,
            newPrice: "499.000",
            oldPrice: "938.000",
            discount: 22,
            new: false
        },
        { 
            src: require('../img-product/img8.jpg'),
            tittle: "Max Ultra Box - Thể thao mỗi ngày",
            point: 5,
            newPrice: "399.000",
            oldPrice: "501.000",
            discount: 21,
            new: false
        },
        { 
            src: require('../img-product/img8.jpg'),
            tittle: "Gentle Box 1 - Lịch lãm không cần nghĩ",
            point: 4.5,
            newPrice: "439.000",
            oldPrice: "508.000",
            discount: 27,
            new: false
        },
        { 
            src: require('../img-product/img9.jpg'),
            tittle: "Gentle Box 1 - Lịch lãm không cần nghĩ",
            point: 4.5,
            newPrice: "439.000",
            oldPrice: "508.000",
            discount: 27,
            new: true
        },
        { 
            src: require('../img-product/img10.jpg'),
            tittle: "Scenery Box 1 - Đi rồi sẽ đến",
            point: 4.5,
            newPrice: "399.000",
            oldPrice: "558.000",
            discount: 29,
            new: true
        },
        { 
            src: require('../img-product/img11.jpg'),
            tittle: "Gentle Box 2 - Lịch lãm không cần nghĩ",
            point: 4.5,
            newPrice: "439.000",
            oldPrice: "598.000",
            discount: 27,
            new: true
        },
        { 
            src: require('../img-product/img12.jpg'),
            tittle: "Scenery Box 2 - Đi rồi sẽ đến",
            point: 4.5,
            newPrice: "399.000",
            oldPrice: "558.000",
            discount: 29,
            new: true
        }
        
    ]})

    const product = products.products.map((item,index)=>{
        return (
                <div className="wrap-product">
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
                        <span className="price-product-1">{item.newPrice}</span>
                        <span className="price-product-2">{item.oldPrice}</span>
                        <span className="discount-product">-{item.discount}%</span>
                    </div>
                    <div className="chose-product">chọn mua</div>               
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
                    <div className="cart-text-3">
                        Bán chạy
                        <div className="drop-arow-1"></div>
                    </div>
                    
                </div>
                <div className="box-plus">
                    <span className="cart-text-4">Ảnh</span>
                    <div className="box-plus-1"></div>
                    <span className="cart-text-5">Nhỏ</span>
                    <div className="box-plus-2"></div>
                    <span className="cart-text-6">Lớn</span>
                </div>      
            </div>
            <div className="products">
                {product}
            </div>
        </div>
    )
}