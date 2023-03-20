<template>
    <div class="travel-map">
        <div id="main">

        </div>
    </div>
</template>
<script>
import geoJson from '@/assets/data.json'
// import { fill } from 'lodash'
export default{
    data(){
        return{}
    },
    mounted(){
        let myChart=this.$echarts.init(document.getElementById('main'))
        this.$echarts.registerMap('china',geoJson)//注册可用地图，必须包括geo组件或者map图表类型的时候才可以使用
        let option={
            backgroundColor:'rgb(121,145,209)',
            geo:{
                map:'china',
                aspectScale:0.75,//scale地图长宽比
                zoom:1.1,
                itemStyle:{
                    normal:{
                        areaColor:{
                            type:'radial',
                            x:0.5,
                            y:0.5,
                            r:0.8,
                            colorStops:[
                                {
                                offset:0,
                                color:'#09132c'//0%处的颜色
                                },
                                {
                                offset:1,
                                color:'#274d68'//100%处的颜色
                                }

                        ],
                        globalCoord:true
                        },
                        shadowColor:'rgb(58,115,192)',
                        shadowOffsetX: 10,
                        shadowOffsetY: 11
                    },
                },
                regions:[{
                    name:'南海诸岛',
                    itemStyle:{
                        opacity:0
                    }
                }]
            },
            series:[
                {
                //配置地图相关参数，绘制地图，这个对象是关于地图图表的相关设置
                type:'map',
                label:{
                    //设置省标字体样式
                    normal:{
                        show:true,
                        textStyle:{
                            color:'#1DE9B6'
                        }
                    },
                    emphasis:{
                        textStyle:{
                            color:'rgb(100,10,140)'
                        }
                    }
                },
                zoom:1.1,
                map:'china',
                itemStyle:{
                    //设置区域样式
                    normal:{
                        backgroundColor:'rgb(147,235,248)',
                        borderWidth:1,
                        areaColor:{
                            type:'radial',
                            x:0.5,
                            y:0.5,
                            r:0.8,
                            colorStops:[
                                {
                                offset:0,
                                color:'rgb(31,54,150)'//0%处的颜色
                                },
                                {
                                offset:1,
                                color:'rgb(89,128,142)'//100%处的颜色
                                }

                        ],
                        globalCoord:true
                        }
                    },
                    emphasis:{
                        areaColor:'rgb(100,180,206)',
                        borderWidth:0.1
                    }
                },
            },
            //关于地图中散点图的配置
            {
                type:'effectScatter',//散点图
                coordinateSystem:'geo',
                showEffectOn:'render',
                symbolSize:10,//散点大小
                zlevel:1,
                data:[{value:[118.8062,31.9208], itemStyle:{ color:'#4ab2e5'}}],
                rippleEffect:{//涟漪特效配置
                    period:15,
                    scale:4,
                    brushType:'fill',
                }
            }
        ]
        
        }
        myChart.setOption(option)
    }
}
</script>
<style lang="scss">
.travel-map{
    width:100%;


}
#main{
    width:100%;
    height:600px;

}
</style>