import axios from "axios";
import { useEffect, useState } from "react"
import { BASE_URL } from "../config";

export interface Blog {
    "content": string,
    "title": string,
    "id": number,
    "author": {
        "username": string
    }
    "publishedDate": string,
    "contentDesc": string
}

export const useBlogs = () => {
    const [loading, setLoading] = useState(true);
    const [blogs, setBlogs] = useState<Blog[]>([])

    useEffect(() => {
        const getBlogs = async () => {
            const response = await axios.get(`${BASE_URL}/blog/bulk`)
            console.log(response);
            if (response.status === 200) {
                setBlogs(response.data);
                setLoading(false)
            }

        };

        getBlogs();
    }, [])

    return {
        loading,
        blogs
    }
}

export const useBlog = ({ id }: { id: number }) => {
    const [loading, setLoading] = useState(true);
    const [blog, setBlog] = useState<Blog>()

    useEffect(() => {
        const getBlog = async () => {
            const response = await axios.get(`${BASE_URL}/blog/${id}`)
            console.log(response);
            if (response.status === 200) {
                setBlog(response.data);
                setLoading(false)
            }

        };

        getBlog();
    }, [])

    return {
        loading,
        blog
    }
}


export const useAuth = () => {
    const authToken = localStorage.getItem('token');
    console.log(authToken)
    const isAuthenticated = authToken !== null ? true : false;
    console.log(isAuthenticated)

    return {
        isAuthenticated
    };
};