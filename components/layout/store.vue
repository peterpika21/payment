<template lang="pug">
  ValidationObserver(ref="form")
    form(form @submit.prevent="validate")
      div.mx-auto.my-11.d-flex.justify-content-between.align-items-center(style="width:180px")
        svg-icon(icon-class="icon_store" width="36" height="27")
        span.font-l.tx-gray-400 超商取貨 付款

      div.mx-auto.h-container
        div.d-flex.align-items-center
          span.weight-l.mr-7 取貨門市
          img(src="~assets/icons/logo_family.png" width="133" height="24")

        div.mt-3.bg-gray-100(style="border-left: 4px solid #4BC9C9;")
          div.d-flex.p-5.tx-gray-500(style="border-bottom: 1px solid #ddd;")
            p(style="margin-right:120px") 取貨店名
            p 復興
          div.d-flex.p-5.tx-gray-500
            p(style="margin-right:120px") 取貨地址
            p 台北市大安區復興路999段99號1巷

        p.mt-12.weight-l 填寫訂購人資訊
        div.mt-3(style="border-left: 4px solid #4BC9C9;")
          div.d-flex.p-5.tx-gray-500.align-items-center
            p.h-titleWidth 姓名
            v-input.mr-10(v-model="store.orderer.name" :name="'訂購人姓名'" :type="'text'" :rules="'required'" :placeholder="'請填寫真實姓名'")
            p.h-titleWidth 手機
            v-input.flex-1(v-model="store.orderer.phone" :name="'訂購人手機'" :type="'tel'" :rules="'required'" :placeholder="'請填寫手機號碼'")

          div.d-flex.p-5.tx-gray-500.align-items-center
            p.h-titleWidth 地址
            v-input.mr-4(v-model="store.orderer.num" :name="'訂購人郵遞區號'" :type="'number'" :rules="'required'" :placeholder="'郵遞區號'")
            v-input.flex-1(v-model="store.orderer.address" :name="'訂購人地址'" :type="'text'" :rules="'required'" :placeholder="'例：新北市信義區復興路999段99號1巷8樓'")

          div.d-flex.p-5.tx-gray-500.align-items-center
            p.h-titleWidth Email
            v-input.flex-1(v-model="store.orderer.email" :name="'訂購人Email'" :type="'email'" :rules="'required|email'")

        p.mt-12.weight-l 填寫收件人資訊
        div.mt-3(style="border-left: 4px solid #4BC9C9;")
          div.d-flex.p-5.tx-gray-500.align-items-center
            svg-icon.mr-2.cursor-pointer(:icon-class="isSame?'icon_step_done':'icon_oncheck'" width="20" height="20",@click="clickSame()")
            p 同訂購人資料

          div.d-flex.p-5.tx-gray-500.align-items-center(v-if="!isSame")
            p.h-titleWidth 姓名
            v-input.mr-10(v-model="store.recipient.name" :name="'收件人姓名'" :type="'text'" :rules="'required'" :placeholder="'請填寫真實姓名'")
            p.h-titleWidth 手機
            v-input.flex-1(v-model="store.recipient.phone" :name="'收件人手機'" :type="'tel'" :rules="'required'" :placeholder="'請填寫手機號碼'")

          div.d-flex.p-5.tx-gray-500.align-items-center(v-if="!isSame")
            p.h-titleWidth 地址
            v-input.mr-4(v-model="store.recipient.num" :name="'收件人郵遞區號'" :type="'number'" :rules="'required'" :placeholder="'郵遞區號'")
            v-input.flex-1(v-model="store.recipient.address" :name="'收件人地址'" :type="'text'" :rules="'required'" :placeholder="'例：新北市信義區復興路999段99號1巷8樓'")

          div.d-flex.p-5.tx-gray-500.align-items-center(v-if="!isSame")
            p.h-titleWidth Email
            v-input.flex-1(v-model="store.recipient.email" :name="'收件人Email'" :type="'email'" :rules="'required|email'")

        // 說明
        div.px-12.h-container.mx-auto.relative
          ul(style="list-style: disc;line-height: 28px;")
            li
              p.tx-gray-300 請確認您填寫的資料是否正確，一旦訂單完成後，付款與物流方式皆無法修改。
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
          div(style="position: absolute;top: 0;right: -50px;z-index:-1")
            svg-icon.mr-5(icon-class="icon_notice")

        div.px-12.h-container.my-3.mx-auto.d-flex.justify-content-end
          button.mr-5.bg-white.border-gray-200.round-m.py-4.px-12.border-solid(@click="$router.go(-1)",style="outline: none;") 上一步
          button.bg-primary.tx-white.border-0.round-m.py-4.px-12.cursor-pointer(type="submit",style="outline: none;") 下一步
</template>

<script>
export default {
  data() {
    return {
      isSame: false,
      store: {
        orderer: {
          name: '',
          phone: '',
          num: '',
          address: '',
          email: ''
        },
        recipient: {
          name: '',
          phone: '',
          num: '',
          address: '',
          email: ''
        }
      }
    }
  },
  created() {},
  methods: {
    validate() {
      this.$refs.form.validate().then(success => {
        if (success) {
          this.$emit('res', this.store)
        }
      })
    },
    clickSame() {
      if (this.isSame) {
        this.store.recipient = { name: '', phone: '', num: '', address: '', email: '' }
      } else {
        this.store.recipient = { ...this.store.orderer }
      }
      this.isSame = !this.isSame
    }
  }
}
</script>
