<template lang="pug">
  div.p-4
    svg-icon(icon-class="logo" width="230" height="40")

    ul.v-stepBar
      li(v-for="item in list")
        // 向右標籤
        div.py-4(v-if="item.icon === 'icon_arrow'")
          svg-icon(:icon-class="item.icon" width="24" height="24")

        // 內容
        div.p-4.d-flex.align-items-center.justify-content-center(v-else,style="width:260px")
          svg-icon.mr-2(:icon-class="item.icon" width="24" height="24")
          span {{item.title}}
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          title: '確認購物車',
          active: 0,
          icon: 'icon_step_done'
        },
        {
          icon: 'icon_arrow'
        },
        {
          title: '選擇配送付款方式',
          active: 1,
          icon: 'icon_step2'
        },
        {
          icon: 'icon_arrow'
        },
        {
          title: '確認訂購',
          active: 2,
          icon: 'icon_step3'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.v {
  &-stepBar {
    display: flex;
    margin: 0 auto;
    width: 810px;
    background: #f5f7fa;
    border: 0;
    border-radius: 4px;
  }
}
</style>
