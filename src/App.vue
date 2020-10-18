<template>
  <div id="app">
    <!--    <div id="nav">-->
    <!--    </div>-->
    <router-view/>
  </div>
</template>

<script>
  import globalActions from './store/global/actions'
  import loginActions from './pages/public/login/store/actions'

  export default {
    mounted () {
      this.$store.dispatch(globalActions.FETCH_USER)
    }
  }
</script>

<style lang="stylus">

</style>
