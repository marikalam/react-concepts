/*
Here in this file, we are fetching data from a json file stored in the public directory (see below). 
We use useState and useEffect in order to set the data we retrieve from the getData() function. 
Then we are able to successfully call the 'data' variable in the return statement.

Step 1: Create a file called data.json in the 'public' directory.

[
    {
        "first_name": "Jane",
        "last_name": "Done",
        "about": "This is about me."
    },
    {
        "first_name": "Sam",
        "last_name": "Smith",
        "about": "Here I will write my about me."
    }
]

Step 2: Run 'npm start' and you will see 'Jane' and 'Sam' displayed on the UI.

*/

import React, {useState, useEffect} from "react";
import "./App.css";

function App(){
  const [data, setData] = useState([]);

  const getData = () => {
    fetch("data.json")
    .then((res) => {
      return res.json();
    }).then((json) => {
      setData(json);
    });
  }

  useEffect(()=>{
    getData();
  });

  return (
    <div className="App">
      {
        data && data.length > 0 && data.map((item) => {
          return (<p>{item.first_name}</p>)
        })
      }
    </div>
  )
}
export default App;
