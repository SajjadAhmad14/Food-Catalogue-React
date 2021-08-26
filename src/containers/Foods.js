import allActions from '../store/actions/index';
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from 'react';
import axios from "axios";
import FoodItem from '../components/FoodItem';

const Foods = () => {
  const foods = useSelector(state => state.foodReducer.foods);
  const foodList = foods
  const dispatch = useDispatch();
  function getData() {
    return dispatch => {
      axios.get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
        .then(res =>
          dispatch(allActions.foodActions(res.data.meals))
        );
    };
  }
  useEffect(() => {
    dispatch(getData());
  }, []);
  return (
    <div className="card-grid">
      {foodList.map((item) => (
        <FoodItem avatar={item.strMealThumb}/>
      ))}
    </div>

  )
}

export default Foods;