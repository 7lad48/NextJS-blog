import React, {FC} from 'react';
import {Metadata} from "next";
import {API} from "@/api/api";

type PropsType = {
    params: {
        id: string // object key like [folderName]
    }
}

export async function generateMetadata({params: {id}}: PropsType): Promise<Metadata> {
    const post = await API.getPost(id)
    return {
        title: post.title,
    }
}
const Post:FC<PropsType> = async ({ params: {id} }) => {
    const post = await API.getPost(id)
    return (
        <>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
        </>
    );
}

export default Post;