<template>
  <div id="app"> 
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
 
<style lang="stylus">
@import '~@/assets/css/util.styl'
:root
  font-size $root
  
</style>