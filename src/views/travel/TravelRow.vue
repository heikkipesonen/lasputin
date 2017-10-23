<template lang="html">
<SidePane previous="Travel" title="Travel row" subtitle="add new travel expense" v-model="_visible">
  <InputContainer label="description" v-model="model.description"></InputContainer>
  <div class="row">
    <div class="col-6">
      <NumberInput label="from" :decimals="0" v-model="model.start_time"></NumberInput>
    </div>
    <div class="col-6">
      <NumberInput label="to" :decimals="0" v-model="model.end_time"></NumberInput>
    </div>
  </div>
  <div class="row">
    <div class="col-6">
      <NumberInput label="from" :decimals="0" v-model="model.start" unit="km"></NumberInput>
    </div>
    <div class="col-6">
      <NumberInput label="to" :decimals="0" v-model="model.end" unit="km"></NumberInput>
    </div>
  </div>
  <div class="row">
    <div class="col-12 layout-column text-right">
      <span>{{ distance }}&nbsp;km</span>
      <h4>{{ value | currency }}</h4>
    </div>
  </div>
  <div class="row">
    <div class="col-12">

    </div>
  </div>

  <MainButton slot="toolbar" @click="commit"/>
</SidePane>
</template>

<script>

const INITIAL_STATE = {
  description: '',
  start_time: null,
  end_time: null,
  start: null,
  end: null
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

  data () {
    return {
      unitValue: 0.5
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
    },

    distance () {
      return this.model.end - this.model.start
    },

    value () {
      return this.distance * this.unitValue
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
