<script setup lang="ts">

defineProps<{
  toggleButton: boolean;
  deviceType: 'mobile' | 'tablet' | 'desktop'
}>();
    
</script>

<template>
    <div :class="{
    'sm:ml-0': deviceType === 'mobile' && !toggleButton, 
    'ml-64': deviceType === 'desktop' && !toggleButton,
    'tablet-class': deviceType === 'tablet' && !toggleButton }" 
    class="p-4 bg-gray-100 dark:bg-gray-800 h-screen">
      <div class="card rounded-md p-4 bg-white dark:border dark:border-white mt-14 dark:bg-gray-800">
        <div class="bg-white dark:bg-gray-800">
          <router-view />
        </div>
      </div>
   </div>
</template>

  
<style scoped>
  /* Additional styles can be added here */
</style>