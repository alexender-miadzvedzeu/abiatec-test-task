import { useEffect, useState } from "react";
import './index.css'
const ContentList = ({ content }) => {

  const [images, setimages] = useState([]);
  
  useEffect(() => {
    if (content.results) {
      setimages([...content.results])
    } else if (Array.isArray(content) && !content.results) {
      setimages([...images, ...content])
    } else if (!Array.isArray(content)) {
      setimages([]);
    }     
  }, [content]);

  return (
    <div className="wrapper">
      {images.map((elem, key) => {
        return (
          <div key={key} className="characterWrapper">
            <div className="imageBox">
              <img className="image" src={elem.image} />
            </div>
            <span className="name">
              {elem.name}
            </span>
          </div>
        )
      })}
    </div>
  );
};

export default ContentList;
