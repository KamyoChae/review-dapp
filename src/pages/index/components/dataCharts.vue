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
            rows: [
                { '日期': '1/1', 'eos': 1393, 'tron': 1093, 'eth': 3422 },
                { '日期': '1/2', 'eos': 3530, 'tron': 2345, 'eth': 2346 },
                { '日期': '1/3', 'eos': 2923, 'tron': 3438, 'eth': 2345 },
                { '日期': '1/4', 'eos': 1723, 'tron': 8432, 'eth': 1245 },
                { '日期': '1/5', 'eos': 3792, 'tron': 3492, 'eth': 5243 },
                { '日期': '1/6', 'eos': 4593, 'tron': 4293, 'eth': 2312 }
            ]
            },
            results:[],
        }
    },
    methods:{
        renderCharData(arrList){
            let that = this
            let lastDate = null
            let newDate = null 
            let obj = {}
            let arr = []
            arrList.forEach((element, index) => {
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
                
                    console.log(newDate)
                
                if(lastDate !== newDate){
                    lastDate = newDate // 表示到了第二天
                    console.log('第二天')
                    // if(JSON.stringify(obj) !== '{}'){
                        // console.log(arr)
                        arr.push(obj)
                        obj = {}
                    // }
                    // 创建新的对象
                }else{
                    // 表示是同一天
                    // console.log("同一天")
                    obj["日期"] = newDate
                    obj[element.chain] = element.total_user
                }
                // 根据相同的日期创建对象

                // 将创建好的对象放到数组里面

            });
            console.log(arr)
        },
        transformDate(timeStamp){
            let date = new Date(timeStamp)
            let month = date.getMonth()+1
            let day = date.getDate()
            return month + '-' + day
        }
    },
    created() { 

        this.axios.get('/api/dapp/total/stats/')
            .then(res => { 
                this.results = res.data.results
                console.log(res)
                this.renderCharData(this.results)
            }).catch(err => {
                console.log("error")
            })
    },
  }
</script>

<style lang='stylus' scoped>

@import '~@/assets/css/util.styl'
.charts-wrapper
    width 100%
    padding 5rem 0
    background $deep2 
    .charts
        width 85% 
        margin auto  
    &:before
        content ''
        display block
        background-image url(https://dapp.review//assets/c9afe892.svg)

</style>