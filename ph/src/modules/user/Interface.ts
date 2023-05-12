// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
// Step 1 ==> Create Interface
// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩


export interface IUser {
    id: string;
    role: 'student' | 'teacher';
    password: string;
    name: {
        fastName: string;
        lastName: string;
    };
    gender: "male" | "female";
    dateOfBirth?: string;           // 🟢 optional
    email: string;
    contact: string;
    emergencyContact?: string;      // 🟢 optional
    presentAddress?: string;        // 🟢 optional
    permanentAddress: string;
}


// for creating custom instance method()
export interface IFullName {
    getFullName(): string;
}