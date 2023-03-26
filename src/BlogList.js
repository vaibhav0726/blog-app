import { Link } from "react-router-dom";

// const BlogList = ({ blogs, title, handleDelete }) => {
const BlogList = ({ blogs, title }) => {
  // unefficient method
  // const [newBlogs, setBlogs] = useState(blogs);

  // const handleClick = (id) => {
  //   setBlogs(newBlogs.filter((blog) => blog.id !== id));
  // };

  return (
    <div className="blog-list">
      <h1>{title}</h1>
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <Link to={`/blogs/${blog.id}`}>
            <h2>{blog.title}</h2>
            <p>written by:- {blog.author}</p>
          </Link>
          {/* <button
            onClick={() => {
              handleDelete(blog.id);
            }}
          >
            Delete this Blog
          </button> */}
        </div>
      ))}
    </div>
  );
};

export default BlogList;
