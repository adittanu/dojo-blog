<template>
    <div class="home">
        <h1>Home</h1>
        <PostList v-if="showPosts" :posts="posts" />
        <button @click="showPosts = !showPosts">toggle posts</button>
        <button @click="posts.pop()">Delete a post</button>
    </div>
</template>

<script>
import PostList from "../components/PostList.vue"
import { computed, ref, watch, watchEffect } from "@vue/runtime-core"
export default {
    name: "Home",
    components: { PostList },
    setup() {
        const posts = ref([
            { title: "Welcome to the blog", body: "Lorem Ipsum fdas fkdsa; fdajf;da fjdklaf dhaufhd afhdao fafhadofdua fdaif dahfid hfudoahfafehwq fheuq fhufehq fqhf eqhf hfoqfh djafha ", id: 1 },
            { title: "Top 5 CSS", body: "Lorem Ipsum", id: 2 },
        ])
        const showPosts = ref(true)

        return { posts, showPosts }
    },
}
</script>

<style></style>
