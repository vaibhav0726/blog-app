import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
  // using it in useFetch custom hook
  // from here
  // const [blogs, setBlog] = useState(null);
  // const [isPending, setIsPending] = useState(true);
  // const [error, setError] = useState(null);
  // useEffect(() => {
  //   fetch("http://localhost:8000/blogs")
  //     .then((res) => {
  //       // console.log(res.ok);
  //       if (!res.ok) {
  //         throw Error("Couldn't fetch the data for the resources");
  //       }
  //       return res.json();
  //     })
  //     .then((data) => {
  //       setBlog(data);
  //       setIsPending(false);
  //       setError(null);
  //     })
  //     .catch((err) => {
  //       // console.log(err.message);
  //       setIsPending(false);
  //       setError(err.message);
  //     });
  // }, []);
  // till here

  // const [name, setName] = useState("vaibhav");

  // const handleDelete = (id) => {
  //   const newBlog = blogs.filter((blog) => blog.id !== id);
  //   setBlog(newBlog);
  // };

  // const handleClick = () => {
  //   console.log("hello world");
  // };
  //   const handleClickAgain = (name) => {
  //     console.log("hello " + name + " again");
  //   };

  // grab the data and name it is as blogs
  const {
    data: blogs,
    isPending,
    error,
  } = useFetch("http://localhost:8000/blogs");

  return (
    <div className="home">
      {/* <h2>Homepage</h2>
      <button onClick={handleClick}>Click Me!</button>
      <button
        onClick={() => {
          handleClickAgain("vaibhav");
        }}
      >
        Click Me Again!
      </button> */}

      {/* using map to cycle on the array */}
      {/* when data is stored locally */}
      {/* {blogs && (
        <BlogList
          blogs={blogs}
          title={"All blogs"}
          handleDelete={handleDelete}
        />
      )} */}
      {/* <BlogList
        blogs={blogs.filter((blog) => blog.author === "mario")}
        title={"Mario blogs"}
        handleDelete={handleDelete}
      /> */}
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {blogs && <BlogList blogs={blogs} title={"All blogs"} />}
      {/* <button onClick={() => setName("varshney")}>Change Name!</button>
      <p>{name}</p> */}
    </div>
  );
};

export default Home;
