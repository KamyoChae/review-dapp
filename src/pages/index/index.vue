<template>
<div class="index-wrapper">
    <myHerder />
    <banner />
    <explore />
    <player />
</div>

</template>

<script>
import myHerder from '../header/header'
import banner from './components/banner'
import explore from './components/explore'
import player from './components/player'
export default {
    components:{
        myHerder,
        banner,
        explore,
        player,
    }

}
</script>

<style lang='stylus' scoped>

</style>