<template>
  <NuxtLayout>
    <!-- https://v3.nuxtjs.org/api/components/nuxt-loading-indicator#nuxtloadingindicator -->
    <NuxtLoadingIndicator/>
    <NuxtPage/>
  </NuxtLayout>
</template>
<script setup>
  const config = useAppConfig()
  useHead({
    // https://v3.nuxtjs.org/getting-started/seo-meta/#title-templates
    titleTemplate: (chunk) => `${chunk ? chunk + ' | ' : ''}${config.name}`,
  })
</script>
