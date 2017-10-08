<template lang="html">
<SidePane title="New Expense" subtitle="add new expense item" v-model="_visible">
  <InputContainer label="description" v-model="model.description"></InputContainer>
  <InputContainer label="description" v-model="model.description"></InputContainer>
  <InputContainer label="description" v-model="model.description"></InputContainer>
  <InputContainer label="description" v-model="model.description"></InputContainer>
  <InputContainer label="description" v-model="model.description"></InputContainer>
  <InputContainer label="description" v-model="model.description"></InputContainer>
  <InputContainer label="description" v-model="model.description"></InputContainer>
  <InputContainer label="description" v-model="model.description"></InputContainer>
  <InputContainer label="description" v-model="model.description"></InputContainer>
  <InputContainer label="description" v-model="model.description"></InputContainer>
  <TaxedValueInput
    label="sum"
    v-model="model.sum"
    :vatBase="model.vatBase"
    :vat="true">
  </TaxedValueInput>
  <NumberInput label="vat base" :decimals="0" v-model="model.vatBase" :max="100" :min="0"></NumberInput>

  <MainButton slot="toolbar" @click="commit"/>
</SidePane>
</template>

<script>

const INITIAL_STATE = {
  description: '',
  sum: 0,
  vatBase: 24
}

export default {
  props: {
    visible: {
      type: Boolean,
      default: false
    },

    model: {
      type: Object,
      default () {
        return {
          ...INITIAL_STATE
        }
      }
    }
  },

  computed: {
    _visible: {
      get () {
        return this.visible
      },

      set (value) {
        if (!value) {
          this.$emit('close')
        }
      }
    }
  },

  methods: {
    commit () {
      this.$emit('commit', this.model)
      this._visible = false
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
