import React from 'react'
import { Line } from 'rc-progress';

const ProgressLinear = (item) => {
    return (
        <>
            <Line percent={item.percentLinear} strokeWidth="4" strokeColor={item.color} />
        </>
    )
}

export default ProgressLinear