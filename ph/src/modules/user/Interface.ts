// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
// Step 1 ==> Create Interface
// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩

interface IUser {
    id: string;
    role: 'student' | 'teacher';
    password: string;
    name: {
        fastName: string;
        laseName: string;
    };
    gender: "male" | "female";
    dateOfBirth?: string;           // 🟢 optional
    email: string;
    contact: string;
    emergencyContact?: string;      // 🟢 optional
    presentAddress?: string;        // 🟢 optional
    permanentAddress: string;
}

export default IUser;