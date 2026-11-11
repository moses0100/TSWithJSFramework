export const interfaceandtype = ()=>{
    //สร้าง interface ใน type
    interface User{
        name: string
        age: number
    }
    //Merge
    interface User{
        gender : string
    }



    //สร้าง object จาก interface
    const user: User={
        name:"John",
        age:30,
        gender:'Male'
    }

    //การสืบทอด
    interface Admin extends User{
        isAdmin: boolean
    }

    console.log(user.name,user.gender,user.age)

    const admin: Admin={
        name:"jaoo",
        age:80,
        gender:'Female',
        isAdmin: true
    }
    console.log(admin.name,admin.age,admin.gender,admin.isAdmin)

    //ตัวอย่างการสร้าง type
    type Person={
        name:string
        age:number
    }
    //Union Type
    type Role = Person &{isAdmin:boolean}

    const person: Role={
        name:"John",
        age:20,
        isAdmin:true
    }
    console.log(person.name,person.age,person.isAdmin)
}