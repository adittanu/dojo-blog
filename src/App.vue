<template>
    <Navbar></Navbar>
    <router-view />
</template>

<script>
import Navbar from "./components/Navbar.vue"

export default { components: { Navbar } }
</script>

<style>
#app {
    font-family: Arial, Helvetica, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
}

</style>
