<template lang="html">
<ViewContainer previous="Main" title="Invoice" subtitle="add new invoice">

  <ViewSection label="invoice data" sublabel="Basic invoice information">
    <InputContainer label="Invoice Number" v-model="model.number"></InputContainer>
    <InputContainer label="Customer" v-model="model.customer"></InputContainer>
    <InputContainer label="Message" v-model="model.message"></InputContainer>
    <InputContainer label="Reference" v-model="model.reference"></InputContainer>
  </ViewSection>
  <ViewSection label="invoice rows" sublabel="invoice content rows">
    <ControlButton slot="controls" tool="add" @click="showEditor" />
    <table>
      <tr>
        <th>description</th>
        <th>amount</th>
        <th>value</th>
        <th>total</th>
      </tr>
      <tr v-for="(row, index) in model.rows" :key="index">
        <td>{{ row.description }}</td>
        <td>{{ row.amount }}</td>
        <td>{{ row.value | currency }}</td>
        <td>{{ row.amount * row.value | currency }}</td>
      </tr>
    </table>

    <TotalDisplay slot="footer" :value="rows" />
  </ViewSection>


  <InvoiceRow slot="external" :visible="rowEditor.visible" :model="rowEditor.model" @close="clearEditor" @commit="addRow"/>
  <MainButton slot="toolbar" />
</ViewContainer>
</template>

<script>
import InvoiceRow from './InvoiceRow'

const EDITOR_INITIAL_STATE = {
  description: '',
  value: 0,
  total: 0,
  amount: 0
}

export default {
  components: {
    InvoiceRow
  },

  props: {
  },

  data () {
    return {
      dog: 0,
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
    addRow (row) {
      this.model.rows.push({...row})
    },

    clearEditor () {
      this.rowEditor.model = {
        ...EDITOR_INITIAL_STATE
      }
      this.rowEditor.visible = false
    },

    showEditor () {
      this.rowEditor.model = {
        ...EDITOR_INITIAL_STATE
      }
      this.rowEditor.visible = true
      console.log('kissa')
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
