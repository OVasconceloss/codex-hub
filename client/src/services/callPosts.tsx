import axios from "axios";

export const listAllPosts = async () => {
    const accessToken = sessionStorage.getItem('accessToken');

    try {
        const allPosts = await axios.get('http://localhost:8080/posts', {
            headers: {
                'Authorization': `Bearer ${accessToken}`
            }
        })
        return allPosts.data;
    } catch (err) {
        console.log(err)
        return [];
    }
};
