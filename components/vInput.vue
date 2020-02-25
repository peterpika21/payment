<template lang="pug">
  ValidationProvider.v-input(:name="name" :rules="rules" v-slot="{ errors,valid }")
    input.width-20(v-model="childData" :type="type" :placeholder="placeholder",:class="{'border-danger':errors[0],'border-m':errors[0]}")
    span.v-input__errMsg {{ errors[0] }}
</template>

<script>
export default {
  props: {
    value: {
      type: [String, Number]
    },
    name: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    },
    placeholder: {
      type: String,
      default: ''
    },
    rules: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      childData: this.value
    }
  },
  watch: {
    childData(value) {
      this.$emit('input', value)
    },
    value(newVal) {
      this.childData = newVal
    }
  }
}
</script>

<style lang="scss" scoped>
.v-input {
  position: relative;

  &__errMsg {
    font-size: 14px;
    color: #fa5555;
    position: absolute;
    left: 0;
    bottom: -20px;
  }
}
</style>
