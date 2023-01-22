function memo(fn) {

    const cashe = {}

    return function (param) {
        if (cashe.hasOwnProperty(param) === false) {
            const result = fn(param)
            cashe[param] = result

            return result
        } else {
            return cashe[param]

        }
    }

}

const toUper = memo(function (str) {
    console.log("Run only once")
    return str.toUpperCase()
})

console.log(toUper("mehrab"))
// read from cashe
console.log(toUper("mehrab"))
console.log(toUper("mehrab"))
console.log(toUper("mehrab"))
console.log(toUper("mehrab"))
