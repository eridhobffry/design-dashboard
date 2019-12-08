import React from 'react';

import "../../../../node_modules/react-vis/dist/style.css"

import {XYPlot, VerticalBarSeries, XAxis} from 'react-vis';

const VerticalBar = ({item, color}) => {
    return (
        <XYPlot height={200} width={200} xType="ordinal">
            <XAxis/>
            <VerticalBarSeries data={item}  color={color}/>
        </XYPlot>
    );
  }

export default VerticalBar;