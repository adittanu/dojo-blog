<template>
    <div class="home">
        <h1>Home</h1>
        <input type="text" v-model="search" />
        <p>Search term - {{ search }}</p>
        <div v-for="name in matchingNames" :key="name">
            <p>{{ name }}</p>
        </div>
        <button @click="handleClick">Stop watching</button>
    </div>
</template>

<script>
import { computed, ref, watch, watchEffect } from "@vue/runtime-core"
export default {
    name: "Home",
    setup() {
        const names = ref(["mario", "yoshi", "luigi", "toad"])
        const search = ref("")

        const stopWatch = watch(search, () => {
            console.log("watch function run")
        })

        const stopEffect = watchEffect(() => console.log(search.value))

        const matchingNames = computed(() => {
            return names.value.filter((name) => name.includes(search.value))
        })

        const handleClick = () => {
            stopWatch()
            stopEffect()
        }

        return { names, search, matchingNames, handleClick }
    },
}
</script>

<style></style>
