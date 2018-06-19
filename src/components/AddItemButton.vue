<template>
  <div>
    <input type="text" v-model="itemName">
    <button @click="addItem">
      Add Item
    </button>
  </div>
</template>

<script>
  export default {
    name: 'AddItemButton',
    data() {
      return {
        itemName: ''
      }
    },
    methods: {
      addItem() {
        this.$emit('addItem', this.itemName)
      }
    }
  }
</script>
