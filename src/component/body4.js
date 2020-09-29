import React, { useState } from 'react'
import './style5.css'
import Dropdown from './body-4-1'

export default () => {

    const [active1, setActive1] = useState( [
        {
            contentText:  "Chất liệu sản phẩm của Coolmate?",
            dropText: "được chọn lựa kỹ càng trên các chất liệu tốt nhất nhằm mang lại sự thoái mái cho người mặc, từ sợi Cotton Compact, Cotton Organic, Spandex co giãn hay Rubber bền bỉ.",
            actived: false
        },
        {
            contentText:  "Coolmate có cửa hàng không?",
            dropText: "Sự khác biệt của Coolmate với các thương hiệu thời trang khác là chúng tôi không có cửa hàng. Thay vì đầu tư hàng trăm triệu làm cửa hàng thật to, thì chúng tôi dùng số tiền đó vào nâng cao chất lượng sản phẩm, và giảm giá bán. Suy cho cùng Coolmate nghĩ tin rằng đàn ông không thích phải mất hàng giờ để vào cửa hàng chỉ đi mua mấy đồ mặc cơ bản hằng ngày đâu.",
            actived: false
        },
        {
            contentText:  "Chi phí ship hàng như thế nào?",
            dropText: "Tất cả các đơn hàng trên 300.000VNĐ đều được miễn phí chi phí vận chuyển, trên toàn quốc.Giá bạn thấy trên website là tất cả những gì bạn phải trả.",
            actived: false
        },
        {
            contentText:  "Các sản phẩm được sản xuất ở đâu?",
            dropText: "100% sản phẩm Coolmate được sản xuất tại Việt Nam. Chúng tôi hợp tác với nhiều nhà thiết kế từ Nhật Bản, Hàn Quốc để đổi mới kiểu dáng cũng như cập nhật công nghệ sản xuất mới, và tất cả sẽ được gia công trong xưởng của chúng tôi tại Việt Nam.",
            actived: false
        },
        {
            contentText:  "Sản phẩm mua rồi có được đổi trả hay không?",
            dropText: "Có. Chúng tôi có chính sách đổi trả trong vòng 45 ngày, vì bất cứ lý do gì. Tìm hiểu thêm",
            actived: false
        },
        {
            contentText:  "Tôi có thể mua lẻ từng sản phẩm không?",
            dropText: "Tất nhiên là có. Hình thức mua theo box là cách chúng tôi khuyến khích bạn mua nhiều hơn với giá rẻ hơn. Chúng tôi vẫn luôn có từng sản phẩm lẻ trên website. Bạn hãy chọn món đồ món mua trên thanh menu Sản Phẩm.",
            actived: false
        },
        {
            contentText:  "Bao lâu kể từ khi đặt hàng thành công tôi sẽ nhận được hàng?",
            dropText: "- Tại Hà Nội: 2-4h nếu bạn đặt hàng giao nội thành trong thời gian từ 8h sáng đến 8h tối.Sau 1 ngày nếu bạn ở ngoại thành HN. - Tại Hồ Chí Minh: Bạn sẽ nhận được hàng sau 1-3 ngày. - Tại tỉnh thành khác: Bạn sẽ nhận được hàng sau 2-4 ngày làm việc.",
            actived: false
        }
    ])

    const list = active1

    function onclick(item,index){
        return setActive1([
            ...list.slice(0,index),
            {
              ...item,
              actived: !item.actived
            },
            ...list.slice(index + 1)
          ])
    }

    let valueIndex = 0
    return (    
        <div className="dropdown-text">
            <span className="content-text">NHỮNG CÂU HỎI THƯỜNG GẶP</span>
            <div className="wrap-dropdown-text">
            {list.map((item,index)=>{   
                valueIndex = index + 1 
                if(index < 10){
                    valueIndex =  "0" + valueIndex + "."
                }
                return(<Dropdown valueIndex={valueIndex} item={item} index={index} onclicks={()=>{onclick(item,index)}} />)
            })}
            </div>
        </div>
    )
}