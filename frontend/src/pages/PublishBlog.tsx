import axios from 'axios';
import { ChangeEvent, useEffect, useRef, useState } from 'react';
import { RxAvatar } from 'react-icons/rx';
import { BASE_URL } from '../config';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import Tiptap from '../Tiptap';

const PublishBlog = () => {
    const [title, setTitle] = useState<string>("")
    const [content, setContent] = useState<string>('');
    const [contentDesc, setContentDesc] = useState<string>('');
    const titleRef = useRef<HTMLTextAreaElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const navigate = useNavigate();




    useEffect(() => {

        if (contentRef.current && titleRef.current) {
            titleRef.current.style.height = '44px';
            titleRef.current.style.height = `${titleRef.current.scrollHeight}px`;
            console.log(`${titleRef.current.scrollHeight - 44}px`)
            console.log(window.innerWidth)

            if (window.innerWidth < 640) {
                contentRef.current.style.paddingTop = `${180 + titleRef.current.scrollHeight - 44}px`

            } else {
                contentRef.current.style.paddingTop = `${145 + titleRef.current.scrollHeight - 44}px`

            }

            console.log(contentRef.current.style.marginTop)
        }
    }, [title]);



    // Handle content change
    const handleTitleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setTitle(event.target.value);
    };

    const handleContentChange = (htmlContent: string, textContent: string) => {
        // setContent(event.target.value);
        console.log(htmlContent)
        setContent(htmlContent)
        setContentDesc(textContent)
    };

    const publishArticle = async () => {
        const getToken = localStorage.getItem('token')
        if (getToken !== null) {
            try {
                const articleData = {
                    title: title,
                    content: content,
                    contentDesc: contentDesc
                }
                const response = await axios.post(`${BASE_URL}/blog`,
                    articleData,
                    {
                        headers: {
                            Authorization: `Bearer ${getToken}`
                        }
                    }
                )
                console.log(response.data);

                if (response.status === 200) {
                    toast("Blog Generated Successfully")

                    navigate(`/blog/${response.data.id}`)

                }
            } catch (error) {

            }
        }
        console.log("Please authenticate")

    }



    return (
        <div className='relative w-full h-full flex flex-col py-[82px]'>


            <div className='max-w-screen-lg w-full flex flex-col mx-auto px-5'>
                <div className='fixed max-w-screen-lg w-[90%] sm:w-full z-50 bg-white pt-10'>
                    <div className='mb-2 flex flex-col sm:flex-row  justify-between items-center border-b-2 pb-2'>
                        <div className='flex justify-between sm:justify-normal text-2xl items-stretch sm:items-center w-full sm:w-fit'>
                            <div className='text-3xl mr-2'>
                                <RxAvatar />
                            </div>
                            <span className='font-semibold'> Parikshit Agarwal</span>

                        </div>
                        <div className='w-full flex justify-between mt-2.5 sm:w-fit sm:justify-normal sm:mt-0'>
                            <button className=" text-black text-sm font-semibold px-4 py-2 rounded-md border-2 sm:mx-4" >Save Draft</button>

                            <button onClick={publishArticle} className="bg-gray-800 text-sm text-white font-semibold px-4 py-2 rounded-md" >Publish</button>

                        </div>

                    </div>
                    <textarea
                        placeholder="Title"
                        value={title}
                        maxLength={105}
                        ref={titleRef}
                        onChange={handleTitleChange}
                        className="overflow-hidden resize-none text-xl sm:text-4xl  font-bold border-none placeholder:text-gray-500 focus:outline-none focus:ring-0 w-full"
                    />
                </div>


                {/* <textarea
                    placeholder="Type your content"
                    value={content}
                    maxLength={5000}
                    ref={contentRef}
                    onChange={handleContentChange}
                    className="my-5 overflow-hidden text-justify resize-none text-sm sm:text-xl font-normal border-none placeholder:text-gray-500 focus:outline-none focus:ring-0 "
                /> */}

                <div ref={contentRef} className='w-full'>
                    <Tiptap getContent={handleContentChange} />
                </div>
                {/* Quill editor */}

            </div>



        </div>
    )
}

export default PublishBlog