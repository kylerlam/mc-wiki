// 普通函数
function Normal(a: number, b: number){
    return a+b
}

// 箭头函数
const Arrows = (a: number, b: number) => (a+b)

console.log(Normal(3, 7))
console.log(Arrows(3, 7))