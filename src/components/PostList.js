import React, { Component } from "react";
import Axios from "axios";
import { UserConsumer } from "./DemoContext";

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
      <UserConsumer>
        {context => {
          return (
            <div>
              <div>
                {context.name} is {context.age} years old.
              </div>
              {posts.length
                ? posts.map(post => <div key={post.id}>{post.title}</div>)
                : null}
              <div>{error ? error : ""}</div>
            </div>
          );
        }}
      </UserConsumer>
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
