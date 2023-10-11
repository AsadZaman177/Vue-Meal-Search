<template>
    <Navbar/>
    <router-view />
  </template>
  
  <script setup>
      import Navbar from './Navbar.vue';
  
      components: {
        Navbar
      }
  </script>
  
  <style scoped>
  
  </style>
  