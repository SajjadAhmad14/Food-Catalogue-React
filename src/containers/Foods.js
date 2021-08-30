import allActions from '../store/actions/index';
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from 'react';
import axios from "axios";
import FoodItem from '../components/FoodItem';

const Foods = ({ food }) => {
  const [category, setCategory] = useState('Beef');
  const categories = useSelector(state => state.categoryReducer.categories);
  const categoryList = categories;
  const foods = useSelector(state => state.foodReducer.foods);
  const foodList = foods;
  console.log(foodList);
  const dispatch = useDispatch();
  const fetchFoods = () => {
    axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
      .then(res =>
        dispatch(allActions.foodActions(res.data.meals))
      );
  }

  const categoryHanle = (e) => {
    const value = e.target.value;
    setCategory(value);
    fetchFoods();
  }

  useEffect(() => {
    fetchFoods();
  }, []);
 
  return (
    <div>
      <select className="categroes" onChange={categoryHanle}>
        {categoryList.map((item) => (
          <option value={item.strCategory} key={item.strCategory}>{item.strCategory}</option>
        ))}
      </select>
      <div className="card-grid">
        {foodList.map((item) => (
          <FoodItem food={item} />
        ))}
      </div>
    </div>
  )
}

export default Foods;