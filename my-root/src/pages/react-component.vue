<script setup lang="ts">
import ReactWrapper from '../components/ReactWrapper.vue';
import ReactComponent from 'reactSubApp/ReactIndex';
</script>

<template>
    <ReactWrapper :component="ReactComponent" />
</template>