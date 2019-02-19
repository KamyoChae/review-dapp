<template>

<div class="foot-wrapper">
    <div class="foot-left">
        <img src="https://dapp.review/logo.svg" alt="">
        <p>© 2019 dapp.review</p>
    </div>
    <div class="foot-right">
        <div class="icon-list">
            <a href="">
                <img src="https://dapp.review/assets/ad1195d3.svg"  alt="">
            </a>  
            <a href="https://zhuanlan.zhihu.com/dappreview">
                <img src="https://dapp.review/assets/df76f0e2.svg"  alt="">
            </a> 
            <a href="https://twitter.com/dapp_review">
                <img src="https://dapp.review/assets/39b963d2.svg"  alt="">
            </a> 
            <a href="https://weibo.com/u/5908941978">
                <img src="https://dapp.review/assets/f7069f94.svg"  alt="">
            </a> 
            <a href="https://discord.gg/HDfanA9">
                <img src="https://dapp.review/assets/ec8786d0.svg"  alt="">
            </a> 
            <a href="https://t.me/dappreview_cn">
                <img src="https://dapp.review/assets/2b783c66.svg"  alt="">
            </a> 
            <a href="https://medium.com/dappreview">
                <img src="https://dapp.review/assets/910d1d70.svg"  alt="">
            </a> 
        </div>

        <div class="btn-bar" >
            中文(简)
            <ul class="bar-list">
                <li>English</li>
                <li>中文(简)</li>
                <li>한국어</li>
                <li>日本語</li>
            </ul>
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
.foot-wrapper
    box-sizing border-box
    width 100% 
    padding 4rem 14rem 
    background $white
    display flex 
    justify-content space-between
    .foot-left
        img 
            height 2rem 
        p 
            font-size 1rem 
            margin-top 2rem 
            color #888
    .foot-right 
        text-align right 
        .icon-list 
            a 
                display inline-block
                margin 0 .5rem 
                img 
                    width 1.8rem 
                    height 1.8rem 
        .btn-bar 
            display inline-block
            position relative
            width 6em
            height 3em
            line-height 3em
            text-align left 
            font-size .8rem 
            margin-top 2rem  
            user-select none 
            cursor pointer
            border-bottom 1px solid #353535
            &:hover 
                border-bottom-width  2px 
            .bar-list 
                position absolute
                top -6rem
                width 6rem
                padding .5rem 0
                background #fff 
                border-radius .5rem
                box-shadow 0 10px 20px #bbb 
                z-index -55
                li  
                    font-size 1.2rem
                    text-align center 
                    line-height 3rem
                    &:hover 
                        background #eee
            &:hover .bar-list 
                z-index 999
</style>