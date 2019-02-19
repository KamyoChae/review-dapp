<template>
<div class="player-wrapper"> 
    <div class="player-box">

        <div class="player-left"> 
            <img src="https://media.dappreview.cn/images/kaeyleo/rw8W35arRKFFfpf4Pdk84SShPiJ4imCc.svg " alt="">
        </div>

        <div class="player-right">
            <h2>玩家数据，一目了然</h2>
            <p>  
                聚合EOS、TRON、ETH三大平台用户数据，帮你清楚地计算Dapp消费账单，同时还可以围观氪金大佬动态，紧跟步伐。 
            </p>
            <a href="">查看数据</a>
        </div>

    </div>

    <div class="dataItem">
        <div class="item-list">
            <div class="item">
                <span class="data-num">{{dapp}}</span>
                <span class="data-dec">DAPP</span>
            </div> 
            <div class="item"> 
                <span class="data-num">{{user}}</span>
                <span class="data-dec">日活</span>
            </div>
            <div class="item"> 
                <span class="data-num">￥{{volume_cny}}</span>
                <span class="data-dec">24h 交易额</span>
            </div>
            <div class="item"> 
                <span class="data-num">{{contract}}</span>
                <span class="data-dec">智能合约</span>
            </div>
        </div>

    </div>
</div>

</template>

<script>
export default {
    data(){
        return {
            result:[]
        }
    },
    computed:{
        contract(){ 
            return  this.insertChar(this.result.total_contract)
        },
        dapp(){
            return this.insertChar(this.result.total_dapp)
        },
        user(){
            return this.insertChar(this.result.total_user)
        },
        volume_cny(){
            let vol = Math.floor(this.result.total_volume_cny)
            return this.insertChar(vol)
        }
    },
    methods:{
        getdata(){
            this.axios.get('/api/dapp/total/stat/').then(res=>{
                // console.log(res.data.result)
                this.reder(res.data.result)
            }).catch(err=>{

            })
        },
        reder(arrlist){
            this.result = arrlist
        },
        insertChar(num){
            num += ''
            let arr = num.split('')
            let len = arr.length
            let loop = 0
            let index = null
            if(len % 3 !== 0){
                loop = Math.floor(len/3)
            }else{
                loop =  Math.floor(len/3) -1
            } 
            for(let i = 1; i <= loop; i++){
                index = len - i * 3 
                arr.splice(index, 0, ",")
                
            }
            return arr.join('')

        }
    },
    mounted(){
        this.getdata()
    }

}
</script>

<style lang='stylus' scoped>

@import '~@/assets/css/util.styl'
.player-wrapper
    width 100%
    padding 9rem 0 0 0
    background #F3F7FF
    text-align center
    .player-box
        position relative
        padding-bottom 5rem
        &:after
            content ""
            display block
            position absolute
            width 100%
            height 0
            left 0
            bottom 0
            padding-bottom 4%
            background-image url(https://dapp.review/assets/6a64948b.svg) 
            background-size: 100%
            background-repeat no-repeat
    .player-right
        width  30%
        display inline-block
        text-align left  
        vertical-align middle
        h2
            font-size 2rem
            margin-bottom  1.5rem
        p 
            font-size 1.2rem
            line-height 2rem
        a 
            display block
            font-size 1rem
            color #FFF
            text-align center
            width 9rem
            height 3rem
            line-height 3rem
            background $deep 
            border-radius 2rem
            margin-top 2.5rem
            transition all .25s
            &:hover
                background $deepHover
    .player-left
        width 40%
        display inline-block
        margin-right 5%
        box-shadow 0 66px 100px -25px rgba(50,50,80,.2), 0 30px 100px -37.5px rgba(0,0,0,.2)
        img 
            width 100%
    .dataItem
        position relative
        width 100%
        height 19rem 
        background #fff
        text-align center
        margin-top 0
        .item-list
            position absolute
            top 0
            bottom 0
            left 0
            right 0
            margin auto
            width 100%
            height 5rem  
        .item   
            position relative
            display inline-block
            min-width 5rem 
            height 4rem
            font-size 2.5rem 
            margin 0 2rem
            &:before
                position absolute
                top -2rem
                left 0
                right 0 
                margin auto
                content ""
                width 2.5rem
                height .5rem  
            .data-num
                font-weight 600
            .data-dec
                display block
                line-height 3rem
                font-size 1.2rem
        .item:nth-of-type(1):before
            background #FF5050
        .item:nth-of-type(2):before
            background #6EEECD
        .item:nth-of-type(3):before
            background #7E67FF
        .item:nth-of-type(4):before
            background #FFD54F 
        &:after
            content ""
            display block
            position absolute
            width 100%
            background-image url(https://dapp.review/assets/c9afe892.svg)
            background-size 100%
            bottom -2px
            height 0
            padding-bottom 4%

</style>