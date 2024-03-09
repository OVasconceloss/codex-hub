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
        const userId = response.data.finduser.id;
        const accessToken = response.data.accessToken;
        const userNickname = response.data.finduser.nickname;

        sessionStorage.setItem('userId', userId);
        sessionStorage.setItem('accessToken', accessToken);
        sessionStorage.setItem('userNickname', userNickname);
        
        return accessToken;
    } catch (accessError) {
        console.log(accessError);
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