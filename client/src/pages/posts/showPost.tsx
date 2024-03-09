/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import MDEditor from "@uiw/react-md-editor";
import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Footer from "../../components/footer/footer";
import { getPostData } from "../../services/callPosts";
import { Header } from "../../components/header/header";

const ShowPost: React.FC = () => {
    const { id } = useParams<{ id: string }>(); 
    const [postData, setPostData] = useState<any>();

    const getPostInformation = async () => {
        if (id) {
            const response = await getPostData(id); 
            setPostData(response);
        }
    }

    useEffect(() => {
        getPostInformation();
    }, [id]);

    return (
        <>
            <Header />
            <main className="p-10">
                {postData && <MDEditor.Markdown 
                    source={`${postData.data.text}`}
                    style={{ 
                        color: '#f4f4f5',
                        backgroundColor: '#27272a',    
                    }}
                    className="p-5"
                />}
            </main>
            <div className="w-full absolute bottom-0 flex items-center justify-center bg-zinc-900">
                <Footer />
            </div>
        </>
    );
};

export default ShowPost;