import React, { useEffect, useState } from "react";
import Footer from "../../components/footer/footer";
import { Link, useNavigate } from "react-router-dom";
import { createPost } from "../../services/callPosts";
import { Header } from "../../components/header/header";

const CreatePost: React.FC = () => {
    const navigate = useNavigate();
    const [postTitle, setPostTitle] = useState('');
    const [postContent, setPostContent] = useState('');
    const [error, setError] = useState<boolean>(false);
    const [errorMessage, setErrorMessage] = useState('');

    const validateInput = () => {
        if (postTitle == "" && postContent == "") {
            setError(true);
            setErrorMessage("The fields are empty");
            return false; 
        }

        if (postTitle == "") {
            setError(true);
            setErrorMessage("The title is empty");
            return false; 
        }

        if (postContent == "") {
            setError(true);
            setErrorMessage("The content is empty");
            return false; 
        }

        return true;
    }

    const handleCreatePost = async () => {
        if (validateInput()) {
            const success = await createPost({postTitle, postContent});

            if (!success) {
                setError(true);
                setErrorMessage("Fail");
            } else {
                navigate('/explorer');
            }
        }
    };

    useEffect(() => {
        if (error) {
            setTimeout(() => {
                setError(false);
            }, 2500);
        }
    }, [error]);

    return (
        <>
        <Header />
        <main>
            <div className="flex flex-col items-center justify-center mt-8">
                <div className="flex flex-col w-[50rem] p-5">
                    <div className="w-full flex flex-row space-x-4">
                        <div className="w-full flex flex-col">
                            <label htmlFor="title" className="mb-1 dark:text-zinc-100">Post Title</label>
                            <input 
                                type="text"
                                name="title"
                                onChange={(event) => setPostTitle(event.target.value)}
                                className={`w-[50rem] mb-10 p-2 outline-none border-2 rounded-md
                                transition ease-linear focus:border-zinc-900 dark:focus:border-indigo-500
                                ${error && (postTitle === "") && "border-red-500"}`}
                            />
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="content" className="mb-1 dark:text-zinc-100">Post Content</label>
                        <textarea 
                            name="content"
                            onChange={(event) => setPostContent(event.target.value)} 
                            className={`w-[50rem] h-72 min-h-72 max-h-72 mb-10 p-2 outline-none border-2 rounded-md
                            transition ease-linear focus:border-zinc-900 dark:focus:border-indigo-500
                            ${error && (postContent === "") && "border-red-500"}`}>
                        </textarea>
                    </div>
                    <div className="w-[50rem] flex items-end justify-end space-x-5">
                        <Link to={'/explorer'}>
                            <button className="w-[10rem] px-5 py-2 text-zinc-900 text-center bg-zinc-300 rounded-sm dark:bg-red-500 dark:text-zinc-100">Cancel</button>
                        </Link>
                        <button
                            onClick={handleCreatePost} 
                            className="w-[10rem] px-5 py-2 text-zinc-100 text-center bg-indigo-500 rounded-sm">Create Post</button>
                    </div>
                </div>
            </div>
        </main>
        <div className="w-full absolute bottom-0 flex items-center justify-center bg-zinc-900">
            <Footer />
        </div>
        { (error) && (
            <div className="w-[25rem] fixed bottom-5 right-5 bg-red-500 text-zinc-50 py-2 px-4 rounded shadow text-center">
                {errorMessage}
            </div>
        )}
        </>
    );
};

export default CreatePost;