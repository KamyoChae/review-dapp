<template>
<div class="index-wrapper">
    <myHerder />
    <banner />
    <explore />
    <player />
    <dataCharts />
    <myarticle />
    <concat />
    <myfoot />
</div>

</template>

<script>
import myHerder from '../header/header'
import banner from './components/banner'
import explore from './components/explore'
import player from './components/player'
import dataCharts from './components/dataCharts'
import myarticle from './components/article'
import concat from './components/concat'
import myfoot from './components/foot'
export default {
    components:{
        myHerder,
        banner,
        explore,
        player,
        dataCharts,
        myarticle,
        concat,
        myfoot,
    }

}
</script>

<style lang='stylus' scoped>

</style>