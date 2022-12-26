import { ref } from "@vue/runtime-core"

const useTags = (posts) => {
    const tags = ref([])
    const tagSet = new Set()

    posts.forEach((item) => {
        item.tags.forEach((item) => tagSet.add(item))
    })

    tags.value = [...tagSet]

    return { tags }
}

export default useTags
