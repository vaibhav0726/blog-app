import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  // we have to give the initially selected value
  const [author, setAuthor] = useState("mario");
  const [isPending, setIsPending] = useState(false);
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, body, author };
    setIsPending(true);

    fetch("http://localhost:8000/blogs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog),
    }).then(() => {
      console.log("new blog added successfully");
      setIsPending(false);
      // -1 for going back in history
      // history.go(-1);
      // for going back to specific location
      history.push("/");
    });
  };

  return (
    <div className="create">
      <h2>Add a New Blog </h2>
      <form onSubmit={handleSubmit}>
        <label>Blog Title:</label>
        {/* helping to render the hello and making the changes */}
        <input
          type="text"
          required
          value={title}
          onChange={(event) => {
            setTitle(event.target.value);
          }}
        />
        <label>Blog body:</label>
        <textarea
          required
          value={body}
          onChange={(event) => {
            setBody(event.target.value);
          }}
        />
        <label>
          <select
            value={author}
            onChange={(event) => {
              setAuthor(event.target.value);
            }}
          >
            <option value="mario">Mario</option>
            <option value="yoshi">Yoshi</option>
          </select>
        </label>
        {!isPending && <button>Add Blog</button>}
        {isPending && <button>Adding blog...</button>}
      </form>
    </div>
  );
};

export default Create;
