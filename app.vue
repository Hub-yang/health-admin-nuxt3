<script setup lang="ts">
import { appName } from '~/constants'

useHead({
  title: appName,
})
</script>

<template>
  <nuxt-page />
</template>

<style>
html.dark {
  background: #222;
  color: white;
}
</style>
