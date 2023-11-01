import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/Post.scss";
import PostCard from "./PostCard";
const LandingPage = () => {
  const [postData, setPostData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        setPostData(response.data);
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        // Hide loading spinner, regardless of the result
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="Loading-data">...Loading</div>;
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Post List</h2>
      {postData.map((post) => {
        return <PostCard post={post} />;
      })}
    </div>
  );
};

export default LandingPage;
