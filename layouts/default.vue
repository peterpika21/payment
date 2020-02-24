<template lang="pug">
  div#app
    navbar
    nuxt
    
</template>

<script>
import navbar from '~/components/navbar'

export default {
  components: { navbar }
}
</script>

<style lang="scss" scoped>
#app {
  height: 100%;
}
</style>
