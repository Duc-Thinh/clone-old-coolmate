import React, { useState } from 'react'


export default () => {
    
    const [dadad, setDadad] = useState({list: [
        {name: 1},
        {name: 2},
        {name: 3}
    ]})

    return (
        dadad.map((item,index)=>{
            return (
            <div>{item.name}</div>
            )
        })
        
    )
}