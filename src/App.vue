<script lang="ts" setup>
</script>

<template>
  <a-config-provider
    :theme="{
      token: {
        colorPrimary: '#00b96b',
      },
    }"
  >
    <RouterView />
  </a-config-provider>
</template>
