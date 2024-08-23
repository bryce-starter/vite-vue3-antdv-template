<script lang="ts" setup>
import { message as messageApi } from 'ant-design-vue'

const handleClick = () => {
  messageApi.success('Hello, world!')
}
</script>

<template>
  <main class="mx-auto h-screen max-w-2xl fc flex-col gap-4">
    <h1>It works</h1>
    <a-button @click="handleClick">
      Click me
    </a-button>
  </main>
</template>
