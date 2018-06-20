<template>
  <div id="app">
    <MessageToggle />
    <List :items="items" @addItem="addItem" />
    <div>{{serverMessage}}</div>
    <button @click.prevent="getMessage">Get server message</button>
  </div>
</template>

<script>
  import 'babel-polyfill'
  import axios from 'axios'
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
        items: ['list item 1', 'list item 2'],
        serverMessage: ''
      }
    },
    methods: {
      addItem(item) {
        this.items.push(item)
      },
      async getMessage() {
        let response = await axios.get('/message')

        this.serverMessage = response.data
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
