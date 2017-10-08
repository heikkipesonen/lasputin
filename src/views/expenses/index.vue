<template lang="html">
<ViewContainer previous="Main" title="Expenses" subtitle="Expenses lately">
  <ViewSection>
    <table>
      <tr>
        <th>description</th>
        <th class="fit-content">sum</th>
      </tr>
      <tr v-for="(row, index) in rows" :key="index">
        <td>{{ row.description }}</td>
        <td class="fit-content">{{ row.withVat | currency }}</td>
      </tr>
    </table>

  </ViewSection>

  <MainButton slot="toolbar" @click="showEditor" />
  <ExpenseRow slot="external" :visible="rowEditor.visible" :model="rowEditor.model" @close="clearEditor" @commit="addRow"/>
</ViewContainer>
</template>

<script>
import { withVat } from '@/helpers/vat'
import ExpenseRow from './ExpenseRow'

const EDITOR_INITIAL_STATE = {
  description: '',
  sum: 0,
  vatBase: 24
}

export default {
  components: {
    ExpenseRow
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
          ...row,
          withVat: withVat(row.sum, row.vatBase),
          value: row.sum,
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
