import { useState } from "react";

export default function Home() {
  const [data, setData] = useState(); 

  const handleSubmit = (event) =>{
    setData(event.target[0].value);
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
      </form>
    </div>);
    }