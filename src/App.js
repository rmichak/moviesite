import React, {useState, useEffect} from "react";
import './App.css';
import bg from "./background.jpg";
import MovieComponent from "./MovieComponent.js"

const movieAPI = "https://heh448mxna.execute-api.us-east-1.amazonaws.com/dev/movie"


function App() {

  const [data, setData] = useState(null);
  
  useEffect(() => {
    fetch(movieAPI)
      .then((response) => response.json() )
      .then(setData);
  }, [])

  if (data) {
    console.log(data[0].info.image_url)
    return <div className="App" style={{ backgroundImage:`url(${bg})`,backgroundRepeat:"no-repeat",height:1000,width:"100%" }}>

    
      {data.map((movie, index) => (
        <MovieComponent key={index} movie={movie}/>
      ))}
    
      
      </div>
  } 

  return (
    <div className="App" style={{ backgroundImage:`url(${bg})`,backgroundRepeat:"no-repeat",height:1000,width:"100%" }}>
      
    </div>
 );
}

export default App;
