const ninjas = ["shaun", "yoshi", "mario", "peach"]

const formatNinjas = () => {
    let val = ""
    ninjas.forEach((ninja) => {
        val += ninja + ", "
    })
}

const greet = () => {
    console.log(ninjas[0] + " says hallo")
}

export { formatNinjas, greet }
export default ninjas
