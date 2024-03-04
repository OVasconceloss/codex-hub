import axios from "axios"

interface UserProps {
    email: string,
    password: string
}

export const setAccessToken = async ({ email, password }: UserProps) => {
    try {
        const response = await axios.post('http://localhost:8080/user/login', {
            email: email,
            password: password
        });

        const accessToken = response.data.accessToken;
        
        return accessToken;
    } catch (accessError) {
        console.log(accessError);
        return;
    }
};