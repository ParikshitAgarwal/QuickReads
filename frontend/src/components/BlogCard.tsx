import { FaEllipsis, FaRegBookmark } from "react-icons/fa6"
import { Link } from "react-router-dom"
import parse from 'html-react-parser';

interface BlogCardProps {
    authorName: string,
    publishedDate: string,
    title: string,
    content: string,
    image: string,
    id: number,
    contentDesc: string
}

const BlogCard = ({ authorName, publishedDate, title, image, id, contentDesc }: BlogCardProps) => {
    return (
        <Link to={`/blog/${id}`}>
            <div className="bg-white w-full h-[420px] sm:h-80 flex flex-col-reverse sm:flex-row justify-between items-center py-10 px-5 sm:px-10  shadow-xl rounded-lg">

                <div className="flex flex-col items-start justify-between w-full h-full">
                    <div className="w-full">
                        <div className="w-full flex items-center justify-center sm:justify-start">
                            <div className="text-xs sm:text-lg flex justify-center items-center">
                                <Avatar name={authorName} />
                                <span>{authorName}</span>
                                <span className="w-1 h-1 rounded-xl bg-black mx-1.5"></span>
                                <span className="text-gray-400">{publishedDate}</span></div>
                        </div>

                        <div >
                            <div className="text-sm sm:text-lg lg:text-2xl font-bold text-slate-700">
                                {title}
                            </div>
                            <div className="text-xs sm:text-sm lg:text-lg text-justify">
                                {contentDesc?.slice(0, 250) + "..."}
                            </div>
                        </div>

                    </div>

                    <div className="flex justify-between items-center w-full">
                        <div className="text-xs sm:text-xl">3 min read</div>
                        <div className="flex ">

                            <div className="text-md sm:text-xl m-2">
                                <FaRegBookmark />
                            </div>
                            <div className="text-md sm:text-xl m-2">
                                <FaEllipsis />
                            </div>
                        </div>
                    </div>

                </div>
                <div className="px-5">
                    <img src='https://pipedream.com/s.v0/app_RphvpG/logo/orig' className="w-1/2 object-cover sm:w-60 sm:h-52 my-1 sm:my-2 mx-auto" />
                </div>
            </div>
        </Link>
    )
}

export const Avatar = ({ name, size = 'small' }: { name: string, size?: "small" | "big" }) => {
    return <div className={`relative inline-flex items-center justify-center ${size === 'small' ? 'w-7 h-7' : 'w-10 h-10'} overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600 mr-1`}>
        <span className={`font-medium ${size === 'small' ? 'text-xs' : 'text-md'} text-gray-600 dark:text-gray-300`}>{name[0]}</span>
    </div>

}

export default BlogCard