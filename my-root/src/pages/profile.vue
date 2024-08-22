<script setup lang="ts">
import {ref , onMounted} from 'vue'

const componentLoaded = ref(false);
const MyComponent = ref(null);

const loadSubAppComponent = async () => {
  const { default: Component } = await import('subApp/IndexPage');
  MyComponent.value = Component;
  componentLoaded.value = true;
};

onMounted(() => {
  loadSubAppComponent();
});


</script>
<template>
    <h2>this is profile view</h2>
    <MyComponent v-if="componentLoaded" />
     <ProfilePage />
</template>