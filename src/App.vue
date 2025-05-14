<template>
  <nav>
    <router-link to="/1">Opción 1</router-link>
    <router-link to="/2">Opción 2</router-link>
    <router-link to="/3">Opción 3</router-link>
  </nav>
  <router-view />
</template>

<script setup>
// No es necesario código aquí para el menú estático
</script>

<style scoped>
nav {
  display: flex;
  gap: 1rem;
  background: #f5f5f5;
  padding: 1rem;
}
router-link {
  text-decoration: none;
  color: #333;
}
router-link.router-link-active {
  font-weight: bold;
}
</style>
