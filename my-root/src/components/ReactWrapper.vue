<template>
    <div ref="reactRoot"></div>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref, onMounted, onBeforeUnmount } from 'vue';
  import ReactDOM from 'react-dom';
  import React from 'react';
  
  export default defineComponent({
    name: 'ReactWrapper',
    props: {
      component: {
        type: Function,
        required: true,
      },
    },
    setup(props) {
      const reactRoot = ref<HTMLElement | null>(null);
  
      onMounted(() => {
        if (reactRoot.value) {
          ReactDOM.render(React.createElement(props.component), reactRoot.value);
        }
      });
  
      onBeforeUnmount(() => {
        if (reactRoot.value) {
          ReactDOM.unmountComponentAtNode(reactRoot.value);
        }
      });
  
      return {
        reactRoot,
      };
    },
  });
  </script>