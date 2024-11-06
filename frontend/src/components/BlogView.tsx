import { Blog } from "../hooks"
import { Avatar } from "./BlogCard"
import parse from 'html-react-parser';

const BlogView = ({ blog }: { blog: Blog }) => {
    const publishedDate = formatDateString(blog.publishedDate);

    return (
        <div className="flex justify-center py-20">

            <div className="flex flex-col-reverse sm:grid sm:grid-cols-12 gap-4 px-5 sm:px-10 w-full max-w-screen-xl mt-5 sm:mt-10">
                <div className="sm:col-span-8 mb-5">
                    <div className="text-xl sm:text-4xl font-bold">
                        {blog.title}
                    </div>
                    <div className="my-3 text-neutral-400 font-semibold">
                        Posted on {publishedDate}
                    </div>
                    <div className="sm:text-lg font-normal text-justify blog-content ">
                        {parse(blog.content)}
                    </div>
                </div>
                <div className="sm:col-span-4 border-b-2 sm:border-none pb-2 sm:pb-0">
                    <div className="font-semibold text-slate-500">
                        Author
                    </div>
                    <div className="flex items-center mt-1 w-full">
                        <div className="pr-2">
                            <Avatar name={blog.author.username || 'Anonymous'} size="big" />
                        </div>
                        <div>
                            <div className="text-lg sm:text-xl font-bold ">{blog.author.username || 'Anonymous'}</div>
                            <div className="text-sm ">Random catch phrase about the author's ability to grab the user's attention</div>
                        </div>
                    </div>
                    {/* <div className="sm:hidden h- bg-black"></div> */}
                </div>
            </div>
        </div>
    )
}

export const formatDateString = (dateString: string): string => {
    const date = new Date(dateString);

    // Ensure the date is valid
    if (isNaN(date.getTime())) {
        return 'Invalid Date';
    }

    return date.toLocaleDateString('en-GB', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    });
};

export default BlogView