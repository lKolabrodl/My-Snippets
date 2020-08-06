import React, { useState, useEffect } from "react";
import Axios from "axios";

import Posts from "./componets/posts";
import Pagination from "./componets/pagination";

const App = () => {
  //все посты
  const [posts, setPosts] = useState([]);
  //загрузка
  const [loading, setLoading] = useState(false);
  //выбранная страница
  const [currenPage, setCurrenPage] = useState(1);
  //сколько постов на странице
  const [postPerPage, setPostPerPage] = useState(10);

  const indexLastPost = currenPage * postPerPage; // 1 * 10
  const indexFirstPost = indexLastPost - postPerPage; // 10 - 10
  const currenPosts = posts.slice(indexFirstPost, indexLastPost); // от 0 до 10 вернул = 10.

  const selectNumber = (item) => {
    setCurrenPage(item);
  };

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await Axios.get("https://jsonplaceholder.typicode.com/posts");
      setPosts(res.data);
      setLoading(false);
    };
    fetchPosts();
  }, []);

  return (
    <div className="container">
      <h1>My pagination</h1>
      <Posts posts={currenPosts} loading={loading} />
      <Pagination
        postPerPage={postPerPage}
        totalPost={posts.length}
        selectNumber={selectNumber}
      />
    </div>
  );
};
export default App;
