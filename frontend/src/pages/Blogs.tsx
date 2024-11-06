import BlogCard from "../components/BlogCard"
import BlogCardSkeleton from "../components/BlogCardSkeleton";
import { formatDateString } from "../components/BlogView";
import { useBlogs } from "../hooks";


const Blogs = () => {
  const { loading, blogs } = useBlogs();
  console.log(blogs)
  const divs = [];
  for (let i = 0; i < 3; i++) {
    divs.push(
      <div className="w-4/5 sm:w-2/3 mx-auto">
        <BlogCardSkeleton />
      </div>
    );
  }



  return (
    <div className="bg-rose-50 h-full w-full">
      {/* <AppBar /> */}
      <div className="py-32 grid grid-cols-1 gap-12 w-full">

        {
          loading ? divs : blogs.map((blog) => {
            const { id = 0, title = '', content = '', publishedDate = 'Dec 3,2023', author: { username: authorName = '' }, contentDesc = '' } = blog;
            const formattedDate = formatDateString(publishedDate);

            return <div className="w-4/5 sm:w-2/3 mx-auto"><BlogCard id={id} authorName={authorName || 'Anonymous'} content={content} image="" publishedDate={formattedDate} title={title} contentDesc={contentDesc} /></div>

          }).reverse()
        }

      </div>
    </div>
  )
}

export default Blogs