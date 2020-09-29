import React from 'react'
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption
  } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style3.css'
import './style4.css'

const itemss = [
    [
        {
            src: require("../img/img9.jpg"),
            text1: "Combo 02 áo thun nam Cotton Compact phiên bản Premium chống nhăn màu đỏ đô - Redman Tee",
            text2: "Còn: S, M, L, XL,...",
            price1: "399.000đ",
            price2: "518.000đ"
        },
        {
            src: require("../img/img10.jpg"),
            text1: "Combo 4 áo thể thao nam MaxCool 4 màu",
            text2: "Còn: S, M, L, XL,...",
            price1: "499.000đ",
            price2: "876.000đ"
        },
        {
            src: require("../img/img11.jpg"),
            text1: "Áo thun Nam Cotton Compact chống nhăn màu đỏ đô - Redman Tee",
            text2: "Còn: S, M, L, XL,...",
            price1: "259.000đ"
        },
        {
            src: require("../img/img12.jpg"),
            text1: "Combo 02 áo thun nam Cổ Tim Cotton Compact chống nhăn màu xanh lam",
            text2: "Còn: S, M, L, XL,...",
            price1: "349.000đ",
            price2: "518.000đ"
        }
    ],
    [
        {
            src: require("../img/img13.jpg"),
            text1: "Combo 02 khẩu trang thêu Care&Share",
            price1: "49.000đ"
        },
        {
            src: require("../img/img14.jpg"),
            text1: "Mũ lưỡi trai Baseball thêu Care&Share",
            price1: "199.000đ"
        },
        {
            src: require("../img/img15.jpg"),
            text1: "Áo Polo Coolmate thêu Care&Share màu đen",
            text2: "Còn: S, M, L, XL,...",
            price1: "299.000đ"
        },
        {
            src: require("../img/img16.jpg"),
            text1: "Áo thun nam Cotton Compact in Care&Share giữa áo màu trắng",
            text2: "Còn: S, M, L, XL,...",
            price1: "259.000đ"
        }
    ],
    [
        {
            src: require("../img/img17.jpg"),
            text1: "Áo thun nam Cotton Compact in Care&Share màu trắng",
            text2: "Còn: S, M, L, XL,...",
            price1: "259.000đ"
        },
        {
            src: require("../img/img18.jpg"),
            text1: "Áo thun nam Cotton Compact in Care&Share màu xanh đen",
            text2: "Còn: S, M, L, XL,...",
            price1: "259.000đ"
        },
        {
            src: require("../img/img19.jpg"),
            text1: "Áo thun nam Cotton Compact in Care&Share màu lam",
            text2: "Còn: S, M, L, XL,...",
            price1: "259.000đ"
        },
        {
            src: require("../img/img20.jpg"),
            text1: "Áo thun nam Cotton Compact in Care&Share màu đen",
            text2: "Còn: S, M, L, XL,...",
            price1: "259.000đ"
        }
    ]

];

export default function(){
const [activeIndex, setActiveIndex] = useState(0);
const [animating, setAnimating] = useState(false);

const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === itemss.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
}

const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? itemss.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
}

const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
}

const slides = itemss.map((item) => {
    return (
        
        <CarouselItem
            onExiting={() => setAnimating(true)}
            onExited={() => setAnimating(false)}
            key={item.src}
        >
            <div className="wrap-items">
                <div className="wrap-card-carousel">
                    <a href="#" >
                        <img className="items-1" src={item[0].src}/>                           
                    </a>
                    <a href="#" className="a-span-carousel">
                        <span className="span-carousel span-carousel-1">{item[0].text1}</span>
                    </a>
                    <span className="default span-carousel span-carousel-2">{item[0].text2}</span>
                    <div className="span-carousel-wrap-span">
                        <span className="default span-carousel span-carousel-3">{item[0].price1}</span>
                        <span className="default span-carousel span-carousel-4">{item[0].price2}</span>
                    </div>
                </div>
                <div className="wrap-card-carousel">
                    <a href="#" >
                        <img className="items-1" src={item[1].src}/>                           
                    </a>
                    <a href="#" className="a-span-carousel">
                        <span className="span-carousel span-carousel-1">{item[1].text1}</span>
                    </a>
                    <span className="default span-carousel span-carousel-2">{item[1].text2}</span>
                    <div className="span-carousel-wrap-span">
                        <span className="default span-carousel span-carousel-3">{item[1].price1}</span>
                        <span className="default span-carousel span-carousel-4">{item[1].price2}</span>
                    </div>
                </div><div className="wrap-card-carousel">
                    <a href="#" >
                        <img className="items-1" src={item[2].src}/>                           
                    </a>
                    <a href="#" className="a-span-carousel">
                        <span className="span-carousel span-carousel-1">{item[2].text1}</span>
                    </a>
                    <span className="default span-carousel span-carousel-2">{item[2].text2}</span>
                    <div className="span-carousel-wrap-span">
                        <span className="default span-carousel span-carousel-3">{item[2].price1}</span>
                        <span className="default span-carousel span-carousel-4">{item[2].price2}</span>
                    </div>
                </div><div className="wrap-card-carousel">
                    <a href="#" >
                        <img className="items-1" src={item[3].src}/>                           
                    </a>
                    <a href="#" className="a-span-carousel">
                        <span className="span-carousel span-carousel-1">{item[3].text1}</span>
                    </a>
                    <span className="default span-carousel span-carousel-2">{item[3].text2}</span>
                    <div className="span-carousel-wrap-span">
                        <span className="default span-carousel span-carousel-3">{item[3].price1}</span>
                        <span className="default span-carousel span-carousel-4">{item[3].price2}</span>
                    </div>
                </div>              
            </div>
        </CarouselItem>
    );
});

return (
    <div className='body-1'>
        <a href="#" className="a-slide-product">
            <span className="slide-product">Sản phẩm nổi bật</span>
        </a>
        <div className="slide-show">
            <Carousel
            activeIndex={activeIndex}
            next={next}
            previous={previous}
            >
            {slides}
            <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
            <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
            </Carousel>
        </div>
    </div>
);
}