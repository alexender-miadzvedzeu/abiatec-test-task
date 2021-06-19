import { useEffect, useState } from "react";
import './index.css'
const ContentList = ({ content }) => {

  const [images, setimages] = useState([]);

  useEffect(() => {
    content.results ? setimages([...content.results]) : setimages([...images, ...content]);
    // setimages([...images, ...content]);
    // console.log(content)
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
