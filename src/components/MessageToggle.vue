<template>
  <div>
    <message :msg="msg"></message>
    <button id="toggle-message" @click="toggleMessage">
      Change message
    </button>
  </div>
</template>

<script>
  import Message from '@/components/Message.vue'

  export default {
    name: 'MessageToggle',
    components: {
      Message
    },
    data() {
      return {
        msg: null
      }
    },
    methods: {
      toggleMessage() {
        this.msg = this.msg === 'message' ? 'toggled message' : 'message'
      }
    }
  }
</script>
