import { useDispatch } from "react-redux";
import React, { useState, useEffect } from 'react';
import axios from "axios";
import allActions from '../store/actions/index';
const Categories = () => {

  const dispatch = useDispatch();
  function getData() {
    return dispatch => {
      axios.get("https://www.themealdb.com/api/json/v1/1/categories.php")
        .then(res =>
          dispatch(allActions.categoryActions(res.data))
        );
    };
  }
  useEffect(() => {
    dispatch(getData());
  }, []);

  return (
    <div className="intro">
      <div className="logo"></div>
      <h2>Discover the best food & drinks!</h2>
      <select className="categroes" onChange={selectCategory}>
        {categories.map((item) => (
          <option value={item} key={item}>{item}</option>
        ))}
      </select>
      <input type="text" className="search" placeholder="Search for a dish" />
    </div>
  )
}

export default Categories;
