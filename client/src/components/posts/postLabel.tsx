import { Link } from "react-router-dom";

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
    return (
        <div className="w-[50rem] p-5 my-2 bg-zinc-100 rounded-md scale-100 transition ease-linear hover:scale-105">
            <Link to={`posts/${post.userId}`}>
                <h1 className="hover:underline">{ post.title }</h1>
            </Link>
            <div className="w-48 flex items-center justify-between">
                <h3 className="text-sm">{ post.userNickname }</h3>
                <h3 className="text-sm">-</h3>
                <h3 className="text-sm">15 horas atrás</h3>
            </div>
        </div>
    );
};