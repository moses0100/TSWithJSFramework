

export const functiontype = () =>{
    //arrow function & fat arrow
    const greet =(name:string,title?:string):string=>{
        return `Hello, ${title || ''} ${name}`
    }
    // console.log(greet("John"))
    // console.log(greet('John','Mr.'))

    // ฟังก์ชันรับ parameter แบบ rest
    const sum = (...number: number[]): number => {
        return number.reduce((prev, current) => prev + current, 0)
    }

    // console.log(sum(1, 2, 3, 4, 5))

    // เริ่มจาก Overload Signature
    function process(x: number): number
    function process(x: string): string
    function process(x: boolean, y: number): boolean

    // ตามด้วย Implementation Signature
    function process(
        x: number | string | boolean,
        y?: number
    ): number | string | boolean {
        if (typeof x === "number") {
            return x * 2
        }
        if (typeof x === "string") {
            return x + x
        }
        if (typeof x === "boolean" && typeof y === "number") {
            return x === true ? x : y
        }

        return x
    }

    console.log(process(5)) // 10
    console.log(process("hello")) // hellohello
    console.log(process(true, 1)) // 1
}