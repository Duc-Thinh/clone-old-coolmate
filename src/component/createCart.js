import React, { useState } from 'react'
import classNames from 'classnames'
import './style7.css'

export default function CreateCart({ carts, addcart }){

    const [cart, setCart] = useState({cart : 
        {shirt: 
            [
                {
                    src: require('../img-cart/img1.jpg'),
                    tittle: 'Áo thun dài tay nam Cotton Compact phiên bản Premium màu đen - Black Passion',
                    price: 490
                },
                {
                    src: require('../img-cart/img2.jpg'),
                    tittle: 'Áo thun dài tay nam Cotton Compact phiên bản Premium màu xám chì - Grey Space',
                    price: 490
                },
                {
                    src: require('../img-cart/img3.jpg'),
                    tittle: 'Áo thun dài tay nam Cotton Compact phiên bản Premium màu xám - GreyKing',
                    price: 650
                },
                {
                    src: require('../img-cart/img4.jpg'),
                    tittle: 'Áo thun dài tay nam Cotton Compact phiên bản Premium màu xanh lam- BlueBeauty',
                    price: 650
                },
                {
                    src: require('../img-cart/img5.jpg'),
                    tittle: 'Áo thun nam Cổ Tim Cotton Compact phiên bản Premium chống nhăn màu xanh lam',
                    price: 490
                },
                {
                    src: require('../img-cart/img6.jpg'),
                    tittle: 'Áo thun nam Cổ Tim Cotton Compact phiên bản Premium chống nhăn màu xám',
                    price: 490
                },
                {
                    src: require('../img-cart/img7.jpg'),
                    tittle: 'Áo thun nam Cổ Tim Cotton Compact phiên bản Premium chống nhăn màu đen',
                    price: 650
                },
                {
                    src: require('../img-cart/img8.jpg'),
                    tittle: 'Áo thun nam Cotton Compact phiên bản Premium chống nhăn màu xanh rêu - GreenLover Tee',
                    price: 650
                },
                {
                    src: require('../img-cart/img9.jpg'),
                    tittle: 'Áo thun nam Cotton Compact phiên bản Premium chống nhăn màu xám',
                    price: 490
                },
                {
                    src: require('../img-cart/img10.jpg'),
                    tittle: 'Áo thun nam Cotton Compact phiên bản Premium chống nhăn màu xanh lam - BlueBeauty Tee',
                    price: 490
                },
                {
                    src: require('../img-cart/img11.jpg'),
                    tittle: 'Áo thun nam Cotton Compact phiên bản Premium chống nhăn màu đen',
                    price: 650
                },
                {
                    src: require('../img-cart/img12.jpg'),
                    tittle: 'Áo thun nam Cotton Compact phiên bản Premium chống nhăn màu xanh navy',
                    price: 650
                }
            ],
        trouser:
            [
                {
                    src: require('../img-cart/img16.jpg'),
                    tittle: 'Combo 2 quần lót nam Trunk kẻ Bluemoon Stripe Xám - Xanh',
                    price: 490
                },
                {
                    src: require('../img-cart/img17.jpg'),
                    tittle: 'Combo 2 quần lót nam Trunk Super BaveT màu đen, cho chàng "thích vội"',
                    price: 490
                },
                {
                    src: require('../img-cart/img18.jpg'),
                    tittle: '3 quần lót nam Trunk Bamboo kháng khuẩn màu đen',
                    price: 650
                },
                {
                    src: require('../img-cart/img19.jpg'),
                    tittle: '3 quần lót nam Trunk Bamboo kháng khuẩn màu trắng',
                    price: 650
                },
                {
                    src: require('../img-cart/img20.jpg'),
                    tittle: '3 quần lót nam Trunk Bamboo kháng khuẩn màu xanh navy',
                    price: 490
                },
                {
                    src: require('../img-cart/img21.jpg'),
                    tittle: '3 quần lót nam Brief Boxer Bamboo kháng khuẩn màu xanh navy',
                    price: 490
                },
                {
                    src: require('../img-cart/img22.jpg'),
                    tittle: '3 quần lót nam Brief Boxer Bamboo kháng khuẩn màu đen',
                    price: 650
                },
                {
                    src: require('../img-cart/img23.jpg'),
                    tittle: '3 quần lót nam Brief Boxer BamBoo kháng khuẩn màu trắng',
                    price: 650
                },
                {
                    src: require('../img-cart/img24.jpg'),
                    tittle: '3 quần lót nam Brief Bamboo kháng khuẩn màu trắng',
                    price: 490
                },
                {
                    src: require('../img-cart/img25.jpg'),
                    tittle: '3 quần lót nam Brief Bamboo kháng khuẩn màu xanh navy',
                    price: 490
                },
                {
                    src: require('../img-cart/img26.jpg'),
                    tittle: '3 quần lót nam Brief Bamboo kháng khuẩn màu đen',
                    price: 650
                },
                {
                    src: require('../img-cart/img27.jpg'),
                    tittle: '3 Quần lót nam Brief Boxer Modal (gỗ sồi) mềm mại màu xanh navy',
                    price: 650
                }
            ],
        socks : 
            [
                {
                    src: require('../img-cart/img28.jpg'),
                    tittle: 'Combo 4 đôi tất họa tiết cổ điển - màu trắng',
                    price: 490
                },
                {
                    src: require('../img-cart/img29.jpg'),
                    tittle: 'Combo 4 đôi tất họa tiết cổ điển - màu đen',
                    price: 490
                },
                {
                    src: require('../img-cart/img30.jpg'),
                    tittle: 'Combo 4 đôi tất họa tiết cổ điển - màu xám',
                    price: 650
                },
                {
                    src: require('../img-cart/img31.jpg'),
                    tittle: 'Combo 4 đôi tất cổ ngắn mũi xám high-tech Coolmate - xám đậm',
                    price: 650
                },
                {
                    src: require('../img-cart/img32.jpg'),
                    tittle: 'Combo 4 đôi tất cổ ngắn mũi xám high-tech Coolmate - màu đen',
                    price: 490
                },
                {
                    src: require('../img-cart/img33.jpg'),
                    tittle: 'Combo 4 đôi tất sọc trắng cổ điển - màu trắng',
                    price: 490
                },
                {
                    src: require('../img-cart/img34.jpg'),
                    tittle: 'Combo 4 đôi tất sọc cổ điển - Mix combo 4 màu',
                    price: 650
                },
                {
                    src: require('../img-cart/img35.jpg'),
                    tittle: 'Combo 4 đôi tất sọc xám cổ điển - màu xám',
                    price: 650
                },
                {
                    src: require('../img-cart/img36.jpg'),
                    tittle: 'Combo 4 đôi tất sọc xanh cổ điển - màu xanh navy',
                    price: 490
                },
                {
                    src: require('../img-cart/img37.jpg'),
                    tittle: 'Combo 4 đôi tất sọc xanh cổ điển - màu đen',
                    price: 490
                },
                {
                    src: require('../img-cart/img38.jpg'),
                    tittle: 'Combo 3 tất thể thao Max Cushion xám',
                    price: 650
                },
                {
                    src: require('../img-cart/img39.jpg'),
                    tittle: 'Combo 3 tất thể thao Max Cushion xanh',
                    price: 650
                }
            ]
        }
    })
    
    const [showValue, setShowValue] = useState(cart.cart.shirt)

    const [onDrop, setOndrop] = useState({onDrop: true, onMouseOver: false})

    const [srcImg, setSrcImg] = useState(
        {srcImg1: true,
         srcImg2: true,
         srcImg3: true}
    )

    const [draftValues, setDraftValues] = useState(cart.cart.shirt)

    let Img1 = srcImg.srcImg1
    let Img2 = srcImg.srcImg2
    let Img3 = srcImg.srcImg3

    function loadData(key){
        switch(key) {
            case 'shirts':
                setShowValue(cart.cart.shirt)
                setDraftValues(cart.cart.shirt)
                break
            case 'trouser':
                setShowValue(cart.cart.trouser)
                setDraftValues(cart.cart.trouser)
                break
            case 'socks':
                setShowValue(cart.cart.socks)
                setDraftValues(cart.cart.socks)
                break      
        }

    }

    function  sortCart(key){
        let arrayDraft = showValue.filter((item,index)=>{
            return(item.price === key)
        })
        return setDraftValues(arrayDraft)
    }

    function putProductToCart(item){
        const findCart = carts.find( items => items === item)
        if(!findCart){
            return addcart(item)
        }
        return 
    }

    function mouseOverPlus(value){
        if(value === 1){
            return setTimeout(() => {
                setOndrop({onDrop: onDrop.onDrop, onMouseOver: !onDrop.onMouseOver})
            }, 500);
        }
        return setOndrop({onDrop: onDrop.onDrop, onMouseOver: !onDrop.onMouseOver})
    }

    const cartProduct =  draftValues.map((item,index)=>{
        return (
            <div className="card-cart">
                <img src={item.src} className="img-cart"/>
                <span className="tittle-cart">
                    {item.tittle}
                </span>
                <div className="wrap-plus">
                    <div className="plus"></div>
                    <div onClick={ () => putProductToCart(item) } className="selectCart">chọn mua</div>
                </div>
            </div>
        )
    })


    function onclickDrop(){      
        return setOndrop({onDrop: !onDrop.onDrop})
    }

    function onMouse(key){
        switch(key) {
            case 1:
                Img1 = !srcImg.srcImg1
                break
            case 2:
                Img2 = !srcImg.srcImg2
                break
            case 3:
                Img3 = !srcImg.srcImg3
                break
        }

        setSrcImg({
            srcImg1: Img1,
            srcImg2: Img2,
            srcImg3: Img3
        })
    }

    return (
        <div className="create-box">
            <div className="selection-sort">
                <span className="content-select">TẠO BASIC BOX</span>
                <div className="div-select">
                    <div className="wrap-content-select" onClick={onclickDrop}>
                        <div className="wrap-content-select-1">
                            <span className="wrap-content-select-2 wrap-content-select-2-3">CoolBox</span>
                            <span className="wrap-content-select-3">từ 10 món chỉ với<span className="wrap-content-select-4"> 490K</span></span>
                        </div>
                        <img src={require('../icon/ar-down.svg')} className="wrap-content-select-5"/>
                    </div>  
                    <ul className={ classNames("drop-select", {'disnone': onDrop.onDrop})} >
                        <li className="wrap-content-select wrap-content-select1" onClick={()=>{sortCart(490)}}>
                            <div className="wrap-content-select-1">
                                <span className="wrap-content-select-2 wrap-content-select2-1">CoolBox</span>
                                <span className="wrap-content-select-3">từ 10 món chỉ với<span className="wrap-content-select-4"> 490K</span></span>
                            </div>
                        </li>   
                        <li className="wrap-content-select wrap-content-select2" onClick={()=>{sortCart(650)}}>
                            <div className="wrap-content-select-1">
                                <span className="wrap-content-select-2 wrap-content-select-2-2">Super CoolBox</span>
                                <span className="wrap-content-select-3">từ 12 món chỉ với<span className="wrap-content-select-4"> 650K</span></span>
                            </div>
                        </li>   
                    </ul>
                    <div className="wrap-cartItem">
                        <img src={require('../icon/cart.png')} className="img-wrap-content-select"/>
                        <div className="item-picked">{carts.length}</div>
                    </div>
                </div>
                <ul className="ul-wrap-select-button">
                    <li className="select-button" onMouseOver={()=>{onMouse(1)}} onMouseOut={()=>{onMouse(1)}} onClick={()=>{loadData('shirts')}}>
                        <div className='line'></div>
                        <img src={require('../icon/shirt.png')} className={classNames("select-item", {"disblock": !srcImg.srcImg1})} />
                        <img src={require('../icon/shirt2.png')} className={classNames("select-item", {"disblock": srcImg.srcImg1})} />
                        <div className="item">
                            <span className="index-item">01</span>
                            <span className="tittle-item">Mời bạn chọn Áo thun</span>
                        </div>
                    </li>
                    <li className="select-button" onMouseOver={()=>{onMouse(2)}} onMouseOut={()=>{onMouse(2)}} onClick={()=>{loadData('trouser')}}>
                        <div className='line'></div>
                        <img src={require('../icon/trouser.png')} className={classNames("select-item", {"disblock": !srcImg.srcImg2})}/>
                        <img src={require('../icon/trouser3.png')} className={classNames("select-item", {"disblock": srcImg.srcImg2})}/>
                        <div className="item">
                            <span className="index-item">02</span>
                            <span className="tittle-item">Mời bạn chọn Quần lót nam</span>
                        </div>
                    </li>
                    <li className="select-button" onMouseOver={()=>{onMouse(3)}} onMouseOut={()=>{onMouse(3)}} onClick={()=>{loadData('socks')}}>
                        <div className='line'></div>
                        <img src={require('../icon/socks.png')} className={classNames("select-item", {"disblock": !srcImg.srcImg3})}/>
                        <img src={require('../icon/socks2.png')} className={classNames("select-item", {"disblock": srcImg.srcImg3})}/>
                        <div className="item">
                            <span className="index-item">03</span>
                            <span className="tittle-item">Mời bạn chọn Tất (Vớ)</span>
                        </div>
                    </li>
                </ul>
            </div>
            <div className="wrap-cart-2">
                {cartProduct}
            </div>
        </div>
    )
}