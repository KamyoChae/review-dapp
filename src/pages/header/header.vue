<template>

<div class="header-wrapper">
    <div class="header-left">

        <img src="https://dapp.review/white-logo.svg" alt="">
        <div class="link">

            <router-link tag="span" to="/">首页</router-link>
            <router-link tag="span" to="/">发现</router-link>
            <router-link tag="span" to="/">氪金排行榜</router-link>
            <router-link tag="span" to="/">关于 & 提交</router-link>
        </div>
 
    </div>

    <div class="header-right">
        <i class="iconfont icon-sousuo" @click="open"></i>
        <router-link tag="span" to="/">登录</router-link>
    </div>
    <div class="search" v-show="showSearch">
        <i class="iconfont icon-sousuo black left"></i> 
        <i class="iconfont icon-cuo black right" @click="close"></i>
        <input type="text" ref="searchInput">
    </div>
</div>

</template>

<script>
export default {
    data(){
        return {
            showSearch: false,
        }
    },
    methods:{
        close(){
            this.showSearch = false 
            this.$refs.searchInput.value = ""
        },
        open(){
            this.showSearch = true
        }
    }
}
</script>


<style lang='stylus' scoped>
@import '~@/assets/css/util.styl'
.header-wrapper
    box-sizing border-box
    position relative
    width 100%
    height 5rem
    font-size 1rem
    color #fff
    padding-top 1.5rem
    padding-bottom 1.5rem 
    background $mainColor
    .header-left
        padding-left .2rem
        width 50%
        display inline-block
        img 
            height 2rem
        .link
            display inline-block
            width 80%
            margin-left 2rem 
            span 
                cursor pointer
                padding .8rem 1.2rem
                &:hover
                    border-radius $radius
                    background rgba(255,255,255,0.1)
    .header-right
        position absolute
        right 0 
        top 1.5rem
        padding-right 1rem 
        cursor pointer  
        span  
            padding .5rem 1.2rem
            border-radius $radius 
            vertical-align middle  
            &:hover
                background $hover
        i 
            display inline-block 
            width 3rem
            height 3rem
            text-align center
            line-height 3rem
            border-radius 50%
            font-size 1.5rem
            margin 0 1.5rem 
            &:hover
                background $hover
    .search
        position absolute
        top 0
        width 100%
        height 5rem
        line-height 5rem
        box-sizing border-box
        background #554FFF
        padding 0 .5rem 
        input 
            box-sizing border-box 
            width 100%
            padding .8rem 3rem
        .black
            position absolute
            top 0
            bottom 0
            margin auto
            color #888 
        .left, .right
            font-size 1.5rem
            cursor pointer
            text-align center 
            height 3rem
            line-height 3rem
            width 3rem
        .left 
            left 1rem
        .right
            right 1rem 
            border-radius 50%
            &:hover
                background rgba(0,0,0,.1)



</style>