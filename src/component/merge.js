import React from 'react';
import ImgRow from './imgRow'
import Body from './body'
import Body2 from './body2'
import Body3 from './body3'
import Body4 from './body4'
import End from './end.js'
import Banner from "./banner"

export default function Merge(){
    return (
        <div>
            <Banner/>
            <ImgRow/>
            <Body/>
            <Body2/>
            <Body3/>
            <Body4/>
            <End/>
        </div>
    )
}