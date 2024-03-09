import React from "react";
import { Header } from "../../components/header/header"
import Footer from "../../components/footer/footer";

const CreatePost: React.FC = () => {
    return (
        <>
        <Header />
        <main>

        </main>
        <div className="w-full absolute bottom-0 flex items-center justify-center bg-zinc-900">
            <Footer />
        </div>
        </>
    );
};

export default CreatePost;