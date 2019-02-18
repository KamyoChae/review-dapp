<template>
<div class="index-wrapper">
    <myHerder />
    <banner />
    <explore />
    <player />
    <dataCharts />
</div>

</template>

<script>
import myHerder from '../header/header'
import banner from './components/banner'
import explore from './components/explore'
import player from './components/player'
import dataCharts from './components/dataCharts'
export default {
    components:{
        myHerder,
        banner,
        explore,
        player,
        dataCharts,
    }

}
</script>

<style lang='stylus' scoped>

</style>