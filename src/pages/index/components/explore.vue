<template>
<div class="explore-wrapper">

    <div class="explore-left">
        <h2>海量应用，触手可及</h2>
        <p> 
            DappReview 提供最权威的 Dapp 数据、用户洞察和市场分析。超过2000个 Dapp，同时支持6条主链。
        </p>
        <a href="">发现 DAPP</a>
    </div>
    <div class="explore-right">
        <img src="https://media.dappreview.cn/images/kaeyleo/eZXzfTAsdr5bfA5CxRftwpMXrmfEennx.png" alt="">
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
    position relative
    width 100%
    padding 9rem 0
    background #fff
    text-align center
    .explore-left
        width  30%
        display inline-block
        text-align left  
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
                
    .explore-right
        width 30%
        display inline-block
        vertical-align top
        margin-left 10%
        img 
            width 100%

</style>