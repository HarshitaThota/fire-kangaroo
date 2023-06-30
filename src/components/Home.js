import { async } from "q";
import { useState } from "react";

export default function Home() {
  const [data, setData] = useState();
  //display stuff on front-end (recipes) 
  const[stuff, setStuff] = useState(new Array);

  const handleSubmit = (event) =>{
    event.preventDefault();
		event.stopPropagation();
    setData(event.target[0].value);
    let newName = event.target[0].value;
    search(newName);

  }

  async function search(name){
    console.log(name);
    const options = {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      method: "POST",
      body: JSON.stringify({
        "food": name
      })
    }

    let response = await fetch("http://localhost:8000/test", options);
    const recipes = await response.json(); 
    console.log(recipes);
    console.log(recipes.user);
    setStuff(recipes.user);
  }

    return( 
    <div>
      <form className="needs-validation" noValidate onSubmit={handleSubmit}>
      <div className="input-group mb-2 mx-auto w-50" >
						<label className="input-group-text bg-warning">Food</label>
						<div className="form-floating me-1"/>
            <input required type="text" className="form-control" id="foodInput" placeholder="Italian Pasta"/>
            <button type="submit" className="ms-5 btn btn-secondary">Search</button>
      </div>
      {data}
      <div>
          {stuff.map((elem, ind) =>{
          return <div key={ind}>{elem.title}{elem.ingredients} {elem.servings}{elem.instructions}</div>
          })}
      </div>
      </form>
    </div>);
    }



