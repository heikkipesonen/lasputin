<template lang="html">
<ViewContainer previous="Main" title="Travel" subtitle="Travel expenses">

  <TravelRow slot="external" :visible="rowEditor.visible" :model="rowEditor.model" @close="clearEditor" @commit="addRow"/>
  <MainButton slot="toolbar" @click="createNewRow"/>
</ViewContainer>
</template>

<script>

const EDITOR_INITIAL_STATE = {
  description: '',
  start_time: null,
  end_time: null,
  start: null,
  end: null
}

import TravelRow from './TravelRow'

export default {
  components: {
    TravelRow
  },

  props: {
  },

  data () {
    return {
      model: {
        description: '',
        rows: []
      },

      rowEditor: {
        model: {
          ...EDITOR_INITIAL_STATE
        },
        visible: false
      }
    }
  },

  computed: {
    rows () {
      return this.model.rows.map((row) => {
        return {
          value: row.amount * row.value,
          vatBase: row.vatBase
        }
      })
    }
  },

  methods: {
    clearEditor () {
      this.rowEditor.model = {
        ...EDITOR_INITIAL_STATE
      }
      this.rowEditor.visible = false
    },

    addRow (row) {
      this.model.rows.push(...row)
    },

    createNewRow () {
      this.rowEditor.model = {
        ...EDITOR_INITIAL_STATE
      }
      this.rowEditor.visible = true
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
