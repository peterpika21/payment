<template lang="pug">
  div
    ul.p-9.h-container.mx-auto.d-flex.flex-wrap.justify-content-between
      li.v-payType(v-for="item in payType",:class="{'cursor-not-allowed':(item.icon === 'unionpay')}")
        svg-icon.ml-8.mr-4(icon-class="icon_confirm" width="24" height="24")
        svg-icon.mr-5(v-if="item.icon !== 'unionpay'",:icon-class="item.icon" width="70" height="50")
        img.mr-5(v-else,src="~assets/icons/unionpay.png",style="width:70px;height:50px")
        div.width-50
          p.mb-2(:class="{'tx-gray-200':(item.icon === 'unionpay'),'tx-gray-400':(item.icon !== 'unionpay')}") {{item.title}}
          p(:class="{'tx-gray-200':(item.icon === 'unionpay'),'tx-gray-300':(item.icon !== 'unionpay')}") {{item.content}}

</template>

<script>
export default {
  data() {
    return {
      payType: [
        { title: '超商取貨 付款', content: '24隔日取貨說明', icon: 'icon_store' },
        { title: '信用卡 付款', content: 'VISA, Master, JCB, 聯合信用卡', icon: 'icon_card' },
        { title: 'LINE Pay 付款', content: '使用line point折抵消費', icon: 'line_pay' },
        {
          title: '銀聯卡 付款',
          content: '支付成功頁面僅為銀聯卡回覆訊息，交易是否完成請需以本商店通知為準',
          icon: 'unionpay'
        },
        { title: 'Web ATM 付款', content: '網路銀行ATM操作說明', icon: 'icon_atm' }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.v {
  &-payType {
    display: flex;
    align-items: center;
    width: 400px;
    height: 120px;
    margin-bottom: 20px;
    border: 1px solid #dcdfe6;
    border-radius: 4px;
  }
}
</style>
