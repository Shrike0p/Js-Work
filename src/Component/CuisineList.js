import React from 'react';

const CuisineList = ({ categories, handleCuisineClick }) => {
  return (
    <div className="cuisine-list">
      {categories.map((category) => (
        <div
          key={category.idCategory}
          className="cuisine-card"
          onClick={() => handleCuisineClick(category.strCategory)}
        >
          <img src={category.strCategoryThumb} alt={category.strCategory} className="cuisine-image" />
          <div className="cuisine-name">{category.strCategory}</div>
        </div>
      ))}
    </div>
  );
};

export default CuisineList;
