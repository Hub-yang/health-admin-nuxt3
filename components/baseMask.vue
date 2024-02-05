<!-- <script setup lang='ts'>
import { useStorage } from '@vueuse/core'

onMounted(() => {


  
  const username=useStorage("username")
  console.log('username :>>> ', username.value)
})

const startStyleShow = ref(true)
</script>

<template>
  <div v-if="startStyleShow">
    <h1 @click.once="startStyleShow = false">
      Hello,{{ username}}
    </h1>
  </div>
</template>
   -->