oneTwoThree = [1,2,3]

result = oneTwoThree.map((v) => {
    return v+1;
})
// console.log(result)

result = oneTwoThree.reduce((acc, cur) => {
    acc.push(cur % 2 ? '홀수' : '짝수')
    return acc
}, [])

// console.log(result);

result = oneTwoThree.reduce((acc, cur) => {
    if(cur % 2) acc.push(cur) // 숫자인 경우 결과값이 0이 아닌 경우는 모두 true, 0이면 false
    return acc;
}, [])

// console.log(result)

const promiseFactory = (time) => {
    return new Promise((resolve, reject) => {
        // console.log(time)
        setTimeout(resolve, time)
    })
}

[1000, 2000, 3000, 4000].reduce((acc, cur) => {
    return acc.then(() => promiseFactory(cur))
}, Promise.resolve())