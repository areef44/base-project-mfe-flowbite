<script setup lang="ts">

import {ref , onMounted} from 'vue'

const componentLoaded = ref(false);
const MyComponent = ref(null);

const loadSubAppComponent = async () => {
  const { default: Component } = await import('subApp/ProfilePage');
  MyComponent.value = Component;
  componentLoaded.value = true;
};

onMounted(() => {
  loadSubAppComponent();
});

</script>
<template>
    <!-- <ProfilePage />
      -->
      <MyComponent v-if="componentLoaded" />
</template>


