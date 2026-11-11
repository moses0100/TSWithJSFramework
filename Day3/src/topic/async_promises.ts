export const asyncpromises = () => {
    // ตัวอย่างการสร้างฟังก์ชันที่มีการคืนค่าแบบ Promise
    function simulateNetworkRequest(shouldSuccess: boolean): Promise<string> {
        // Pending คือสถานะที่ยังไม่สำเร็จ
        // เมื่อเราสร้าง Promise ขึ้นมา มันจะอยู่ในสถานะ Pending ก่อน
        console.log('เริ่มต้นการทำงาน Promise -- สถานะ Pending')

        return new Promise<string>((resolve, reject) => {
            setTimeout(() => {
                if (shouldSuccess) {
                    // เมื่อเวลา 2 วินาทีผ่านไปแล้ว จะเข้าสู่สถานะ Resolved
                    console.log('การทำงานสำเร็จ - สถานะ Resolved')
                    resolve('สำเร็จได้ข้อมูลกลับมาแล้ว')
                } else {
                    // เมื่อเวลา 2 วินาทีผ่านไปแล้ว จะเข้าสู่สถานะ Rejected
                    console.log('การทำงานไม่สำเร็จ - สถานะ Rejected')
                    reject(new Error('ไม่สามารถเชื่อมต่อเซิร์ฟเวอร์ได้'))
                }
            }, 2000)
        })
    }

    // // ตัวอย่างการทำงานกับ Promise แบบสถานะสำเร็จ (Resolved)
    // simulateNetworkRequest(true)

    // // ตัวอย่างการทำงานกับ Promise แบบสถานะไม่สำเร็จ (Rejected)
    // simulateNetworkRequest(false)
    //     .catch((error: Error) => console.error(error.message))

    // ตัวอย่างการใช้แบบ then และ catch
    function promiseChainExample(): void {
        simulateNetworkRequest(true)
            .then((result) => {
                console.log('ข้อมูลที่ได้รับ:', result)
            })
            .then(() => {
                console.log('ทำงานต่อไปจากการทำงานแรก')
            })
            .catch((error: Error) => {
                console.error('เกิดข้อผิดพลาด:', error)
            })
            .finally(() => {
                console.log('จบการทำงาน')
            })
    }

    promiseChainExample()
}