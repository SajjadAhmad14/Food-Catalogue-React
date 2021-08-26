import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from 'react';
import axios from "axios";
import allActions from '../store/actions/index';
import Foods from './Foods';

const Categories = () => {
  const categories = useSelector(state => state.categoryReducer.categories);
  const categoryList = categories;
  const[category, setCategory] = useState('Seafood');
  const dispatch = useDispatch();
  function getData() {
    return dispatch => {
      axios.get("https://www.themealdb.com/api/json/v1/1/categories.php")
        .then(res =>
          dispatch(allActions.categoryActions(res.data.categories))
        );
    };
  }

  const handleCategory = (e) => {
    setCategory(e.target.value);
  }
  useEffect(() => {
    dispatch(getData());
  }, []);
  return (
    <div className="intro">
      <div className="logo"></div>
      <h2>Discover the best food & drinks!</h2>
      <select className="categroes" onChange={handleCategory}>
        {categoryList.map((item) => (
          <option value={item.strCategory} key={item.strCategory}>{item.strCategory}</option>
        ))}
      </select>
      <input type="text" className="search" placeholder="Search for a dish" />
      <div className="foods">
        <Foods value={category}/>
      </div>
    </div>
  )
}

export default Categories;
