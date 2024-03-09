import axios from "axios";

interface PostProps {
    postTitle: string,
    postContent: string,
}

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

export const createPost = async ({postTitle, postContent}: PostProps) => {
    const userId = sessionStorage.getItem('userId');
    const accessToken = sessionStorage.getItem('accessToken');
    const userNickname = sessionStorage.getItem('userNickname');

    try {
        await axios.post('http://localhost:8080/post', {
            title: postTitle,
            text: postContent,
            userId: userId,
            nickname: userNickname,
        }, {
            headers: {
                'Authorization': `Bearer ${accessToken}`
            },
        });

        return true;
    } catch (error) {
        console.log(error);
        return false;
    }
}

export const getPostData = async (id: string) => {
    const accessToken = sessionStorage.getItem('accessToken');

    try {
        const response = await axios.get(`http://localhost:8080/post/${id}`, {
            headers: {
                'Authorization': `Bearer ${accessToken}`
            },
        });

        return response;
    } catch (error) {
        console.log(error);
        return false;
    }
}