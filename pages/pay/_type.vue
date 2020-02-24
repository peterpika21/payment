<template lang="pug">
  div
    p {{ payType }}
</template>

<script>
export default {
  data() {
    return {
      payType: this.$route.params.type
    }
  }
}
</script>
