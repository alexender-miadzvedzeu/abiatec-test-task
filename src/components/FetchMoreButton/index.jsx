import "./index.css";

const FetchMoreButton = ({fetchMore}) => (
  <button onClick={fetchMore} className="Button" >Fetch More</button>
);

export default FetchMoreButton;
