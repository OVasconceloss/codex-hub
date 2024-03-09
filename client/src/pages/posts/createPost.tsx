import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/footer/footer";
import { Header } from "../../components/header/header"

const CreatePost: React.FC = () => {
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
                                className={`w-[50rem] mb-10 p-2 outline-none border-2 rounded-md
                                transition ease-linear focus:border-zinc-900 dark:focus:border-indigo-500`}
                            />
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="content" className="mb-1 dark:text-zinc-100">Post Content</label>
                        <textarea 
                            name="content" 
                            className={`w-[50rem] h-72 min-h-72 max-h-72 mb-10 p-2 outline-none border-2 rounded-md
                            transition ease-linear focus:border-zinc-900 dark:focus:border-indigo-500`}>
                        </textarea>
                    </div>
                    <div className="w-[50rem] flex items-end justify-end space-x-5">
                        <Link to={'/explorer'}>
                            <button className="w-[10rem] px-5 py-2 text-zinc-900 text-center bg-zinc-300 rounded-sm dark:bg-red-500 dark:text-zinc-100">Cancel</button>
                        </Link>
                        <button className="w-[10rem] px-5 py-2 text-zinc-100 text-center bg-indigo-500 rounded-sm">Create Post</button>
                    </div>
                </div>
            </div>
        </main>
        <div className="w-full absolute bottom-0 flex items-center justify-center bg-zinc-900">
            <Footer />
        </div>
        </>
    );
};

export default CreatePost;