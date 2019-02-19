<template>
<div class="concat-wrapper">

    <h1>提交 DApp 给 dapp.review</h1>
    <div class="btn-box">
        <a href="" class="submit">提交</a>
        <a href="" class="concatme">联系我们</a>
    </div>
</div>

</template>

<script>
export default {

}
</script>

<style lang='stylus' scoped>
@import '~@/assets/css/util.styl'
.concat-wrapper
    box-sizing border-box
    width 100%
    height 12.5rem
    padding 0 14rem
    background #fff
    display flex 
    justify-content space-between 
    h1 
        font-size 1.8rem 
        color $deep2
    .btn-box 
        width 20rem  
        text-align right
        a 
            font-size 1rem
            display inline-block
            padding .9rem 1.7rem 
            color #fff 
            border-radius .5rem
            border 1px solid #bbb
            margin 0 .5rem
        .submit 
            background $mainColor
            &:hover 
                background $hover
        .concatme 
            color black 
</style>