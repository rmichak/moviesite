import React, {useState, useEffect} from "react";
import './App.css';
import bg from "./background.jpg";

//https://api.github.com/users/rmichak

const movieAPI = "https://heh448mxna.execute-api.us-east-1.amazonaws.com/dev/movie"

function App({login}) {

  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(movieAPI)
      .then((response) => response.json() )
      .then(setData);
  }, [])

  if (data) {
    console.log(data[0].info.image_url)
    return <div className="App" style={{ backgroundImage:`url(${bg})`,backgroundRepeat:"no-repeat",height:1000,width:"100%" }}>
      
      <h1>{data[0].title}</h1>
      <img alt="{data[0].title}" src={data[0].info.image_url}/>      
      <p>{data[0].info.plot}</p>
      </div>
  } 

  return (
    <div className="App" style={{ backgroundImage:`url(${bg})`,backgroundRepeat:"no-repeat",height:1000,width:"100%" }}>
    </div>
 );
}

export default App;
