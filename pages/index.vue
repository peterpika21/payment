<template lang="pug">
  div
    // 選單
    ul.p-9.h-container.mx-auto.d-flex.flex-wrap.justify-content-between
      li.v-payType(v-for="item in payType",:class="{'cursor-not-allowed':(item.icon === 'unionpay')}",@click="clickType(item)")
        svg-icon.ml-8.mr-4(:icon-class="active == item.type?'icon_confirm':'icon_confirm_normal'" width="24" height="24")
        svg-icon.mr-5(v-if="item.icon !== 'unionpay'",:icon-class="item.icon" width="70" height="50")
        img.mr-5(v-else,src="~assets/icons/unionpay.png",style="width:70px;height:50px")
        div.width-50
          p.mb-2(:class="{'tx-gray-200':(item.icon === 'unionpay'),'tx-gray-400':(item.icon !== 'unionpay')}") {{item.title}}
          p(:class="{'tx-gray-200':(item.icon === 'unionpay'),'tx-gray-300':(item.icon !== 'unionpay')}") {{item.content}}

    // 說明
    div.px-12.h-container.mx-auto.relative
      ul(style="list-style: disc;line-height: 28px;")
        li
          p.tx-gray-300 請確認您填寫的資料是否正確，一旦訂單完成後，付款與物流方式皆無法修改。
        li
          p.tx-gray-300 使用ATM轉帳，將依據銀行入帳日，依序進行出貨/排貨。
        li
          p.tx-gray-300 每筆訂單所提供的「ATM專屬虛擬帳號」皆不同，若您欲使用本項服務，敬請放心進行匯款作業，安全又便利！ 
        li
          p.tx-gray-300 若訂單內含預購、無庫存商品調貨時間請參考「商品平均調貨時間」。
        li
          p.tx-gray-300 若您對取貨或付款的方式有疑問，請詳閱 
            a.tx-primary(href="javascript:void(0)",style="text-decoration: none;") 「購買說明」
            |。 
        li
          p 請確認您已詳閱並瞭解本站
            a.tx-primary(href="javascript:void(0)",style="text-decoration: none;") 「購買說明」
            | 內容，訂單完成即表示您已同意其中的各項說明。
      div(style="position: absolute;top: 0;right: 0;z-index:-1")
        svg-icon.mr-5(icon-class="icon_notice")

    div.px-12.h-container.my-3.mx-auto.d-flex.justify-content-end
      button.mr-5.bg-white.border-gray-200.round-m.py-4.px-12.border-solid(style="outline: none;") 上一步
      button.bg-primary.tx-white.border-0.round-m.py-4.px-12(style="outline: none;") 下一步
</template>

<script>
export default {
  data() {
    return {
      active: 'store',
      payType: [
        { title: '超商取貨 付款', content: '24隔日取貨說明', icon: 'icon_store', type: 'store' },
        { title: '信用卡 付款', content: 'VISA, Master, JCB, 聯合信用卡', icon: 'icon_card', type: 'card' },
        { title: 'LINE Pay 付款', content: '使用line point折抵消費', icon: 'line_pay', type: 'line' },
        {
          title: '銀聯卡 付款',
          content: '支付成功頁面僅為銀聯卡回覆訊息，交易是否完成請需以本商店通知為準',
          icon: 'unionpay'
        },
        { title: 'Web ATM 付款', content: '網路銀行ATM操作說明', icon: 'icon_atm', type: 'atm' }
      ]
    }
  },
  methods: {
    clickType(item) {
      if (item.type) {
        this.active = item.type
      }
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
    cursor: pointer;
  }
}
</style>
