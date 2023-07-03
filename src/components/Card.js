import React from 'react';

const Card = ({ title, ingredients, servings, instructions }) => {
    return (
      <div className="shadow-lg p-3 mb-5 bg-body-tertiary rounded" style={{ maxWidth: '1020px' }}>
        <div className="row g-0">
          <div className="col-md-4">
            <img src="..." className="img-fluid rounded-start" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="display-6">{title}</h5>
              <p className="card-text small">Ingredients: {ingredients}</p>
              <p className="card-text small">Servings: {servings}</p>
              <p className="card-text small">Instructions: {instructions}</p>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Card;