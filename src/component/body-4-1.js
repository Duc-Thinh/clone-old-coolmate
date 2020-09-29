import React from 'react'
import classNames from 'classnames'

const Dropdown = (props)=>{
    return (
        <div className={classNames("wrap-text", {"wrap-text-classic ": !props.item.actived })}>
            <div className="texts" onClick={props.onclicks}>
                <span className="texts-1">
                    {props.valueIndex}
                </span>
                <span className="texts-2">
                    {props.item.contentText}
                </span>
                <div className={classNames("div1", {"active1": props.item.actived }, {"active2": !props.item.actived })} ></div>
            </div>
            <span className={classNames("texts-3", {"texts-3-active": !props.item.actived })}>
                {props.item.dropText}
            </span>
        </div>
    )
}

export default Dropdown