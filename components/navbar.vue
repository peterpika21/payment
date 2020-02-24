<template lang="pug">
  div
    svg-icon.m-4(icon-class="logo" width="230" height="40")

    ul.v-stepBar
      li(v-for="item in list")
        // 向右標籤
        div.py-4(v-if="item.icon === 'icon_arrow'")
          svg-icon(:icon-class="item.icon" width="24" height="24")

        // 內容
        div.p-4.d-flex.align-items-center.justify-content-center(v-else,style="width:260px")
          svg-icon.mr-2(:icon-class="item.icon" width="24" height="24")
          span(:class="{'tx-primary':activeTag > item.active}") {{item.title}}

    div.v-Info
      div.py-9.h-container.mx-auto.tx-white.d-flex.justify-content-between
        div.d-flex
          div.v-Info__ltBd
          div.ml-5
            p(style="font-size:36px") 訂單明細
            p.mt-1.font-m (JC293016)

        div.d-flex.align-items-center
          span.mr-12 商品小計 NT$ 880
          span.mr-12 運費 NT$ 60
          span.mr-2 總金額
          span.font-xl.weight-l NT$ 940

</template>

<script>
export default {
  data() {
    return {
      activeTag: 1,
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

  &-Info {
    height: 130px;
    background: transparent linear-gradient(270deg, #82d6d6 0%, #8bc1ef 100%) 0% 0% no-repeat padding-box;
    position: relative;
    bottom: 27px;
    z-index: -1;

    &__ltBd {
      display: inline-block;
      height: 60px;
      border: 2px solid #ffffff;
      border-radius: 4px;
    }
  }
}
</style>
