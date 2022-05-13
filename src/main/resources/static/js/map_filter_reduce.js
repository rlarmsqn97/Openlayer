// map()
const numbers = [1,2,3,4,5]
const numbersMap = numbers.map(val => val * 2)

// reduce() = map()
let numbersReduce = numbers.reduce((acc, cur) => {
    acc.push(cur * 2)
    return acc;
}, [])

// filter()
const fruits = ['Apple', 'Banana', 'Lemon', 'Watermelon']
const fruitsFilter = fruits.filter(word => word.length > 5)

// reduce() = filter()
const fruitsReduce = fruits.reduce((acc,cur) => {
    if(cur.length > 5){
        acc.push(cur)
    }
    return acc
}, [])

