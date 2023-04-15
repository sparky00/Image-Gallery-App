import "./App.css";
import React,{ useState,useEffect} from "react";
import {ImageCards } from "./components/ImageCards";
import ImageSearch from "./components/ImageSearch";

function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setISLoading] = useState(true);
  const [term, setTerm] = useState("");

  

  useEffect(() => {
       
    
     fetch(`https://pixabay.com/api/?key=35404762-f0e754ad467ea7fc5693b8797&q=${term}&image_type=photo&pretty=true`)
     .then(res => res.json())
     .then(data => {
      setImages(data.hits);
       setISLoading(false);
     })
     .catch(err => console.log(err));
       
  },[term]); 

  return (
    <div className="App">
      <ImageSearch searchText={(text)=>setTerm(text)} />

        {!isLoading && images.length === 0 && <h1 className="fs-1 text-warning-emphasis">No Images Found...</h1> }

     {isLoading? <h1 className="fs-1 text-warning-emphasis">Loading...</h1> : <div class="row row-cols-1 row-cols-md-4 g-4 ms-4">
      
      {images.map( image =>(
        <ImageCards key={image.id} image={image} />
      ))}
    </div>}
   </div>
  );
}

export default App;