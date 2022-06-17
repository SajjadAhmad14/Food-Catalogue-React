import FoodItem from './components/FoodItem';
import Categories from './containers/Categories';
import Foods from './containers/Foods';

import './App.css';

const App = () => (
  <div className="App">
    <Categories />
    <Foods />
    <FoodItem />
  </div>
);

export default App;
