<template>
<div class="charts-wrapper">
    <div class="charts"> 
        <ve-line :data="chartData" :colors="colors"  :extend="extend" :settings="chartSettings"></ve-line>
    </div>
</div>
</template>

<script>
    export default {
    data () { 
        this.colors = ["#00a1ff", "#40c96c", "#ffd444"]
        this.extend = { 
            legend: {
                textStyle: {
                color: 'rgba(255,255,255,1)'
                }
            },
            xAxis: {
                axisLabel : {
                    color : 'rgba(255,255,255,.6)'
                },
                
            },
            yAxis: {
                axisLabel : {
                    color : 'rgba(255,255,255,.6)'
                },
                splitLine: {
                    lineStyle: {
                        color: 'rgba(255,255,255,.2)',
                        type: 'dashed'
                    }
                }, 
            }
        }, 
        this.chartSettings = {
            metrics: ['eos', 'tron','eth'],
            dimension: ['日期']
        }
            

        return {
            chartData: {
                columns: ['日期', 'eos', 'tron', 'eth'],
                rows: []
            },
            results:[],
        }
    },
    methods:{
        renderCharData(arrList, type){
            arrList = arrList.reverse()
            let that = this
            let lastDate = null
            let newDate = null 
            let obj = {}
            let arr = []
            arrList.forEach((element, index, myarr) => {
                // 根据时间戳获取当天日期
                if(!newDate){ 
                    newDate = that.transformDate(element.timestamp)
                    lastDate = newDate 
                }
                if(index % 3 === 0 && index !== 0){
                    let day = newDate.split('-')[1] - 0 + 1
                    
                    let month = newDate.split('-')[0] 
                    if(day === 32){
                        day = 1
                        month ++
                        if(month === 13){
                            month = 1
                        }
                    }
                    newDate = month + '-' + day
                }
                // 猜测是接口时间戳出了问题，遍历时间戳转换成日期全部都是第一天。
                // 所以下面采用另外一种方式解决
                 
                
                if(lastDate !== newDate){
                    
                    lastDate = newDate // 表示到了第二天 
                    // if(JSON.stringify(obj) !== '{}'){
                        // console.log(arr)
                        arr.push(obj)
                        obj = {}
                        obj["日期"] = newDate
                        obj[element.chain] = element[type]
                    // }
                    // 创建新的对象
                }else{
                    // 表示是同一天
                    // console.log("同一天")
                    obj["日期"] = newDate
                    obj[element.chain] = element[type]
                    if(index === myarr.length-1){
                        arr.push(obj)
                        obj = {}
                    } 
                }
                // 根据相同的日期创建对象

                // 将创建好的对象放到数组里面

            }); 
            this.chartData.rows=arr  
        },
        transformDate(timeStamp){
            let date = new Date(timeStamp)
            let month = date.getMonth()+1
            let day = date.getDate()
            return month + '-' + day
        },

        getUser(){
            // 日活
            this.renderCharData(this.results, "total_user")
        },
        getTx(){
            // 交易笔数
            this.renderCharData(this.results, "total_tx")
        },
        getVolume(){
            // 交易额
            this.renderCharData(this.results, "total_volume_CNY")
            
        }
    },
    created() { 

        this.axios.get('/api/dapp/total/stats/')
            .then(res => { 
                this.results = res.data.results 
                this.renderCharData(this.results, "total_user")
            }).catch(err => {
                console.log("error")
            })
    },
  }
</script>

<style lang='stylus' scoped>

@import '~@/assets/css/util.styl'
.charts-wrapper
    position relative
    width 100%
    padding 5rem 0
    background $deep2 
    .charts
        width 85% 
        margin auto  
    &:before
        content ''
        display block
        width 100%
        position absolute
        top -60px
        left 0
        height 0
        padding-bottom 4%
        background-image url(https://dapp.review//assets/c9afe892.svg)
        background-repeat no-repeat
        background-size 100%
    &:after
        content ''
        display block
        position absolute
        width 6rem
        height 12rem
        background-image url(https://dapp.review/assets/327a0296.svg)
        top -8rem
        z-index 55

        

</style>