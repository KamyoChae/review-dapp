<template>
<div class="index-wrapper">
    <myHerder />
    <banner />
    <explore />
    <player />
    <dataCharts />
    <myarticle />
</div>

</template>

<script>
import myHerder from '../header/header'
import banner from './components/banner'
import explore from './components/explore'
import player from './components/player'
import dataCharts from './components/dataCharts'
import myarticle from './components/article'
export default {
    components:{
        myHerder,
        banner,
        explore,
        player,
        dataCharts,
        myarticle,
    }

}
</script>

<style lang='stylus' scoped>

</style>