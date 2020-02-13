import React from "react";
import "./App.css";
import PostList from "./components/PostList";
import { UserProvider } from "./components/DemoContext";

function App() {
  return (
    <div className="App">
      <UserProvider value={{ name: "Bhajanpreet", age: 27 }}>
        <PostList />
      </UserProvider>
    </div>
  );
}

export default App;
