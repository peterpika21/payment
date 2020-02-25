<template lang="pug">
  div
    div.mx-auto.my-11.h-container.tx-gray-400
      p.mb-2.align-center(style="font-size: 36px") 訂購成功！
      p.align-center 感謝您的訂購，請您在2019/08/10,am00:00前繳費
      p.align-center 至超商店內機台輸入代碼進行繳費，逾期訂單自動作廢。
      div.d-flex.justify-content-center.align-items-center
        svg-icon.mt-8.mb-6(icon-class="img_complete" width="162" height="141")

    div.px-9.py-5.mx-auto.my-11.bg-gray-100(style="width:810px")
      p 訂單資訊 (JC293016)
      table.tx-gray-400.width-20
        thead
          th(width="200")
          th.align-left(width="80") 數量
          th.align-left(width="80") 顏色
          th.pr-6.align-right 價格
        tbody
          tr
            td 長版無袖洋裝
            td 1
            td 綠色
            td.pr-6.align-right 599元
          tr
            td 大球氣質銀飾耳環(針式)
            td 1
            td 紅色
            td.pr-6.align-right 281元
          tr
            td(style="border-bottom:1px solid #ddd") 運費
            td(style="border-bottom:1px solid #ddd") 
            td(style="border-bottom:1px solid #ddd") 
            td.align-right.pr-6(style="border-bottom:1px solid #ddd") 60元
      p.align-right.tx-gray-400 共2品項，總計
        span.mr-6.ml-2.font-xl.weight-l NT$ 940

      div.d-flex.align-items-center
        span.weight-l.mr-4 取貨門市
        img(src="~assets/icons/logo_family.png" width="133" height="24")

      div.mt-4.d-flex.align-items-center.tx-gray-400.pb-3(style="border-bottom:1px solid #ddd")
        span.weight-l(style="margin-right:124px") 取貨店名
        span 復興

      div.mt-3.d-flex.align-items-center.tx-gray-400
        span.weight-l(style="margin-right:124px") 取貨地址
        span 台北市大安區復興路999段99號1巷

      p.mt-8.weight-l 付款資訊
      div.mt-3.mr-6.d-flex.align-items-center.justify-content-between.tx-gray-400
        p 需付金額：940元
        p 繳費代碼：Rh7847213183
        p 繳費期限：2019/08/10,am00:00
        p 狀態：待付款

    div.px-12.h-container.my-3.mx-auto.d-flex.justify-content-center
      button.mr-5.bg-white.border-gray-200.round-m.py-4.px-12.border-solid(@click="",style="outline: none;") 會員專區
      button.bg-primary.tx-white.border-0.round-m.py-4.px-12.cursor-pointer(@click="$router.push('/')",type="submit",style="outline: none;") 返回首頁
</template>

<script>
export default {
  data() {
    return {}
  },
  created() {
    this.$store.commit('SET_BANNER', false)
  },
  methods: {}
}
</script>
