<script setup lang="ts">
import router from '../router/index';


const routes = router.options.routes
console.log('ini routes',routes)

defineProps<{
  toggleButton: boolean;
  deviceType: 'mobile' | 'tablet' | 'desktop'
}>();


    
</script>

<template>

<div v-if="deviceType === 'mobile' && !toggleButton !== toggleButton" class="fixed bottom-0">
      <aside v-if="!toggleButton" class="fixed top-16 inset-0 w-full z-50 bg-black bg-opacity-50 flex transition-transform -translate-full">
         <div class="w-1/2 bg-white dark:bg-gray-800 p-4">
            <ul class="space-y-2 font-medium">
               <li v-for="(route, index) in routes" :key="index">
                  <router-link :to="route.path" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                     <i :class="`mdi ${route.meta?.icon} text-gray-500 text-xl dark:text-gray-400`"></i>
                     <span class="ms-3">{{ route.name }}</span>
                  </router-link>
               </li>
            </ul>
         </div>
      </aside>
  </div>

  <div v-else-if="deviceType === 'tablet' && !toggleButton !== toggleButton" class="fixed bottom-0">
      <aside v-if="!toggleButton" class="fixed top-16 inset-0 w-full z-50 bg-black bg-opacity-50 flex transition-transform -translate-full">
         <div class="w-1/2 bg-white dark:bg-gray-800 p-4">
            <ul class="space-y-2 font-medium">
               <li v-for="(route, index) in routes" :key="index">
                  <router-link :to="route.path" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                     <i :class="`mdi ${route.meta?.icon} text-gray-500 text-xl dark:text-gray-400`"></i>
                     <span class="ms-3">{{ route.name }}</span>
                  </router-link>
               </li>
            </ul>
         </div>
      </aside>
  </div>
  
  <div v-else="deviceType === 'desktop' && !toggleButton !== toggleButton" class="fixed bottom-0">
      <aside v-if="!toggleButton" class="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700">
            <div class="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
               <ul class="space-y-2 font-medium">
                  <li v-for="(route, index) in routes" :key="index">
                     <router-link :to="route.path" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                        <i :class="`mdi ${route.meta?.icon} text-gray-500 text-xl dark:text-gray-400`"></i>
                        <span class="ms-2">{{ route.name }}</span>
                     </router-link>
                  </li>
               </ul>
            </div>
      </aside>
  </div>
   
</template>
  
  
<style scoped>
  /* Additional styles can be added here */
</style>