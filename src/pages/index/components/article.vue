<template>
<div class="article-wrapper">
    <div class="article-box">

        <h2>深|度|好|文</h2>

        <div class="article-list">
            <transition-group  tag="div"  name="list" class="list-show"  >
                <a 
                :href="item.url" 
                v-for="(item, index) in articleArr" 
                :key="item.id"  
                v-show="index===currentIndex" 
                @mouseenter="stop" 
                @mouseleave="go">

                    <div class="article">
                        <i class="logo" ></i>
                        <div class="text-box">  
                            <p>{{item.description}}</p>
                        </div>
                        <span class="index">{{index+1}}</span>
                        <img  :src="item.head_image" class="images" alt="">
                        <p class="img-title">{{item.title}}</p>
                    </div>
                </a>
                 
                 
            </transition-group> 
            


            <div class="code">
                <img src="https://dapp.review/assets/8ec37623.svg" alt="扫码获取更多">
                <p>扫码获取更多</p>
            </div>

        </div>

        
    </div>
    <div class="carousel-items">
        <span v-for="(item,index) in articleArr.length" 
        :key="index" :class="{'active':index===currentIndex}" 
        @mouseenter="change(index)"
        @mouseleave="go"
        ></span>
    </div>


</div>

</template>

<script>
export default {
    data(){
        return {
            articleArr:[],  
            currentIndex: 0,
            timer: ''
        }
    },
    methods: { 
        getArticle(){
            this.axios.get('/api/blog/article/groups/?show_in_index=1&language=1').then(res=>{
                // console.log(res)
                let articles = res.data.results[0].articles
                articles.forEach(element => {
                    element.url = 'https://dapp.review/article/' + element.id
                }); 
                this.articleArr = articles 
            }).catch(err=>{})
        },
        go() {
            this.timer = setInterval(() => {
                this.autoPlay()
            }, 3000)
        },
        stop() {
            clearInterval(this.timer)
            this.timer = null
        },
        change(index) {
            this.currentIndex = index
            this.stop()
        },
        autoPlay() {
            this.currentIndex++
            if (this.currentIndex > this.articleArr.length - 1) {
                this.currentIndex = 0
            }
        }
    },
    created() { 
        this.getArticle()
    }
}
</script>

<style lang='stylus' scoped>
@import '~@/assets/css/util.styl'
.article-wrapper
    position relative
    width 100%
    padding 5rem 0
    background #fff
    .article-box 
        text-align center
        h2 
            font-size 2rem 
            line-height 5rem
            margin-bottom 5rem
            background #fff
            letter-spacing 1rem
        .article-list
            position relative
            padding 5rem 12rem
            background #f3f7ff 
            .list-show 
                overflow hidden
                position relative
                font-size 0
                width 100%
                height 40rem
                background #fefefe  
                box-sizing border-box
                border-radius 1rem
                box-shadow 0 90px 100px -25px rgba(50,50,80,.2), 0 50px 100px -37.5px rgba(0,0,0,.2) 
                &:before
                    position absolute
                    content ''
                    width 20rem
                    height 20rem 
                    top 0
                    bottom 0
                    left 0
                    right 0
                    margin auto 
                    background url(https://dapp.review/logo.svg) no-repeat
                    background-size 100% 
                    opacity .5
                a  
                    position absolute
                    left 0
                    $all100()
                    .article
                        position relative
                        $all100()
                        position relative
                        overflow hidden
                        span.index
                            color rgba(255,255,255,.3) 
                            font-size 5rem
                            z-index 999
                            position absolute
                            bottom 2rem
                            left 2rem
                            font-style italic
                        i.logo 
                            position absolute 
                            left 2rem
                            top 2rem
                            width 5rem 
                            height 5rem
                            background url(https://dapp.review/white-logo.svg) no-repeat
                            z-index 99
                        .img-title
                            position absolute
                            bottom 0
                            right 0
                            width 50% 
                            background #fff 
                            height 5rem
                            line-height 5rem
                            color $deep2
                            font-size 1.5rem
                            z-index 6
                        img.images
                            position absolute
                            margin auto
                            top 0
                            bottom 0
                            right -20%
                            height 100%
                            vertical-align middle
                            border-radius $radius 
                        &:before
                            content ''
                            display block
                            position absolute
                            top 0 
                            $all100() 
                            background rgba(218,150,206,.28)
                            user-select none
                            z-index 5
                        .text-box
                            position relative
                            color #000
                            font-size 1rem
                            font-weight 200
                            $all100()  
                            width 50% 
                            background #1f232f 
                            z-index 11 
                            p 
                                display inline-block
                                color #fff
                                opacity .85
                                line-height 2rem
                                letter-spacing .2rem
                                text-align left 
                                margin 5rem 6rem
                                width 30rem
                                height 22rem
                                padding 4rem
                                border 1px dashed rgba(255,255,255,.3)
                                border-right none 
                                border-top none
                                &:first-letter 
                                    font-size: 3em
                                    padding: 0.1em
                                    color: $logoGreen
                                    vertical-align: baseline

                        &:after
                            content ''
                            display inline-block
                            position absolute
                            width 0
                            height 0
                            top 0
                            right 18.6rem
                            border 20rem solid #1f232f
                            border-right-color transparent
                            border-bottom-color transparent
                            border-right-width 10rem
                            border-left-width 10rem

                            z-index 10
                    
            .carousel-items {
                position: absolute;
                z-index: 999;
                bottom: 0
                width: 100%;
                margin: 0 auto;
                text-align: center;
                font-size: 0;
                span {
                    display: inline-block;
                    height: 6px;
                    width: 30px;
                    margin: 0 3px;
                    background-color: #b2b2b2;
                    cursor: pointer;
                }
                .active {
                    background-color: red;
                }
            }
    .carousel-items
        position absolute
        width 1rem 
        height 20rem
        right 5rem
        top 0
        bottom 0
        margin auto  
        span 
            display inline-block
            width 1.5rem 
            height 1.5rem 
            border-radius 50%  
            margin .5rem 0
            background #eee
        .active
            background #1f232f


    .code
        padding 10rem  5rem
        color $deep2
        width 14rem 
        height 14rem 
        margin auto
        img 
            width 100%
            height 100% 
        p 
            font-size 2rem
            line-height 8rem  

</style>