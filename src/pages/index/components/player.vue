<template>
<div class="explore-wrapper"> 

    <div class="explore-left"> 
        <img src="https://media.dappreview.cn/images/kaeyleo/rw8W35arRKFFfpf4Pdk84SShPiJ4imCc.svg " alt="">
    </div>

    <div class="explore-right">
        <h2>玩家数据，一目了然</h2>
        <p>  
            聚合EOS、TRON、ETH三大平台用户数据，帮你清楚地计算Dapp消费账单，同时还可以围观氪金大佬动态，紧跟步伐。 
        </p>
        <a href="">查看数据</a>
    </div>

    <div class="dataItem">
        <div class="item-list">
            <div class="item">
                <span class="data-num">2,192</span>
                <span class="data-dec">DAPP</span>
            </div> 
            <div class="item"> 
                <span class="data-num">141,702</span>
                <span class="data-dec">日活</span>
            </div>
            <div class="item"> 
                <span class="data-num">￥156,871,981</span>
                <span class="data-dec">24h 交易额</span>
            </div>
            <div class="item"> 
                <span class="data-num">5,256</span>
                <span class="data-dec">智能合约</span>
            </div>
        </div>

    </div>
</div>

</template>

<script>
export default {

}
</script>

<style lang='stylus' scoped>

@import '~@/assets/css/util.styl'
.explore-wrapper
    width 100%
    padding 9rem 0 0 0
    background #F3F7FF
    text-align center
    .explore-right
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
    .explore-left
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
        margin-top 5rem 
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
        &:before
            content ""
            display block
            position absolute
            width 100%
            height 0
            left 0
            top -30px
            padding-bottom 4%
            background-image url(https://dapp.review/assets/6a64948b.svg) 
            background-size: 100%
            background-repeat no-repeat

</style>