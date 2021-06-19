import Header from "./Header";
import ContentList from "./ContentList";
import { useFetchContent } from "../hooks/useFetchContent";
import "./App.css";
import { useEffect } from "react";
import FetchMoreButton from "./FetchMoreButton/index";

const App = () => {

  const [content, fetch, fetchMore] = useFetchContent();

  useEffect(() => {
    fetch();
  }, [])
  
  return (
    <div className="App">
      <Header onSearch={fetch} />
      <h1>Simple content list</h1>
      <ContentList content={content} />
      <FetchMoreButton fetchMore={fetchMore} />
      {/* TODO: Put FetchMoreButton component here */}
    </div>
  );
};

export default App;
