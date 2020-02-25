<template lang="pug">
  div
    // 超商
    //- store(v-if="payType === 'store' && !isFinish",@res="getres")
    storeFinish
</template>

<script>
import store from '~/components/layout/store'
import storeFinish from '~/components/layout/storeFinish'

export default {
  components: { store, storeFinish },
  data() {
    return {
      isFinish: false,
      payType: this.$route.query.type,
      data: {}
    }
  },
  created() {},
  methods: {
    getres(data) {
      this.isFinish = true
      this.data = { ...data }
    }
  }
}
</script>
