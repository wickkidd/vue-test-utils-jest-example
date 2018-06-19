<template>
  <div>
    <ul>
      <li :key="item" v-for="item in items">
        {{ item }}
      </li>
    </ul>

    <AddItemButton @addItem="$emit('addItem', $event)"></AddItemButton>
  </div>
</template>

<script>
  import AddItemButton from '@/components/AddItemButton.vue'

  export default {
    name: 'List',
    components: {AddItemButton},
    props: [
      'items'
    ]
  }
</script>
