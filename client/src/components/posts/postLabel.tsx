import { Link } from "react-router-dom";
import { formatDistanceToNow } from 'date-fns';

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

interface LabelPost {
    post: Post
}

export const PostLabel: React.FC<LabelPost> = ({ post }) => {
    const createdTime = formatDistanceToNow(new Date(post.updated_at), { addSuffix: true });

    return (
        <div className="w-[60rem] p-3 my-2 bg-zinc-100 rounded-md scale-100 
        transition ease-linear hover:scale-105 dark:bg-zinc-800">
            <Link to={`posts/${post.userId}`}>
                <h1 className="text-xl dark:text-zinc-100 hover:underline">{ post.title }</h1>
            </Link>
            <div className="w-72 mt-2 flex items-center space-x-2">
                <h3 className="text-md dark:text-zinc-100">{ post.userNickname }</h3>
                <h3 className="text-md dark:text-zinc-100">|</h3>
                <h3 className="text-md dark:text-zinc-100">{ createdTime }</h3>
            </div>
        </div>
    );
};