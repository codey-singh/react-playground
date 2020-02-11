import React, { Component } from "react";
import Axios from "axios";

export default class PostList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      error: ""
    };
  }

  render() {
    const { posts, error } = this.state;

    return (
      <div>
        {posts.length
          ? posts.map(post => <div key={post.id}>{post.title}</div>)
          : null}
        <div>{error ? error : ""}</div>
      </div>
    );
  }

  componentDidMount() {
    Axios.get("https://jsonplaceholder.typicode.com/posts?userId=1")
      .then(response => {
        this.setState({ posts: response.data });
      })
      .catch(error => {
        console.log(error);
        this.setState({ error: `Error fetching data. ${error}` });
      });
  }
}
