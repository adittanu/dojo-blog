<template>
    <h1>Home</h1>
    <p ref="p">My name {{ name }} and age {{ age }}</p>
    <button @click="handleClick">Click Me</button>
    <button @click="age++">Add 1 to age</button>
    <input type="text" v-model="name" />
</template>

<script>
import { ref } from "@vue/reactivity"
export default {
    name: "Home",
    setup() {
        console.log("setup")

        const p = ref(null)

        const name = ref("mario")
        const age = ref(30)

        const handleClick = () => {
            // p.value.classList.add("test")
            // p.value.textContent = "Hello, ninjas"
            name.value = "luigi"
            age.value = 35
        }
        return { name, age, handleClick, p }
    },
}
</script>

<style></style>
