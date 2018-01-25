/**
 * Created by frankwang on 2018/1/25.
 */
import React, { Component } from 'react';
var echarts = require('echarts');

class EchartsReact extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {

        let myChart = echarts.init(this.refs.echartReact) //initialize echarts
        myChart.setOption(this.getOption());
    }

    getOption() {
        return {
            title: {
                text: 'ECharts 入门示例'
            },
            tooltip: {},
            xAxis: {
                data: ['打底衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
            },
            yAxis: {},
            series: [{
                name: '销量',
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20]
            }]
        }

    }

    render() {
        return (
            <div>
                <div ref="echartReact" style={{width: "500px", height: "400px"}}></div>
            </div>
        )
    }
}

export default EchartsReact;