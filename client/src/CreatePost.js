import { useState } from "react";
import axios from "axios";

export default function CreatePost() {
  const [title, setTitle] = useState("");

  function handleInput(e) {
    setTitle(e.target.value);
  }

  async function onSubmit(event) {
    event.preventDefault();
    await axios.post("http://localhost:4000/posts", {
      title,
    });
  }

  return (
    <>
      <section>
        <form onSubmit={onSubmit}>
          <div className="post-input">
            <label htmlFor="post">Title</label>
            <input
              type="text"
              id="post"
              name="post"
              value={title}
              onChange={handleInput}
            />
          </div>

          <button type="submit" value="Submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </section>
    </>
  );
}
