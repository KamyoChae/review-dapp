<template>
<div class="charts-wrapper">
    <div class="charts-bar">
        <h2>数据一览</h2>
        <div class="bar">
            <span @click="getVolume" :class="voActive">交易额</span>
            <span @click="getUser" :class="usActive">日活</span>
            <span @click="getTx" :class="txActive">交易笔数</span>
        </div>
    </div>
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
            classActive:['usActive', 'voActive', 'txActive'],
            usActive: "",
            voActive: "",
            txActive: "",

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
            this.filterClass("usActive")
        },
        getTx(){
            // 交易笔数
            this.renderCharData(this.results, "total_tx")
            this.filterClass("txActive")
        },
        getVolume(){
            // 交易额
            this.renderCharData(this.results, "total_volume_CNY")
            this.filterClass("voActive")
        },
        filterClass(str){ 
            let arr = this.classActive
            arr.forEach(el=>{ 
                if(el == str){ 
                    this[el] = 'active' 
                }else{ 
                    this[el] = ''
                } 
            }) 
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
        position absolute
        width 6rem
        height 12rem
        background-image url(https://dapp.review/assets/327a0296.svg)
        top -8rem
        z-index 55
    &:after
        content '' 
        width 0
        height 0
        border 5rem solid transparent
        border-right-color #ffdd5c
        position absolute
        bottom -2rem
        right 0
        z-index 999 
    .charts-bar
        width 14rem
        height 5rem
        margin 0 auto 3rem auto
        color #fff 
        text-align center 
        font-size 0
        h2 
            cursor pointer
            font-size 2rem
            margin 2rem 0
        .bar 
            height 40px
            line-height 40px 
            border-bottom 1px solid rgba(255,255,255,.5)
            span 
                cursor pointer
                color rgba(255,255,255,.5)
                display inline-block
                height 40px
                padding 0 .8rem
                font-size 1rem 
            .active
                color #fff
                border-bottom 1px solid rgba(255,255,255,1)
    



        

</style>