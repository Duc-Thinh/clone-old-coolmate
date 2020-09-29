import React from "react"
import './style4.css'
import Img1 from "../img/img21.jpg"
import Img2 from "../img/img22.png"
import Img3 from "../img/img23.png"

export default () => {
    return (
        <div className="body-2">
            <span className="context-1">CẢ "TỦ ĐỒ" TRONG 1 CHIẾC HỘP</span>
            <span className="context-2"># COOLMATE BOXES</span>
            <div className="wrap-card">
                <div className="card">
                    <span className="new-product">Mới</span>
                    <a href="#" className="a-wrap-img-card">
                        <img className="img-card" src={Img1}/>
                    </a>
                    <span className="context-card-1">Box dùng thử</span>
                    <h4 className="h4-wrap-context">
                        Chỉ từ  
                        <span className="context-card-3"> 269</span>
                        .000đ
                    </h4>
                    <p>
                        <span className="context-card-4">Tiết kiệm </span>
                        <span className="context-card-5">27%</span>
                    </p>
                    <div className="wrap-context-card-6">
                        <span className="context-card-6">Tự lựa chọn các sản phẩm cần thiết nhất với bạn</span>
                    </div>
                    <a href="#" className="context-card-7">chọn box ngay</a>
                </div>
                <div className="card">
                    <span className="new-product change-color">Bán chạy nhất</span>
                    <a href="#" className="a-wrap-img-card">
                        <img className="img-card" src={Img2}/>
                    </a>
                    <span className="context-card-1">CoolBox</span>
                    <h4 className="h4-wrap-context"> 
                        <span className="context-card-3"> 490</span>
                        .000đ
                        <span className="context-card-2">755.000đ</span>
                    </h4>
                    <p>
                        <span className="context-card-4">Tiết kiệm </span>
                        <span className="context-card-5">35%</span>
                    </p>
                    <div className="wrap-context-card-6">
                        <span className="context-card-6">1 Áo thun | 3 Quần Lót | 3-6 Đôi tất (vớ)</span>
                    </div>
                    <a href="#" className="context-card-7 change-color">chọn box ngay</a>
                </div>
                <div className="card">
                    <span className="new-product change-color change-color-1">Tiết kiệm nhất</span>
                    <a href="#" className="a-wrap-img-card">
                        <img className="img-card" src={Img3}/>
                    </a>
                    <span className="context-card-1">Super CoolBox</span>
                    <h4 className="h4-wrap-context"> 
                        <span className="context-card-3"> 650</span>
                        .000đ
                        <span className="context-card-2">1.085.000đ</span>
                    </h4>
                    <p>
                        <span className="context-card-4">Tiết kiệm </span>
                        <span className="context-card-5">40%</span>
                    </p>
                    <div className="wrap-context-card-6">
                        <span className="context-card-6">1 Áo thun | 3 Quần lót | 3-6 Đôi tất (vớ)
1 Combo bất kỳ / Quần Short</span>
                    </div>
                    <a href="#" className="context-card-7 change-color-1">chọn box ngay</a>
                </div>
            </div>
            
        </div>
    )
}