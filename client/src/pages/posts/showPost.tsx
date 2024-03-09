import React from "react";
import Footer from "../../components/footer/footer";
import { Header } from "../../components/header/header";

const ShowPost: React.FC = () => {
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

export default ShowPost;