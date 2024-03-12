import { useEffect, useState } from "react";
import Footer from "../components/footer/footer";
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
    
        const sortedPosts = allposts.slice().sort((postA: Post, postB: Post) => {
            return new Date(postB.created_at).getTime() - new Date(postA.created_at).getTime();
        });
    
        setPosts(sortedPosts);
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
        <div className="w-full absolute bottom-0 flex items-center justify-center bg-zinc-900">
            <Footer />
        </div>
        </>
    );
};

export default Home;