import MDEditor from "@uiw/react-md-editor";
import { Dispatch, SetStateAction } from "react";

interface EditorProps {
    error: boolean;
    postContent: string;
    setPostContent: Dispatch<SetStateAction<string>>;
}

export const PostEditor = ({ setPostContent, postContent, error }: EditorProps) => {
    const handleChange = (value?: string | undefined) => setPostContent(value ?? '');

    return (
        <>
            <div className="flex flex-col">
                <label htmlFor="content" className="mb-1 dark:text-zinc-100">Post Content</label>
                <MDEditor 
                    value={postContent} 
                    data-color-mode="light"
                    onChange={handleChange} 
                    className={`w-[50rem] min-h-[20rem] max-h-[20rem] border-2 mb-10 ${error && (postContent === "") && "border-red-500"}`}
                />
            </div>
        </>
    );
}