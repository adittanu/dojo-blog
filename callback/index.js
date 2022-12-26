import { greet as greetSay } from "./ninja.js"
import ninjasData from "./ninja.js"

const ninjas = [
    { name: "shaun", belt: "black" },
    { name: "mario", belt: "orange" },
    { name: "yoshi", belt: "orange" },
    { name: "luigi", belt: "orange" },
]

// filter method
const filteredArray = ninjas.filter((ninja) => {
    return ninja.name !== "luigi"
})

// map method
const names = ninjas.map((ninja) => {
    return ninja.name + ".js"
})

const ninjaArr = ["shaun", "mario", "peach"]
const blog = { title: "new blog", author: "bowser" }

// console.log(...ninjaArr)

const idBlog = { ...blog, id: 1 }

const name = "shaun"
const job = "developer"

const text = `Hi my name is ${name} and I am a ${job}`

function greetOne() {
    console.log("hello")
}

const greetTwo = () => {
    console.log("hai")
}

// greetOne()
// greetTwo()

const getTodo = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos/1")
    const data = await res.json()
    console.log(data)
}

getTodo()
