import { useEffect, useState } from "react";
import { Header } from "../components/header/header";
import { listAllPosts } from "../services/callPosts";
import { PostLabel } from "../components/posts/postLabel";

interface Post {
    id: string,
    title: string,
    text: string,
    userId: string,
    userNickname: string,
    created_at: Date,
    updated_at: Date,
    post: Post
}

const Home: React.FC = () => {
    const [posts, setPosts] = useState<Post[]>([]);

    const handleSetPost = async () => {
        const allposts = await listAllPosts();
        setPosts(allposts);
    }

    useEffect(() => {
        handleSetPost();
    }, []);

    return (
        <>
        <Header />
        <main className="p-10">
            <section className="flex flex-col items-center">
                {posts?.map((post, index) => {
                    return (
                        <PostLabel key={index} post={post} />
                    )
                })}
            </section>
        </main>
        </>
    );
};

export default Home;