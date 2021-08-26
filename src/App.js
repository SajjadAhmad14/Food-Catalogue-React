import FoodItem from './components/FoodItem';
import Nav from './components/Nav';
import Categories from './containers/Categories';
import Foods from './containers/Foods';
import './App.css';

function App() {
  return (
    <div className="App">
      <Nav />
      <Categories />
      <Foods />
      <FoodItem />
    </div>
  );
}

export default App;
