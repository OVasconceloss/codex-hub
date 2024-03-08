import axios from "axios"

interface UserProps {
    email: string,
    password: string,
}

export const setAccessToken = async ({ email, password, }: UserProps) => {
    try {
        const response = await axios.post('http://localhost:8080/user/login', {
            email: email,
            password: password
        });

        const accessToken = response.data.accessToken;
        sessionStorage.setItem('accessToken', accessToken);
        
        return accessToken;
    } catch (accessError) {
        return false;
    }
};

export const getAcessToken = () => {
    return sessionStorage.getItem('accessToken');
}

export const clearAccessToken = () => {
    window.location.reload();
    return sessionStorage.removeItem('accessToken');
}