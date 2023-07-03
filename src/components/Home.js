
import { useState } from "react";
import Card from "./Card";
import CardGrid from "./CardGrid"
import StyledContainer from "./StyledContainer";


export default function Home() {
  const [data, setData] = useState();
  //display stuff on front-end (recipes)
  const [stuff, setStuff] = useState(new Array());

  const handleSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();
    setData(event.target[0].value);
    let newName = event.target[0].value;
    search(newName);
  };

  async function search(name) {
    console.log(name);
    const options = {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({
        food: name,
      }),
    };

    let response = await fetch("http://localhost:8000/test", options);
    const recipes = await response.json();
    console.log(recipes);
    console.log(recipes.user);
    setStuff(recipes.user);
  }

  return (
    <StyledContainer>
      <form className="needs-validation" noValidate onSubmit={handleSubmit}>
        <div className="input-group mb-2 mx-auto w-50">
          <div className="form-floating me-1" />
          <input
            required
            type="text"
            className="form-control"
            id="foodInput"
            placeholder="Italian Pasta"
          />
          <button type="submit" className="ms-5 btn btn-secondary">
            Search
          </button>
        </div>
        {data}
        <div>
          {stuff.map((elem, ind) => {
            return (
              <div>
                {stuff.map((elem, ind) => {
                  return (
                    <CardGrid>
                       <Card
                      key={ind}
                      title={elem.title}
                      ingredients={elem.ingredients}
                      servings={elem.servings}
                      instructions={elem.instructions}
                    />
                    </CardGrid>
                  );
                })}
              </div>
            );
          })}
        </div>
      </form>
    </StyledContainer>
  );
}
