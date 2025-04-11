import { useState } from "react";
import "./App.css";
// import { response } from "express";


function App() {
  const [text,setText] =useState("");
  const [results,setResults] = useState([]);

  return(<>
    <h1 class="head">spark search engine</h1>
  
  <div>
    
    <input   class="style"  type="text" 
    placeholder="enter the search" 
    value={text}
    onChange={(e)=> setText(e.target.value)}
    />
      <button class="but"
      onClick={()=>{
        fetch("/api/search?text=" + text)
        .then((response)=>{
          response
          .json()
          .then((results)=> setResults(results))
          .catch((error)=> console.error("Fail to search!", error));

      })
      .catch((error)=> console.error("Fail to search!", error));
    }}
    >
       search</button>
       <ul type="none">
        {
          results.map((item, index) => (
            <li key={index}>
              <a href={item.url} target="_blank">
                {item.title}
                {item.url}
                
              </a>
            </li>
          ))
          
        }
      </ul>
     </div>;
     </>
  
)};

export default App;
