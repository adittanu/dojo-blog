<template>
    <h1>Home</h1>
    <p ref="p">My name {{ name }} and age {{ age }}</p>
    <button @click="handleClick">Click Me</button>
</template>

<script>
import { ref } from "@vue/reactivity"
export default {
    name: "Home",
    setup() {
        console.log("setup")

        const p = ref(null)

        let name = "mario"
        let age = 30

        const handleClick = () => {
            console.log(p)
            p.value.classList.add("test")
            p.value.textContent = "Hello, ninjas"
        }
        return { name, age, handleClick, p }
    },
}
</script>

<style></style>
