import React from 'react'
import './style5.css'

export default () => {
    return (
        <div className="banner-2">
            <img className="img-banner-2" src={require('../img/img24.jpg')}/>
            <div className="wrap-all-tittle">
                <div className="wrap-span-1-img-banner">            
                    <span className="span-1-img-banner-2">THE STORY OF</span>
                    <span className="span-2-img-banner-2">#COOLMATE</span>
                </div>
                <div className="wrap-wrap-img-banner-2">
                    <div className="wrap-img-banner-2">
                        <img className="img-banner-2-1" src={require('../img/img26.png')}/>
                    </div>
                    <div className="wrap-span-tittle">
                        <span className="tittle-1">
                            Câu chuyện được sinh ra từ tủ đồ của cánh mày râu, những người không mua sắm thường xuyên, “có gì mặc nấy”. Coolmate hiểu rằng những chiếc áo phông phẳng phiu, đôi tất không xù hay quần lót mát mẻ thoải mái, phụ kiện cá tính sẽ là thứ không thể thiếu với các chàng trai cho dù có-gì-mặc-nấy. Bằng sự thấu hiểu và quan tâm, CoolMate sẽ dần thay đổi thói quen mua sắm của các anh bằng những sản phẩm chất lượng và cách thức mua hàng tiện lợi nhất:
                        </span>
                        <h2 >
                            Proudly
                            <span className="tittle-2"> MADE IN VIETNAM</span>
                        </h2>
                        <div className="wrap-icon-tittle">
                            <a>
                                <span>
                                    Giao hàng
                                    <h6>
                                        Nhanh 
                                    </h6>
                                    HN & TP.HCM
                                </span>
                            </a>
                            <a>
                                <span>
                                    <h6>Free Ship</h6>
                                    toàn quốc
                                </span>
                            </a>
                            <a>
                                <span>
                                    Đổi trả miễn phí
                                    <h6>
                                        45 ngày
                                    </h6>
                                </span>
                            </a>
                        </div>
                        <a><span className="tittle-3">Tìm hiểu thêm</span></a>
                    </div>
                </div>
            </div>
            <img className="img-banner-2-2" src={require('../img/img25.png')}/>
        </div>
    )
}