
export  const variabletype = () =>{
// ชนิดข้อมูลใน TypeScript มีทั้งหมด 3 กลุ่ม ได้แก่
// 1. Primitive Type
// 2. Advanced Type
// 3. Special Type

// 1. Primitive Type
// 1.1. number
const age: number = 30
const pi: number = 3.14
const price: number = 100.50
const score: number = -35

console.log(age)
console.log(pi)
console.log(price)
console.log(score)

// 1.2. string
const fname: string = "John"
const address: string = 'Bangkok'
const message: string = `Hello, ${fname}`

console.log(fname)
console.log(address)
console.log(message)

// 1.3. boolean
const isAdult: boolean = true
const isStudent: boolean = false

console.log(isAdult)
console.log(isStudent)

// 2. Advanced Type
//2.1 array
const number:number[]=[1,2,3,4,5]
const name: string[]=['jo','dd','dwaa']
const people :Array <String>=['dddd','wwwww','qqqqqq']
const isAdults:boolean[]=[true,false,true]

// console.log(number[4])
// console.log(name[1])
// console.log(people[2])
// console.log(isAdults[1])

//2.2 Tuple
const person: [string, number] = ['John', 30]

// console.log(person[0])
// console.log(person[1])

//2.3 Enum
enum Color {
    Red,
    Green,
    Blue
}

const color: Color = Color.Blue

// console.log(color)
//2.4 Object
    const user: {name: string, age:number}[]=[
        {
            name:'LLL',
            age:20
        },
        {
         name:'GGG',
        age:22   
        }
        
    ]

    console.log(user[0].name,user[0].age)
    

    // 3. Special Type
    // 3.1. any
    // 3.2. void
    // 3.3. never
    // 3.4. unknown

    // 3.1. any
    let data: any = 10
    data = 'Hello'
    data = true

    console.log(data)

    // 3.2. void
    const greet = (): void => {
        console.log('Hello')
    }

    greet()

    // 3.3. never
    const error = (message: string): never => {
        throw new Error(message)
    }

    // 3.4. unknown
    let userInput: unknown
    let userName: string

    userInput = 10
    userInput = 'Hello'

    typeof userInput === 'string'
        ? userName = userInput
        : error('Invalid input')

}
