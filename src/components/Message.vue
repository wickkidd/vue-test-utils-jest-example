<template>
  <h1> {{ msg || 'default message' }}</h1>
</template>

<script>
  export default {
    name: 'Message',
    props: [
      'msg'
    ]
  }
</script>
