import { useParams } from "react-router-dom";
import { useBlog } from "../hooks";
import BlogView from "../components/BlogView";
import AppBar from "../components/AppBar";
import BlogViewSkeleton from "../components/BlogViewSkeleton";

const Blog = () => {
  const params = useParams()
  const id = parseInt(params.id || '1');
  const { loading, blog } = useBlog({ id: id });
  console.log(blog)
  if (loading) {
    return <div>
      <BlogViewSkeleton />
    </div>
  }

  return (
    <div>

      <BlogView blog={blog!} />

    </div>
  )
}

export default Blog