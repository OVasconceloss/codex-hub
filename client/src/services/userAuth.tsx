import axios from "axios"

export const setAccessToken = async () => {
    try {
        const response = await axios.post('http://localhost:8080/user/login', {
            email: 'teste@gmail.com',
            password: '123456'
        });

        return response.data.accessToken;
    } catch (accessError) {
        console.log(accessError);
        return;
    }
};