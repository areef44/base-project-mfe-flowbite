<script setup lang="ts">
import { ref,onMounted,onUnmounted } from 'vue';
import AppTopbar from './AppTopbar.vue';
import AppSidebar from './AppSidebar.vue'
import AppContent from './AppContent.vue'
import { initFlowbite } from 'flowbite'

const toggleMobile = () => {
  toggleButton.value = !toggleButton.value;
};

// Determine device type based on screen width
const toggleButton = ref(false);

const deviceType = ref<'mobile' | 'tablet' | 'desktop'>('desktop');

const updateDeviceType = () => {
  const width = window.innerWidth;
  if (width < 640) {
    deviceType.value = 'mobile';
  } else if (width >= 640 && width < 1024) {
    deviceType.value = 'tablet';
  } else {
    deviceType.value = 'desktop';
  }
};

onMounted(() => {
    updateDeviceType(); // Check device type on initial load
    window.addEventListener('resize', updateDeviceType);
    initFlowbite()
});

onUnmounted(() => {
  window.removeEventListener('resize', updateDeviceType);
});
</script>

<template>
<AppTopbar :toggleMobile="toggleMobile"/>
<AppSidebar :toggleButton="toggleButton" :deviceType="deviceType"/>
<AppContent :toggleButton="toggleButton" :deviceType="deviceType"/>
</template>