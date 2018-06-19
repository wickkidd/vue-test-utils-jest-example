<template>
  <div id="app">
    <MessageToggle />
    <List :items="items" @addItem="addItem" />
  </div>
</template>

<script>
  import MessageToggle from '@/components/MessageToggle.vue'
  import List from '@/components/List.vue'

  export default {
    name: 'App',
    components: {
      MessageToggle,
      List
    },
    data() {
      return {
        items: ['list item 1', 'list item 2']
      }
    },
    methods: {
      addItem(item) {
        this.items.push(item)
      }
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    color: #2c3e50;
  }
</style>
