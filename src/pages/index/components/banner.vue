<template>
    <div class="banner-wrapper">

        <div class="imgbox">
            <div class="leftbox"> 
                <a href="" target="_brank">
                    <img src="https://media.dappreview.cn/images/DR---0x001/dsDeXF6HMyDkmpYZrJWsy4hB444WhhQM.png" alt="">
                </a>
            </div>
            <div class="rightbox">
                <a href="" target="_brank">
                    <img src="https://media.dappreview.cn/images/DR---0x001/dsDeXF6HMyDkmpYZrJWsy4hB444WhhQM.png" alt="">
                </a> 
                <a href="" target="_brank">
                    <img src="https://media.dappreview.cn/images/DR---0x001/dsDeXF6HMyDkmpYZrJWsy4hB444WhhQM.png" alt="">
                </a> 
                <a href="" target="_brank">
                    <img src="https://media.dappreview.cn/images/DR---0x001/dsDeXF6HMyDkmpYZrJWsy4hB444WhhQM.png" alt="">
                </a> 
                <a href="" target="_brank">
                    <img src="https://media.dappreview.cn/images/DR---0x001/dsDeXF6HMyDkmpYZrJWsy4hB444WhhQM.png" alt="">
                </a> 

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

.banner-wrapper
    position relative
    width 100%
    height 24rem
    background $mainColor
    font-size 0
    .imgbox
        box-sizing border-box
        width 95%
        position absolute 
        z-index 5
        margin auto 
        left 0
        right 0
        .leftbox, .rightbox  
            vertical-align top
            box-sizing border-box
            width 50%
            display inline-block
            a
                overflow hidden
                margin .5%
                box-sizing border-box 
                display inline-block
                img 
                    width 100%
                    transition all .25s
                    &:hover
                        transform scale(1.1)
        .rightbox  
            box-sizing border-box
            a
                width 48%
                img 
                    width 100%
</style>