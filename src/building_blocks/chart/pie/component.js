import React from 'react'
import { Circle } from 'rc-progress';

const Pie = (item) => {
    return (
        <>
            <Circle percent={item.percentPie} strokeWidth="4" strokeColor={item.color} />
        </>
    )
}

export default Pie