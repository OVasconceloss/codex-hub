import axios from "axios"

interface UserProps {
    email: string,
    fullName: string,
    nickName: string,
    password: string,
}

export const createUserService = async ({fullName, nickName, email, password}: UserProps) => {
    try {
        await axios.post('http://localhost:8080/register', {
            fullname: fullName,
            nickname: nickName,
            email: email,
            password: password
        });

        return true;
    } catch (error) {
        console.log(error);
        return false;
    }
}